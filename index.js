const express = require("express");
const dateFormat = require("date-format");

// Always keep your process.env.PORT at first otherwise it will give deployment issue.
// This process.env.PORT will take url from our .env file
const PORT = process.env.PORT || 4000;
const app = express();

// Swagger docs related
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// First it will check this route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Hello from the server" });
});

// CHeck for instagram route and return this data to user
app.get("/api/v1/instagram", (req, res) => {
  const instagramUserData = {
    username: "kush",
    followers: 300,
    follows: 200,
    date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(instagramUserData);
});

// CHeck for linkedin route and return this data to user
app.get("/api/v1/linkedin", (req, res) => {
  const linkedinUserData = {
    username: "kush linkedin",
    followers: 300,
    follows: 200,
    date: dateFormat.asString("dd[MM] - hh:mm:ss", new Date()),
  };

  res.status(200).json(linkedinUserData);
});

// Place this param route at the last otherwise the routes mentioned below will give error
app.get("/api/v1/:randomText", (req, res) => {
  console.log(req.params.randomText);
  res.status(200).json({ param: req.params.randomText });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
