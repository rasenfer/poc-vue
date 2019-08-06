function mapService(service, getters, alias) {
  let name = service.name || service.basepath;
  if (name) {
    name = name.startsWith('/') ? name.replace('/', '') : name;
    const basepath = service.basepath || `/${service.name}`;
    getters[alias || `${name}Response`] = $this =>
      $this.$store.getters.getApiRequest(
        `${basepath}${$this._props.id ? `/${$this._props.id}` : ''}`
      );
    service.getters &&
      Object.entries({ ...service.getters }).forEach(entry => {
        getters[`${alias ? alias : ''}${entry[0]}`] = $this => entry[1]($this);
      });
  } else {
    throw 'undefined service base path';
  }
}

export default function(services = []) {
  const getters = {};
  if (Array.isArray(services)) {
    services.forEach(service => {
      mapService(service, getters);
    });
  } else {
    Object.entries(services).forEach(entry =>
      mapService(entry[1], getters, entry[0])
    );
  }
  return getters;
}
