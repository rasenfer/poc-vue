import apiUrls from "@/app/api-urls";
import axios from 'axios';

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};

const validStatuses = [
    200, 201, 202, 203, 204,
    300, 301, 302, 303, 304
];

function getHeaders(multipart = false) {
    let headers = DEFAULT_HEADERS

    if (multipart) {
        headers = {}
    }

    if (localStorage && localStorage.token) {
        headers = {
            'Authorization': `JWT ${localStorage.token}`,
            ...headers
        }
    }
    
    headers = {
        ...headers,
        "X-Requested-With": window.appName
    }

    return headers
}

export function checkResponse(response) {
    if (validStatuses.includes(response.status)) {
        return response
    }

    // If not authorized then reset token
    // and redirect to login page
    if (localStorage && response.status === 401) {
        localStorage.removeItem('token')
        return Promise.reject(new Error('USER_ANONYMOUS'))
    }

    let err = new Error(response.statusText)
    err.response = response

    return Promise.reject(err)
}

export function processAPIErrors(apiErrors) {
    let errors = {}

    if (apiErrors) {
        for (let key of Object.keys(apiErrors)) {
            let err = apiErrors[key]

            errors[key] = err

            if (typeof err === Object || err.hasOwnProperty('length')) {
                errors[key] = apiErrors[key][0]
            }
        }
    }

    return errors
}

export function qs(params) {
    return (
        Object
            .keys(params)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
            .join('&')
    )
}

function Api(basePath) {
    return {
        get: (uri, data = {}) => {
            if (Object.keys(data).length > 0) {
                uri = `${uri}?${qs(data)}`
            }
            return fetch(`${basePath}${uri}`, {
                headers: getHeaders()
            })
        },
        post: (uri, data) => {
            return axios.post(`${basePath}${uri}`, data, {
                headers: getHeaders()
            })
        },
        put: (uri, data) => {
            return axios.put(`${basePath}${uri}`, data, {
                headers: getHeaders()
            })
        },
        delete: (uri) => {
            return axios.delete(`${basePath}${uri}`, {
                headers: getHeaders()
            })
        },
        upload: (uri, data) => {
            return fetch(`${basePath}${uri}`, {
                headers: getHeaders(true),
                method: 'POST',
                body: data
            })
        }
    }
}

export default new Api(process.env.API || apiUrls[process.env.NODE_ENV]);
export const local = new Api(apiUrls["test"]);
export const mock = new Api(apiUrls["local"]);