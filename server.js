const express = require('express');
const PORT = process.env.PORT || 3000;
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const app = express();


//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
});

app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

app.post('/api/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync('./db/db.json'));
    const inputNote = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4(),
    };
    db.push(inputNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(db));
    res.json(db);
});

app.delete('/api/notes/:id', (req, res) =>  {
    let db = JSON.parse(fs.readFileSync('./db/db.json'));
    const noteID = req.params.id;
    const noteIndex = db.findIndex(note => note.id === noteID);

    if (noteIndex !== -1)   {
        db.splice(noteIndex, 1);
        fs.writeFileSync('./db/db.json', JSON.stringify(db));
        res.json({ message: 'This note is gone forever!' });
    } else {
        res.status(404).json({ error: 'Note not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
});




