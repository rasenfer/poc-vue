import Vue from 'vue';

const checkStoredResponse = (uri, restoring, resolve, reject) => {
  const store = Vue.config.store;
  const apiResponse = store.getters.getApiRequest(uri);
  if (apiResponse.dummy) {
    if (!restoring && Vue.config.dev.lastUpdate === store.getters.getLastUpdate()) {
      resolve(null);
    } else {
      reject(apiResponse);
    }
  } else {
    resolve(apiResponse);
  }
};

export default function(uri) {
  let response = null;
  if (
    Vue.config.devtools &&
    Vue.config.dev.lastUpdate >= Vue.config.store.getters.getLastUpdate()
  ) {
    response = new Promise(resolve => {
      const waitCheckStoredResponse = () => {
        clearTimeout(Vue.config.dev.timeouts[uri]);
        checkStoredResponse(uri, Vue.config.dev.restoring, resolve, () => {
          Vue.config.dev.timeouts[uri] = setTimeout(waitCheckStoredResponse, 100);
        });
      };
      waitCheckStoredResponse();
    });
  }
  return response;
}
