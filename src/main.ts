import {createApp} from 'vue'
import {createPinia} from 'pinia';
import {createStore} from 'vuex';
import App from './App.vue'
import {config} from '@/config';
import {Store} from '@/config/Config';
import {options} from '@/store/vuex';

const app = createApp(App);

if (config.store === Store.pinia) {
    app.use(createPinia());
}

if (config.store === Store.vuex) {
    app.use(createStore(options));
}

app.mount('#app')
