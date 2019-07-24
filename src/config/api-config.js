import apiUrls from "@/app/api-urls";

window.api = process.env.API || apiUrls[process.env.NODE_ENV];
window.localApi = apiUrls["local"];