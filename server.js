const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const config = require('./config/db');
const api = require('./server/routes/api');
const db = require('./server/database/db');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

db.connect(config.url, (err) => {
    if (err) {
        console.log('Unable to connect to MongoDB');
        process.exit(1);
    } else {
        const server = http.createServer(app);

        server.listen(port, () => {
            console.log(`API running on localhost:${port}`);
        });
    }
});