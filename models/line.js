const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const lineSchema = new mongoose.Schema({
    line: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
},
    { timestamps: true }
);

module.exports = mongoose.model('Line', lineSchema);