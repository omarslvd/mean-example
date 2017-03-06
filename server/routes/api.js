const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const db = require('../database/db');

router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/post', (req, res) => {
    const note = { text: req.body.body, title: req.body.title };

    db.get().collection('notes').insert(note, (err, result) => {
        if (err) {
            res.send({ 'error': 'An error has ocurred' });
        } else {
            res.send(result.ops[0]);
        }
    });
});

module.exports = router;