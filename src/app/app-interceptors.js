import { axiosinterceptors } from "@/core";

const patternLast = new RegExp(/([0-9]*)&pageSize=[0-9]*>; rel="last"/);
const patternSize = new RegExp(/([0-9]*)>; rel="last"/);
const patternNumber = new RegExp(/page=[0-9]*([0-9])/);

const responseHandler = function(response) {
  const data = response.data;
  if (Array.isArray(data)) {
    data.forEach((entry) => {
      const url = entry.url.split("/");
      entry.id = url[url.length - 1];
    });

    const link = response.headers.link;
    if (link) {
      const totalPages = Number(link.split(patternLast)[1]);
      if (totalPages) {
        const size = Number(link.split(patternSize)[1]);
        const number = Number(response.config.url.split(patternNumber)[1]);
        response.data = {
          content: response.data,
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
    const url = data.url.split("/");
    data.id = url[url.length - 1];
  }
  return response;
};

axiosinterceptors.responseHandlers.unshift(responseHandler);
