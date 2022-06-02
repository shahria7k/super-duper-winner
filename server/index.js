var express = require("express");
var cors = require("cors");
const { MongoClient } = require("mongodb");
var app = express();

app.use(cors());
app.use(express.json());

/**
 *
 * * DB
 */

const mongoURI = "mongodb://docker:mongopw@localhost:49153";

const client = new MongoClient(mongoURI);
async function run() {
	try {
		await client.connect();
	} finally {
		// Ensures that the client will close when you finish/error
		// await client.close();
	}
}
run().catch(console.dir);

app.get("/", function (req, res, next) {
	res.json({ msg: "Backend is working" });
});
app.post("/signin", async function (req, res, next) {
	const db = client.db("demoapp");
	const collection = db.collection("users");
	const doc = req.body;
	const result = await collection.insertOne(doc);
	console.log(result);
	res.json(result);
});

app.listen(5000, function () {
	console.log("CORS-enabled web server listening on port 5000");
});
