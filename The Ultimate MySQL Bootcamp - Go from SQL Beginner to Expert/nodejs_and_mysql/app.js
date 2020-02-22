const epxress = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const faker = require('faker');
const path = require('path');
const app = epxress();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(epxress.static(__dirname + '/public'));

const connection = mysql.createConnection({
    host: 'sql12.freemysqlhosting.net',
    user: 'sql12262173',
    password: 'FXTzgrJUdU',
    database: 'sql12262173',
    port: 3306
});

app.get('/', (req, res) => {
    const q = 'SELECT COUNT(*) as count FROM users;';
    connection.query(q, (err, results) => {
        if(err) throw err;
        const count = results[0].count;
        // res.send(`We have ${count} users in our database`);
        res.render('home', { count });
    });
});

app.post('/register', (req, res) => {
    const person = {
        email: req.body.email
    }

    connection.query('INSERT INTO users SET ?', person, (err, result) => {
        if(err) throw err;
        // console.log(result);
        res.redirect('/');
    });
});

app.listen(8080, () => {
    console.log('running on port 8080');
});