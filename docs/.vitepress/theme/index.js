import DefaultTheme  from "vitepress/theme";
import GlobalComp from '../../component/GlobalComp.vue';
import Layout from './Layout.vue';

console.log('theme index')

export default {
  ...DefaultTheme,
  enhanceApp({app}) {
    // The enhanceApp function receives the Vue app instance,
    // you can register components as you would do in a regular Vue application

    // 全局注册组件
    app.component('GlobalComp', GlobalComp)
    // console.log(app)
  },
  Layout,
  NotFound: () => 'Page not found',
}