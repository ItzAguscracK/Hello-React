const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    text: {
        type: mongoose.SchemaTypes.String,
        required: true,
    },
    cratedAt: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },
    updatedAt: {
        type: mongoose.SchemaTypes.Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Note', NoteSchema);