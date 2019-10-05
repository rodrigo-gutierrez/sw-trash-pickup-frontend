const http = require("http");
const fs = require("fs");
const path = require("path");
const request = require("request");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
	fs.readFile(path.join(__dirname, "public", "index.html"), "utf-8", (error, data) => {
		if (!error) {
			res.send(data);
		}
		else {
			res.status(500).send("Internal Server Error: readFile failure: " + error);
		}
	});
});

app.listen(port, () => {
	console.log("Small World Trash Pickup Node.js Server now running and listening on port " + port);
});
