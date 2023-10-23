const fs = require('fs');
const path = require('path');

const { v4: uuidv4 } = require('uuid');

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

app.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('db/db.json'));
    const inputNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    db.push(inputNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

module.exports = app;
