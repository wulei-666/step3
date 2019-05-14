
module.exports = {
  insertData (user) {
    user.save((err) => {
      if (err) throw err;
      console.log('用户插入成功')
    })
  },
  findData (User, whereObj, showObj) {
    User.find(whereObj, showObj, (err, data) => {
      if (err) throw err;
      console.log(data)
    })
  },
  updateData () {

  },
  deleteData () {

  }
}