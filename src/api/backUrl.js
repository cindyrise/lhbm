const baseUrl ='/api/back/v1';
export default {
  //广告模块
  getAd:`${baseUrl}/getAd`,
  createAd:`${baseUrl}/createAd`,

  //网址模块
  getSite:`${baseUrl}/getSite`,
  createSite:`${baseUrl}/createSite`,
  //icon模块
  getIconList:`${baseUrl}/getIconList`,
  getIcons:`${baseUrl}/getIcons`,
  getSiteOption:`${baseUrl}/getSiteOption`,
  createIcon:`${baseUrl}/createIcon`,

  //公用模块
  getCurIp:`http://pv.sohu.com/cityjson?ie=utf-81`,
  getZone:`${baseUrl}/getZone`,
  getDict:`${baseUrl}/getDict`,
  getDictType:`${baseUrl}/getDictType`,
  getLocation:`${baseUrl}/getLocation`,

  //用户模块

}
