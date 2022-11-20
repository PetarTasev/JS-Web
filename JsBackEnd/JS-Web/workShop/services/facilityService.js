const Facility = require('../models/Facility')

async function createFacility(FacilityData) {
    const facility = {
        name: FacilityData.name,
        description: FacilityData.description,
        city: FacilityData.city,
        beds: Number(FacilityData.beds),
        price: Number(FacilityData.price),
        imgUrl: FacilityData.imgUrl
    };

    const missing = Object.entries(facility).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(m => `${m[0]} is required!`).join('\n'));
    }

    const result = await Facility.create(facility)
    console.log('hello')
    console.log(result)
    return result
}

module.exports = {
    createFacility
};