import axios from 'axios';

const patternLast = new RegExp(/([0-9]*)&pageSize=[0-9]*>; rel="last"/);
const patternSize = new RegExp(/([0-9]*)>; rel="last"/);
const patternNumber = new RegExp(/page=[0-9]*([0-9])/);

function responseHandler(response, headers) {
  let data = JSON.parse(response);
  if (Array.isArray(data)) {
    data.forEach(entry => {
      const url = entry.url.split('/');
      entry.id = url[url.length - 1];
    });

    const { link } = headers;
    if (link) {
      const totalPages = Number(link.split(patternLast)[1]);
      if (totalPages) {
        const size = Number(link.split(patternSize)[1]);
        const number = Number(link.split(patternNumber)[1]);
        data = {
          content: data,
          pageMetadata: {
            size,
            totalElements: totalPages * size,
            totalPages,
            number
          }
        };
      }
    }
  } else {
    const url = data.url.split('/');
    data.id = url[url.length - 1];
  }
  return data;
}

function requestHandler(request) {
  if (request.method !== 'get') {
    request.proxy = 'local';
  } else {
    request.transformResponse = responseHandler;
  }
  return request;
}

axios.interceptors.request.use(requestHandler);
