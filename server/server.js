const express = require("express");
const cors = require("cors");

require("dotenv").config();

const auth = require("./routes/auth");
const connect = require("./db");

connect();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", auth);
const PORT = process.env.PORT || 2100;

app.listen(PORT, () => console.log(`App is listening at port ${PORT}`));
