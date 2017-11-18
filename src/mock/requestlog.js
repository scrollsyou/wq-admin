const { config } = require('./common')
const Mock = require('mockjs')

const { apiPrefix } = config

let requestlogs = [
  {
    id: '1',
    name: '首页访问',
    content: '记录访问ip等',
  },
  {
    id: '1',
    name: '首页访问',
    content: '记录访问ip等',
  },
  {
    id: '1',
    name: '首页访问',
    content: '记录访问ip等',
  },
]
let nowlogdata = Mock.mock({
  'data|1-20': [
    {
      id: '@id',
      name: '@name',
    },
  ],
})

module.exports = {
  [`GET ${apiPrefix}/requestlog`] (req, res) {
    res.status(200).json(requestlogs)
  },
  [`GET ${apiPrefix}/nowlog`] (req, res) {
    res.status(400).json(nowlogdata)
  },
}
