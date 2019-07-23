import endpoints from "@/config/endpoints";

window.endpoint = process.env.ENDPOINT || endpoints[process.env.NODE_ENV]