const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const htmlRoute = require('./routes/html');
const apiRoute = require('./routes/api');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
});




