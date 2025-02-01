const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    email: "omorakabenjamin3@gmail.com",
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/tegzy-cmd/HNG_TASK",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
