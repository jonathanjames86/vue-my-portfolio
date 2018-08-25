import '@babel/polyfill';
import Vue from 'vue';
// import './plugins/vuetify';
import 'material-design-icons-iconfont/dist/material-design-icons.css'; // Ensure you are using css-loader
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import Vuetify from 'vuetify';
Vue.use(Vuetify, {
  iconfont: 'fa',
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
