var db = require('../db/index.js');

const createUser = (user, cb) => {

  var query = `INSERT INTO users SET
                username = '${user.username}',
                password = '${user.password}',
                salt = '${user.salt}',
                birthyear = '${user.birthyear}',
                email = '${user.email}',
                firstname = '${user.firstname}',
                lastname = '${user.lastname}'
                ;`
  db.connection.query(query, function(error, results, fields) {
    if(error) {cb(error, null);}
    if(results) {cb(null, results);}
  });
};

const checkUserExists = (user, cb) => {

  var query = `SELECT username FROM users WHERE
              username = '${user.username}'
              ;`
  db.connection.query(query, function(error, results, fields) {
    if(error) {cb(error, null);}
    if(results) {cb(null, results);}
  });

};

exports.createUser = createUser;
exports.checkUserExists = checkUserExists;