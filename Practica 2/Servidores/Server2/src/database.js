const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo/mydatabase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Base de datos conectad:",db.connection.name))
    .catch(err => console.error(err));