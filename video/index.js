import {LocalVideo} from './src/videos.babel.min.js'
export default {
 	install: function(Vue) {
	 Object.defineProperty(Vue.prototype, '$Video', { value: LocalVideo });
  }
}