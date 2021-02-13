import Vue from "vue"
import Router from "vue-router"

// 后面这里引入可以被用户访问的页面组件
import Home from "../components/Home"
import Login from '@/components/login/Login'
import Register from '@/components/login/Register'
import Goodslist from '../components/goods/goodslist'
import AddGoods from '../components/goods/AddGoods'

// 这里导入可以让用户访问的组件
Vue.use(Router);

export default  new Router({
    // 设置路由模式为‘history’，去掉默认的#
    mode: "history",
    routes:[
        {
            // path: "路由地址",
            path: "/",
            // name:"路由别名",
            name:"Login",
            // component: 组件类名,
            component: Login,
        },{
          path:'/Register',
          name:'Register',
          component:Register
        },{
            // path: "路由地址",
            path: "/home",
            // name:"路由别名",
            name:"Home",
            // component: 组件类名,
            component: Home,
        },{
          // path: "路由地址",
          path: "/goodslist",
          // name:"路由别名",
          name:"Goodslist",
          // component: 组件类名,
          component: Goodslist,
      },{
        // path: "路由地址",
        path: "/AddGoods",
        // name:"路由别名",
        name:"AddGoods",
        // component: 组件类名,
        component: AddGoods,
    }
    ]
})