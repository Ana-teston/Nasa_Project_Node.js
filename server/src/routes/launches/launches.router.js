const express = require('express');
const { httpGetAllLaunches, httpPostAddNewLaunch, httpAbortLaunch} = require("./launches.controler");

const launchesRouter = express.Router();

launchesRouter.get('/', httpGetAllLaunches);
launchesRouter.post('/', httpPostAddNewLaunch);
launchesRouter.delete('/:id', httpAbortLaunch);

module.exports = launchesRouter;