const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.TOKEN_SECRET_KEY;
const EXPIRESIN = process.env.EXPIRESIN;
const createToken = (payload) => {
	if (!payload) return;
	try {
		const token = jwt.sign(payload, SECRET_KEY, {
			expiresIn: "1h",
		});
		return token;
	} catch (err) {
		console.error("Unable to generate token", err.message);
	}
};

const verifyToken = (token) => {
	if (!token) return;
	try {
		const payload = jwt.verify(token, SECRET_KEY);
		return payload;
	} catch (err) {
		console.error("Token verification error", err.message);
	}
};
module.exports.createToken = createToken;
module.exports.verifyToken = verifyToken;
