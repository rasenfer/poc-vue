import { log } from 'util';
try {
  require('lodash');
  log('lodash configured');
} catch (e) {
  log('lodash config skip');
}
