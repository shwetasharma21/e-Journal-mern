const mongoose = require("mongoose");

const url = process.env.MONGODB_URI;

const connect = async () => {
	try {
		await mongoose.connect(url);
		mongoose.connection.on("connected", () => {
			console.log("Connnected to database successfully");
		});
	} catch (err) {
		console.error(err.message);
	}
};
module.exports = connect;
