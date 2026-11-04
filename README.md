# NASA Mission Control API

A full-stack mission control app for scheduling space launches to potentially habitable exoplanets. The Node.js and Express API loads real Kepler planet data from NASA, syncs historical launches from the public SpaceX API, and stores everything in MongoDB.

Course project from Zero To Mastery's Node.js course. The React client came with the course; I built the API, the tests, the Docker setup and the CI pipeline along with the lessons.

## What it does

- **Planets:** parses NASA's Kepler dataset (CSV) on startup and keeps only planets with Earth-like conditions.
- **Launches:** lists, schedules and aborts launches through a versioned REST API (`/v1/planets`, `/v1/launches`) with pagination.
- **SpaceX sync:** on first start, downloads the full SpaceX launch history and saves it to MongoDB, so the API serves real historical missions alongside new ones.
- **Validation:** rejects launches with missing fields, invalid dates or unknown target planets.

## Stack

Node.js · Express · MongoDB (Mongoose) · Jest · Supertest · Docker · GitHub Actions · PM2 · React (course-provided client)

## Project structure

```
server/
  src/
    app.js          Express app: middleware, static client, /v1 router
    server.js       HTTP server, loads data, then starts listening
    routes/         planets and launches routers, controllers and tests
    models/         data access for planets and launches (Mongoose)
    services/       MongoDB connection and pagination helpers
  data/             NASA Kepler dataset (CSV)
client/             React front end (from the course)
Dockerfile          builds the client and runs the API in one container
```

## Running locally

Requires Node.js and a MongoDB connection string.

```bash
npm install
echo "MONGO_URL=<your MongoDB connection string>" > server/.env
npm run watch        # API on http://localhost:8000 and client on http://localhost:3000
npm test             # Jest + Supertest API tests
```

With Docker:

```bash
docker build -t nasa-project .
docker run -p 8000:8000 -e MONGO_URL=<your MongoDB connection string> nasa-project
```

## What I learned

- Structuring an Express API in layers (routes, controllers, models, services) so each part can be tested on its own.
- Writing API tests with Jest and Supertest against a real database.
- Loading and transforming external data (CSV and a third-party API) safely on startup.
- Packaging a client and server into one Docker image and running tests in CI with GitHub Actions.
