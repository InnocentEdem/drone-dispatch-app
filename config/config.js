const path = require('path');

module.exports = {
    development: {
        username: 'root',
        password: 'root',
        storage: path.join(__dirname, '..', 'drone_dispatch.sqlite3'),
        host: 'localhost',
        dialect: 'sqlite',
        logging: console.log,
        operatorsAliases: false
    }
};