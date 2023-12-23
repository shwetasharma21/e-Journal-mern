const bcrypt = require("bcrypt");

const router = require("express").Router();
const User = require("../models/user");
const { createToken } = require("../utils/token");

const SALTROUNDS = Number(process.env.SALT_ROUNDS);

// Sign in
router.post("/register", async (req, res) => {
	try {
		const { email, name, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
		const user = new User({ email, name, password: hashedPassword });
		await user.save();
		const payload = { name: user.name, email: user.email };
		const token = createToken(payload);
		if (!token)
			return res
				.status(500)
				.json({ success: false, message: "Error while generating token" });
		res
			.status(200)
			.json({ success: true, message: "Registration Successful", token });
	} catch (err) {
		res.status(400).json({ success: false, message: err.message });
	}
});

// Log in
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			res.status(400).json({ success: false, message: "Please sign up first" });
		}
		const isPasswordCorrect = await bcrypt.compare(
			req.body.password,
			user.password
		);
		if (!isPasswordCorrect) {
			res
				.status(400)
				.json({ success: false, message: "Password is not correct" });
		}
		const { password, ...others } = user._doc;
		const payload = {
			name: user.username,
			email: user.email,
		};
		const token = createToken(payload);
		if (!token) {
			return res.status(500).json({
				success: false,
				message: "Error while generating token",
			});
		}
		others.token = token;
		res.status(200).json({ success: true, ...others });
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ success: false, message: err.message });
	}
});

module.exports = router;
