// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: false,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '云精算',
      dll: true,
      locale: {
        enable: true,
        default: 'zh-CN',
      },

      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    },
    ],
  ],
  routes: require('@/config/routes').routes,
  proxy: {
    '/api': {
      target: 'http://139.196.77.225/dev',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  },
};
