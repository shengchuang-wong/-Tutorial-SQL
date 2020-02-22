const mysql = require('mysql');
const faker = require('faker');

const connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12262173',
    password: 'FXTzgrJUdU',
    database: 'sql12262173',
    port: 3306
});

const persons = [

];

for(let i = 0; i < 500; i++) {
    persons.push([
        faker.internet.email(),
        faker.date.past()
    ]);
}

connection.query('INSERT INTO users (email, created_at) VALUES ?', [persons], function(error, results, fields) {
    if(error) throw error;
    console.log(results);
});

connection.end();