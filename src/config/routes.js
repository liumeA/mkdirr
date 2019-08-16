// const login=require("./pages/user/Login")

exports.routes = [
  {
    path: '/policy', component: '../layouts/Policy.js',
    routes: [
      { path: '/policy', component: '../pages/Policy.js', exact: true },
      { path: '/policy/coverage', component: '../pages/Coverage/Coverage.js' },

    ],
  },
  {
    path: '/', component: '../layouts/mian.js',
    routes: [

      { path: '/', redirect: '/main', exact: true },
      { path: '/main', component: '../pages/main.js', exact: true },
      { path: '/list', component: '../pages/index.js', exact: true },
    ],

  },

]
;
