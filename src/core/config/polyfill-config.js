import { log } from 'util';
try {
  require('whatwg-fetch');
  log('whatwg-fetch configured');
} catch (e) {
  log('whatwg-fetch config skip');
}
