// VS Code w/ Quokka.js
const https = require('https');
const key = ``
const endpoint = `https://maps.googleapis.com/maps/api/geocode/json?key=${key}-0&address=15 hernandez ave palm coast fl&sensor=false`

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
https.get(endpoint, (resp) => {
    
    let data = '';

    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
        
        const result = JSON.parse(data)
        const lat = result.results[0].geometry.location.lat
        const lng = result.results[0].geometry.location.lng
        
        console.log(`${lat} is the LATTTT`);
        console.log(`${lng} is the LLOOOONNGGG`);

    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});