const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', apiRoutes);
app.use('/api', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Now listening on PORT ${PORT}`);
});




