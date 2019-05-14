const User = require('./model/users');
const user = new User({
  username: '刘杨',
  password: '123',
  age: 22,
  tel: '13248099856',
  sex: '男',
  lesson: '3',
  city: '山西'
})
module.exports = {
  insertData () {
    user.save((err) => {
      if (err) throw err;
      console.log('用户插入成功')
    })
  },
  findData () {
    User.find({}, {_id: 0, __v: 0}, (err, data) => {
      if (err) throw err;
      console.log(data)
    })
  },
  updateData () {

  },
  deleteData () {

  }
}