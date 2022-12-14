const express = require("express");
const dateFormat = require("date-format");
const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello from the server" });
});

app.get("/api/v1/:randomText", (req, res) => {
  console.log(req.params.randomText);
  res.status(200).json({ param: req.params.randomText });
});

app.get("/api/v1/instagram", (req, res) => {
  const instagramUserData = {
    username: "kush",
    followers: 300,
    follows: 200,
    date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instagramUserData);
});

app.get("/api/v1/linkedin", (req, res) => {
  const linkedinUserData = {
    username: "kush linkedin",
    followers: 300,
    follows: 200,
    date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinUserData);
});

app.listen(PORT, () => {
  console.log(`http://localhost:3000`);
});
