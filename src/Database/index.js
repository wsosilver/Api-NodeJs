const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/noderest', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true })

mongoose.Promise = global.Promise;

module.exports = mongoose;