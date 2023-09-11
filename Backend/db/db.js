const mongoose = require("mongoose");
require("dotenv").config();
const connect = () => {
    return mongoose.connect(`mongodb+srv://zsev666:zay2001@cluster0.mrtn9d5.mongodb.net/?retryWrites=true&w=majority`)
}

module.exports = connect;