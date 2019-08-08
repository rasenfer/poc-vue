function mapService(service, getters, alias, props) {
  let name =
    typeof service === 'string' || service instanceof String
      ? service
      : service.name || service.basepath;
  if (name) {
    name = name.startsWith('/') ? name.replace('/', '') : name;
    const basepath = service.basepath || `/${name}`;
    const responseGetter = $this => {
      const path = [''];
      props && props.forEach(prop => path.push($this[prop] || prop));
      return $this.$store.getters.getApiRequest(`${basepath}${path.join('/')}`);
    };
    getters[`${alias || name}Response`] = responseGetter;
    getters[alias || name] = $this => {
      const data = responseGetter($this).data;
      return (data && data.content) || data;
    };
    getters[`${alias || name}PageMetadata`] = $this => {
      const data = responseGetter($this).data;
      return data && data.pageMetadata;
    };
    service.getters &&
      Object.entries({ ...service.getters }).forEach(entry => {
        getters[`${alias ? alias : ''}${entry[0]}`] = $this => entry[1]($this);
      });
  } else {
    throw 'undefined service path';
  }
}

export default function(maps = []) {
  const getters = {};
  if (Array.isArray(maps)) {
    maps.forEach(service => {
      mapService(service, getters);
    });
  } else {
    Object.entries(maps).forEach(entry => {
      const alias = entry[0];
      const map = entry[1];
      if (entry[0] !== 'props') {
        mapService(
          map.service || map,
          getters,
          alias,
          map.props,
        );
      }
    });
  }
  return getters;
}
