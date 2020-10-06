const mongoose = require('mongoose');
const db = process.env.DB;

mongoose.set('useFindAndModify', false);
module.exports = mongoose.connect(db,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    });