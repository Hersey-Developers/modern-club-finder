const cors = require("cors");
const express = require("express")
const bodyParser = require("body-parser");

const activityRoutes = require("./src/activity-routes");
const dummyRoutes = require("./src/dummy-routes");
const userRoutes = require("./src/user-routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.options("*", cors());

app.use("/activities", activityRoutes);
app.use("/dummies", dummyRoutes);
app.use("/users", userRoutes);

app.use(() => {
    const error = new Error("Could not find this route.");
    error.status = 404;
    throw error;
})

module.exports = app;