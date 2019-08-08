// const login=require("./pages/user/Login")
exports.routes = [
  // { path: '/', redirect: '/login', exact: true },
  // { path: '/', component: '../pages/Main.js', exact: true },
  // {
  //   path: '/', component: '../layouts/index.js', exact: true,
  //   routes: [
  //     { path: '/', component: '../pages/index.js' },
  //   ],
  //
  // },
  { path: '/policy', component: '../pages/Policy.js', exact: true },
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
