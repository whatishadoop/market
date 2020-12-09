import request from '@/utils/request'

// 1.获取所有数据包信息接口
export function getAllDataPackages(params) {
  return request({
    url: 'market/dataset/getAllDataPackages',
    method: 'get',
    params
  })
}

// 2.根据类型及分页参数获取数据包列表
export function getDataPackagesByType(params) {
  return request({
    url: 'market/dataset/getDataPackagesByType',
    method: 'get',
    params
  })
}

// 3.根据名称获取数据包列表
export function getDataPackagesByName(params) {
  return request({
    url: 'market/dataset/getDataPackagesByName',
    method: 'get',
    params
  })
}

// 4.根据条件获取数据包列表
export function getDataPackagesByCondition(params) {
  return request({
    url: 'market/dataset/getDataPackagesByCondition',
    method: 'get',
    params
  })
}

// 5.获取数据包总条数
export function getAllDataPackagesCount() {
  return request({
    url: 'market/dataset/getAllDataPackagesCount',
    method: 'get'
  })
}

// 6.根据类型获取数据包数量
export function getDataPackagesCountByType(params) {
  return request({
    url: 'market/dataset/getDataPackagesCountByType',
    method: 'get',
    params
  })
}

// 7.根据名称获取数据包数量
export function getDataPackagesCountByName(params) {
  return request({
    url: 'market/dataset/getDataPackagesCountByName',
    method: 'get',
    params
  })
}

// 8.根据条件获取数据包条数
export function getDataPackagesCountByCondition(params) {
  return request({
    url: 'market/dataset/getDataPackagesCountByCondition',
    method: 'get',
    params
  })
}

// 9.获取所有类型数据总条数
export function getAllTypes() {
  return request({
    url: 'market/dataset/getAllTypes',
    method: 'get'
  })
}

// 10.根据父包ID获取其所有的子数据包信息
export function getDataPackageDetailByParentId(params) {
  return request({
    url: 'market/dataset/getDataPackageDetailByParentId',
    method: 'get',
    params
  })
}

// 11.根据数据包父ID获取数据包的所有信息，包括子数据包信息
export function getDataPackageInfoById(params) {
  return request({
    url: 'market/dataset/getDataPackageInfoById',
    method: 'get',
    params
  })
}

// 12.客户需求反馈接口
export function insertCustomerRequire(data) {
  return request({
    url: 'market/require/insertCustomerRequire',
    method: 'post',
    data
  })
}

export default { getAllDataPackages, getDataPackagesByType, getDataPackagesByName, getDataPackagesByCondition, getAllDataPackagesCount, getDataPackagesCountByType, getDataPackagesCountByName, getDataPackagesCountByCondition, getAllTypes, getDataPackageDetailByParentId, getDataPackageInfoById, insertCustomerRequire }
