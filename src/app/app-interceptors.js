import {axiosinterceptors} from '@/core';

const responseHandler = function (response) {
    const data = response.data;
    const url = response.config.url;
    data.id = url.substring(url.lastIndexOf("/") + 1, url.length);
    return response;
}

axiosinterceptors.responseHandlers.unshift(responseHandler);