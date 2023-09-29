const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

function connect() {
    mongoose
    .connect(process.env.DATABASE_URL) 
    .then(() => console.log('connected!!')) 
    .catch(() => err => console.log("connected error!"))
}

module.exports = { connect };
