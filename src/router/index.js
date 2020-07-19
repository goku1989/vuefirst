import Vue from "vue"
import Router from "vue-router"

// 后面这里引入可以被用户访问的页面组件
import Home from "../components/Home"
import Course from "../components/Course"
import Cart from "@/components/Cart"

// 这里导入可以让用户访问的组件
Vue.use(Router);

export default  new Router({
    // 设置路由模式为‘history’，去掉默认的#
    mode: "history",
    routes:[
        // 路由列表

        {
            // path: "路由地址",
            path: "/",
            // name:"路由别名",
            name:"Home",
            // component: 组件类名,
            component: Home,
        },{
            // path: "路由地址",
            path: "/home",
            // name:"路由别名",
            name:"Home",
            // component: 组件类名,
            component: Home,
        },{
          path: "/course",
          name: "Course",
          component: Course,
        },{
          name:"Cart",
          path: "/cart",
          component: Cart,
        },
    ]
})