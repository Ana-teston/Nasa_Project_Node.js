const planets = require('../../moduls/planets.model');

function getAllPlanets(req, res) {
    return res.status(200).json(planets);
}

module.exports = {
    getAllPlanets,
};