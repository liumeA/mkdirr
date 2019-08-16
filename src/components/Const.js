Date.prototype.format = function(fmt) { //author: meizz
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    'S': this.getMilliseconds(), //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
  return fmt;
};

export const START_TIME = new Date(new Date().setDate(new Date().getDate() + 1)).format('yyyy-MM-dd');
export const ENDTIME = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).format('yyyy-MM-dd');

export const TENSOREN_BULE = '#015080';
export const TENSOREN_GREY = '#b2b2b2';

