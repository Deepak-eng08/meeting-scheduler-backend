const express = require("express");
const sequelize = require("./config/database");
const meetingRoutes = require("./routes/meeting.routes");

const app = express();

app.use(express.json());
app.use("/", meetingRoutes);

sequelize.sync().then(() => {
  console.log("Database Connected");

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
});