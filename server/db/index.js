const mongoose = require('mongoose');

mongoose
    .connect('mongodb+srv://<username>:<password>@<your-cluster-url>//test', { useNewUrlParser: true, useUnifiedTopology: true, })
    .catch(e => {
        console.error('Connection error', e.message);
    });

const db = mongoose.connection;

module.exports = db;