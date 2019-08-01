import Vue from 'vue';

const checkStoredResponse = (uri, restoring, resolve, reject) => {
  const store = Vue.config.store;
  const lastUpdate = Vue.config.lastUpdate;
  const storeLastUpdate = store.getters.getLastUpdate();
  const apiResponse = store.getters.getApiRequest(uri);
  if (apiResponse.dummy) {
    if (!restoring && lastUpdate === storeLastUpdate) {
      resolve(null);
    } else {
      reject(apiResponse);
    }
  } else {
    resolve(apiResponse);
  }
};

export default function(uri) {
  const store = Vue.config.store;
  const lastUpdate = Vue.config.lastUpdate;
  const restoring = Vue.config.restoring;
  const storeLastUpdate = store.getters.getLastUpdate();
  let response = null;
  if (Vue.config.devtools && lastUpdate >= storeLastUpdate) {
    response = new Promise((resolve) => {
      const waitCheckStoredResponse = () => {
        clearTimeout(Vue.config.timeouts[uri]);
        checkStoredResponse(uri, restoring, resolve, () => {
          Vue.config.timeouts[uri] = setTimeout(waitCheckStoredResponse, 100);
        });
      };
      waitCheckStoredResponse();
    });
  }
  return response;
}
