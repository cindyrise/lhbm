const baseUrl ='/api/v1';
export default {
  getAd:`${baseUrl}/getAd`,
  getZone:`${baseUrl}/getZone`,
  createAd:`${baseUrl}/createAd`,
  getProgressList:`${baseUrl}/crawler/job/list-jobs`,
  getCrawlerSummary:`${baseUrl}/crawler/job/summary`,


  setCrawlerCycle:`${baseUrl}/crawler/task/config-cron`,
  setTaskStatus:`${baseUrl}/crawler/task/change-state`,
  createTask:`${baseUrl}/crawler/task/create-task`,
  getTaskList:`${baseUrl}/crawler/task/list`,
  getTaskPriority:`${baseUrl}/crawler/task/config-level`,

  getResourceList:`${baseUrl}/crawler/node/config-list`,
  setResourceConf:`${baseUrl}/crawler/node/config`,
  getUserData:'/userData.json'
}
