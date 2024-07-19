const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectToDB: (cb) => {
        MongoClient.connect('mongodb://localhost:27017/school', { useNewUrlParser: true, useUnifiedTopology: true })
            .then(client => {
                dbConnection = client.db();
                cb();
            })
            .catch(err => {
                console.error(err);
                cb(err);
            });
    },
    getDb: () => dbConnection
};
