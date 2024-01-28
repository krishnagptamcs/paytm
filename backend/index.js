const express = require("express");
const cors = require("cors");

app.use(cors());

app.use(express.json());

const mainRoute = require("./routes/index");

const app = express();

app.use("api/v1", mainRoute);
app.listen(3000, () => console.log("server is running okay"));
