const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    fname: { 
        type: String,
        required: true
    },
    lname: { 
        type: String,
        required: true
    },
    contact: { 
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Accounts', UsersSchema);