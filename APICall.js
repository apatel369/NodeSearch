const searchConfig = require('./searchConfig.js')
const SUNRISE_BANK = searchConfig.SUNRISE_BANK;
const HAPPY_CREDIT_UNION = searchConfig.HAPPY_CREDIT_UNION;
const PARIS_FCU = searchConfig.PARIS_FCU;

const request = require('request');
 
let URL = null;

const callNearbySearchAPI = (callback, lat, long, customerName) => {
    setURL(lat, long, customerName);
    request(URL, { json: true }, (err, res, body) => {
    if (err) { 
        return callback(err);
     }
    return callback(body);
    });
}

function setURL(lat, long, customerName){
    if(customerName == 'Sunrise Bank'){
        URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/${SUNRISE_BANK.responseOutput}?location=${lat},${long}&radius=150&type=${SUNRISE_BANK.type}&name=${SUNRISE_BANK.name}&language=${SUNRISE_BANK.language}&key=${SUNRISE_BANK.APIKey}`;
    }
    else if(customerName == 'Happy Credit Union'){
        URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/${HAPPY_CREDIT_UNION.responseOutput}?location=${lat},${long}&radius=150&type=${HAPPY_CREDIT_UNION.type}&name=${HAPPY_CREDIT_UNION.name}&language=${HAPPY_CREDIT_UNION.language}&key=${HAPPY_CREDIT_UNION.APIKey}`;
    }
    else if(customerName == 'Paris FCU'){
        URL = `https://maps.googleapis.com/maps/api/place/nearbysearch/${PARIS_FCU.responseOutput}?location=${lat},${long}&radius=150&type=${PARIS_FCU.type}&name=${PARIS_FCU.name}&language=${PARIS_FCU.language}&key=${PARIS_FCU.APIKey}`;
    }
    else{
        URL= null;
    }
}

module.exports.callApi = callNearbySearchAPI;