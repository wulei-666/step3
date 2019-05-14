const User = require('./Users');

User.find({}, {_id: 0, __v: 0}, (err, data) => {
  if (err) throw err;
  console.log(data)
})