const Facility = require('../models/Facility')

async function createFacility(FacilityData) {
    const facility = {
        name: FacilityData.Labal,
        facilityUrl: FacilityData.FacilityURL
    };

    const missing = Object.entries(facility).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }
    console.log(facility)
    const result = await Facility.create(facility)
    return result
}

module.exports = {
    createFacility
};