import $HTTP from "@/utils/HTTP.js"
import Service from "@/utils/service.js" // 个人习惯把请求地址模块化统一管理

export function getMockData_home() {
  return $HTTP.get(Service.mock_home) // 等同于$HTTP.get('/home_url')
}
