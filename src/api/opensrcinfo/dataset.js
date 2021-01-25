import request from '@/utils/request'

// 1.获取所有监控树方案接口
export function getAllDataMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/getAllDataMonitorCase',
    method: 'post',
    data
  })
}

// 2.删除监控方案接口
export function delMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/delMonitorCase',
    method: 'post',
    data
  })
}
// 3.查询舆情详情信息列表接口
export function getDataDetailByCondition(data) {
  return request({
    url: 'osintelligence/dataset/getDataDetailByCondition',
    method: 'post',
    data
  })
}

// 4.查询监控方案配置详情接口
export function getMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/getMonitorCase',
    method: 'post',
    data
  })
}

// 5.保存监控方案配置接口
export function saveMonitorCase(data) {
  return request({
    url: 'osintelligence/dataset/saveMonitorCase',
    method: 'post',
    data
  })
}

export default { getAllDataMonitorCase, delMonitorCase, getDataDetailByCondition, getMonitorCase, saveMonitorCase }