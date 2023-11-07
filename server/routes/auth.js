const bcrypt = require("bcrypt");

const router = require("express").Router();
const User = require("../models/user");

const SALTROUNDS = Number(process.env.SALT_ROUNDS);

// Sign in
router.post("/register", async (req, res) => {
	try {
		const { email, name, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, SALTROUNDS);
		const user = new User({ email, name, password: hashedPassword });
		await user.save().then(() => {
			res.status(200).json({ message: "Sign up successful" });
		});
	} catch (err) {
		res.status(400).json(err.message);
	}
});

// Log in
router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user) {
			res.status(400).json({ message: "Please sign up first" });
		}
		const isPasswordCorrect = bcrypt.compare(req.body.password, user.password);
		if (!isPasswordCorrect) {
			res.status(400).json({ message: "Password is not correct" });
		}
		const { password, ...others } = user._doc;
		res.status(200).json(others);
	} catch (err) {
		console.log(err.message);
		res.status(400).json({ message: "Incorrect email or password" });
	}
});

module.exports = router;
