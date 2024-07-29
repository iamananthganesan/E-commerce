const mongoose = require('mongoose');

const connectDatabse = () => {
    mongoose.connect(process.env.DB_URL)
        .then((con) => {
            console.log("mongodb has been connected successfully to the host:", con.connection.host);
        })
        .catch((error) => {
            console.log(error);
        })
}

module.exports = connectDatabse;