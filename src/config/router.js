
var {
  Signin,
  Signup,
  Forgetpwd,
  Home,
  Connom,
  Content,
  Modules
} = require('../components/');

module.exports = [{
    path: '/',
    redirect: to => {
        return 'signin';
    },
    hidden: true
}, {
    path: '/signin',
    component: Signin,
    hidden: true
}, {
    path: '/signup',
    component: Signup,
    hidden: true
}, {
    path: '/forgetpwd',
    component: Forgetpwd,
    hidden: true
},{
    path: '/function1',
    component: Home,
    children: [
      {
        hidden: true,
        path: '',
        redirect: to => {
            return 'guide'
        }
      },{
        path:'guide',
        names:'导航',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'overview'
            },
          },{
              path: 'overview',
              name: '数据概览',
              icon: 'inbox',
              component: Modules.function1.Overview
          }
        ]
      },{
        path:'fun',
        names:'功能',
        component: Content,
        children: [{
            hidden: true,
            path: '',
            redirect: to => {
                return 'roomanage'
            },
          },
          {
              path: 'roomanage',
              name: '房间管理',
              icon: 'inbox',
              component: Modules.function1.Roomanage
          },
          {
              path: 'datamanage',
              name: '数据统计',
              icon: 'inbox',
              component: Modules.function1.Datamanage
          }
        ]
      }
    ]
  },
  {
    path: '/function2',
    component: Home,
    children: [
      {
        hidden: true,
        path: '',
        redirect: to => {
            return 'guide1'
        }
      },{
        path:'guide1',
        names:'导航',
        component: Content,
        children: [{
          hidden: true,
          path: '',
          redirect: to => {
            return 'fun2start'
          },
        },{
          path:'fun2start',
          name: '模块2-start',
          icon: 'inbox',
          component: Modules.function2.Fun2
        },{
          path:'fun2fee',
          name: '模块2-fee',
          icon: 'inbox',
          component: Modules.function2.Fun2fee
        }
        ]
      }
    ]
  }
]
