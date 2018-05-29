const baseUrl = '/api/v1';
export default {
  getAd:`${baseUrl}/crawler/task//all-configs`,
  getCrawlerTrend:`${baseUrl}/crawler/job/get-trend-table`,
  getCrawlerDetail:`${baseUrl}/crawler/job/list-job-details`,
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
