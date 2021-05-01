const http = require("http");

const options = {
    hostname: "www.google.com",
    port: 80,
    path: "/",
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
};

const request = http.request(options, function (response) {
    console.log(response.statusCode);
    console.log(response.statusMessage);
    console.log(response.headers);
});

request.on("error", function (e) {
    console.log("Error: " + e.message);
});

request.end();