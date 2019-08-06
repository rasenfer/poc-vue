import { log } from 'util';
try {
  require('bootstrap/dist/js/bootstrap.bundle.js');
  require('bootstrap/dist/css/bootstrap.css');
  log('bootstrap configured');
} catch (e) {
  log('bootstrap config skip');
}
