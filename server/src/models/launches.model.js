const launches = new Map();

let lastedFlightNumber = 100;

const launch = {
    flightNumber: 100,
    mission: "Keep Exploration X",
    rocket: "Explorer IS1",
    launchDate: new Date("december 27, 2023"),
    target: "Kepler-442 b",
    customer: ["ZTM", "NASA"],
    upcoming: true,
    success: true,
}
launches.set(launch.flightNumber, launch);

function existsLaunchWithId(launchId){
    return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(launch) {
    lastedFlightNumber ++;
    launches.set(
        lastedFlightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ["ZERO TO MASTERY", "NASA"],
            flightNumber: lastedFlightNumber,
        })
    );
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}

module.exports = {
    existsLaunchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
}