const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;
const { v4: uuidv4 } = require('uuid');
const app = express();

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'Develop/db/db.json'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/Develop/public/notes.html'));
});







