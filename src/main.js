// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
import { Carousel,CarouselItem  } from 'element-ui';
Vue.component(Carousel.name, Carousel);
Vue.component(CarouselItem.name, CarouselItem);
import Axios  from 'axios'
Vue.prototype.$axios = Axios

import fastClick from 'fastclick'
fastClick.attach(document.body)
import './assets/styles/base.css'
import './assets/styles/reset.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
