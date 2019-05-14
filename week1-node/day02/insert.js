// 插入用户
const User = require('./Users');
const user = new User({
  username: '刘杨',
  password: '123',
  age: 22,
  tel: '13248099856',
  sex: '男',
  lesson: '3',
  city: '山西'
})
user.save((err) => {
  if (err) throw err;
  console.log('用户插入成功')
})

// 插入产品
const Product = require('./pp')
const prouct = new Product({
  title: '方便面'
})
prouct.save((err) => {
  if (err) throw err;
  console.log('产品插入成功')
})

// 插入轮播图
const My = require('./banner');
const ban = new My({
  img: 'https://www.baidu.com'
})
ban.save((err) => {
  if (err) throw err;
  console.log('轮播图插入成功')
})




