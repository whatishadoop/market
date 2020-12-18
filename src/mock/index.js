import Mock from 'mockjs'
import dataSetApi from './datamarket/datasetMock.js'

// 设置200-2000毫秒随机的延迟请求数据  ，模拟从后台获取数据延迟
Mock.setup({
  timeout: '1000-2000'
})

// 拦截的是 数据市场业务相关数据  内容表示正则表达式写法
// 1.获取所有数据包信息接口
Mock.mock(/\/market\/dataset\/getAllDataPackages/, 'get', dataSetApi.getAllDataPackages())
// 2.根据类型及分页参数获取数据包列表
Mock.mock(/\/market\/dataset\/getDataPackagesByType/, 'get', dataSetApi.getDataPackagesByType())
// 3.根据名称获取数据包列表
Mock.mock(/\/market\/dataset\/getDataPackagesByName/, 'get', dataSetApi.getDataPackagesByName())
// 4.根据条件获取数据包列表
Mock.mock(/\/market\/dataset\/getDataPackagesByCondition/, 'get', dataSetApi.getDataPackagesByCondition())
// 5.获取数据包总条数
Mock.mock(/\/market\/dataset\/getAllDataPackagesCount/, 'get', dataSetApi.getAllDataPackagesCount())
// 6.根据类型获取数据包数量
Mock.mock(/\/market\/dataset\/getDataPackagesCountByType/, 'get', dataSetApi.getDataPackagesCountByType())
// 7.根据名称获取数据包数量
Mock.mock(/\/market\/dataset\/getDataPackagesCountByName/, 'get', dataSetApi.getDataPackagesCountByName())
// 8.根据条件获取数据包条数
Mock.mock(/\/market\/dataset\/getDataPackagesCountByCondition/, 'get', dataSetApi.getDataPackagesCountByCondition())
// 9.获取所有类型数据总条数
Mock.mock(/\/market\/dataset\/getAllTypes/, 'get', dataSetApi.getAllTypes())
// 10.根据父包ID获取其所有的子数据包信息
Mock.mock(/\/market\/dataset\/getDataPackageDetailByParentId/, 'get', dataSetApi.getDataPackageDetailByParentId())
// 11.根据数据包父ID获取数据包的所有信息，包括子数据包信息
Mock.mock(/\/market\/dataset\/getDataPackageInfoById/, 'get', dataSetApi.getDataPackageInfoById())

// 拦截的是 能力集市业务相关数据  内容表示正则表达式写法
// 12.获取所有类型及每个类型包含的能力个数
Mock.mock(/\/market\/function\/getAllTypes/, 'get', dataSetApi.getAllFunctionTypes())
// 13.获取所有能力信息
Mock.mock(/\/market\/function\/getAllFunctionDetails/, 'get', dataSetApi.getAllFunctionDetails())
// 14.根据类型获取能力详情
Mock.mock(/\/market\/function\/getFunctionDetailByType/, 'get', dataSetApi.getFunctionDetailByType())
// 15.根据条件获取能力详情
Mock.mock(/\/market\/function\/getFunctionDetailByCondition/, 'get', dataSetApi.getFunctionDetailByCondition())
// 16.根据条件获取能力信息
Mock.mock(/\/market\/function\/getAllTypesByCondition/, 'get', dataSetApi.getAllTypesByCondition())
