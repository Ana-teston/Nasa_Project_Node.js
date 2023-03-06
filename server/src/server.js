const http = require('http');

const mongoose = require('mongoose');

const app = require('./app');
const { loadPlanetsData } = require('./models/planets.model');

const MONGO_URL = 'your mongo url';

const server = http.createServer(app);
const PORT = process.env.PORT || 8000;
mongoose.connection.once('open', () => {
    console.log('MongoDb connection ready!');
});

mongoose.connection.on('error', (err) => {
    console.error(err);
});

async function startServer () {
    await mongoose.connect(MONGO_URL);
    await loadPlanetsData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
}
startServer()
