const routes = require('./src/config/routes');
const pageRouter = routes.routes;
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: 'mkdirr',
      dll: true,
      locale: {
        enable: false,
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
    }],
  ], proxy: {
    '/api': {
      target: 'http://139.196.77.225',
      pathRewrite: { '^/api': '' },
      changeOrigin: true,
    },
  }, routes: pageRouter,
};
