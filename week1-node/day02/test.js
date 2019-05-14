const sql = require('./sql/index');
const User = require('./sql/model/users');
const user = new User({
  username: '刘杨',
  password: '123',
  age: 22,
  tel: '13248099856',
  sex: '男',
  lesson: '3',
  city: '山西'
})
// sql.insertData(user)

sql.findData(User, {}, {_id: 0, __v: 0})