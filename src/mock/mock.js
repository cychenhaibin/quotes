// 引入mockjs
const Mock = require('mockjs')
// 获取 mock.Random 对象
const Random = Mock.Random
// mock生成模拟数据
const produceNewQuotes = function () {
  let quotes = []
    for (let i = 0; i < 100; i++) {
    let newQuoteObject = {
      content: Random.csentence(5, 30), //  Random.csentence( min, max )
      author: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      color: Random.color(),//随机生成一个16进制颜色
    }
    quotes.push(newQuoteObject)
  }

  return {
    quotes: quotes
  }
}

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/quotes/index', 'post', produceNewQuotes)
