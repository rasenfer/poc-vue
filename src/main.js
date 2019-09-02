import { start } from '@/core';

import '@/app/app-interceptors';
import routes from '@/app/routes';
import apiUrls from '@/app/api-urls';
import store from '@/store';
import MainView from '@/views/MainView';

const packageInfo = require('../package.json');

start(packageInfo.name, MainView, store, routes, apiUrls);
