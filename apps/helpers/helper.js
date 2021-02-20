const bcrypt = require("bcrypt");
var config = require("config");

function hash_password(password){
    const saltRounds = config.get("salt");

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
}

function compare_password(password, hash){
    return bcrypt.compareSync(password, hash); // true
}

module.exports = {
    hash_password: hash_password,
    compare_password: compare_password
}