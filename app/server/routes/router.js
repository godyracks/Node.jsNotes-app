const express = require('express');

const route = express.Router();





route.get('/', (req, res) => {
    
    res.render('index');
});
route.get('/add-note', (req, res) => {

res.render('add_note');
});

route.get('/edit-note', (req, res) => {
res.render('edit_note');
});

route.get('/saved-note', (req, res) => {
res.render('saved_note');
});


module.exports = route