const http = require('http')
const apiCall = require('./APICall')
const url = require('url');

http.createServer((req, res) => {
        const query = url.parse(req.url, true).query;
        const lat = query.latitude;
        const long = query.longitude;
        const customerName = query.customerName;
        apiCall.callApi(function(response){
            res.write(JSON.stringify(response));
            res.end();
        }, lat, long, customerName);
}).listen(8080);