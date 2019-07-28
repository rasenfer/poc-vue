import interceptors from '@/core/axios-interceptors';

const responseHandler = function (response) {
    const data = response.data;
    const url = response.config.url;
    data.id = url.substring(url.lastIndexOf("/") + 1, url.length);
    return response;
}

interceptors.responseHandlers.unshift(responseHandler);