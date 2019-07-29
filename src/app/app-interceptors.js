import {axiosinterceptors} from '@/core';

const responseHandler = function (response) {
    const data = response.data;
    if(data.results) {
        data.results.forEach(entry => {
            const url = entry.url.split("/");
            entry.id = url[url.length - 2];
        });
    } else {
        const url = data.url.split("/");
        data.id = url[url.length - 2];
    }
    return response;
}

axiosinterceptors.responseHandlers.unshift(responseHandler);