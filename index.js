
import { linkRefresher } from './src/helper.js';

window.$docsify = window.$docsify || {};
window.$docsify.plugins = (window.$docsify.plugins || []).concat([
  (hook, vm) => hook.doneEach(linkRefresher)
]);
