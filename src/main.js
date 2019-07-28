import config from "@/core/config/app-config";


import App from "@/app/App";
import routes from "@/app/routes";
import apiUrls from "@/app/api-urls";
import store from "@/store";

const packageInfo = require("../package.json");

config(packageInfo.name, App, store, routes, apiUrls);