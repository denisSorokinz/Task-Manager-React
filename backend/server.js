import express from 'express';
import mysql from 'mysql';
import devConfig from './config/dev.json';
// import database fetch service

const fetchTable = (table) => {
    let connection = mysql.createConnection({
        host: devConfig.DB_host,
        user: devConfig.DB_user,
        database: devConfig.DB_name
    });


    let request = new Promise((resolve, reject) => {
        connection.connect((err) => {
            if(err) {
                console.log('[CONNECTION ERROR]', err);
                return reject(err);
            }
            connection.query(`SELECT * from ${table}`, (queryErr, response) => {
                if(queryErr) {
                    console.log('[QUERY ERROR]', queryErr);
                    return reject(queryErr);
                }
                connection.end();
                return resolve(response);
            });
        });
    });
    return request;
};

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.get('/', (req, res) => res.send({OK: "200"}));

app.get('/api/tasks', async (req, res) => {
    try {
        let tasks = await fetchTable('tasks');
        let stringified = JSON.stringify(tasks);
        res.send(stringified).end();
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
});

app.get('/api/habits', async (req, res) => {
    try {
        let tasks = await fetchTable('habits');
        let stringified = JSON.stringify(tasks);
        res.send(stringified).end();
    } catch (err) {
        console.error(err);
        res.status(404).end();
    }
});

app.listen(devConfig.server_port, () => console.log(`listening on port ${devConfig.server_port}`));