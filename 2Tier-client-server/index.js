let express = require("express");
let data = require("./data");
let cors = require("cors");
let app = express();

const { fruits, vegetables, animals } = data;
app.use(cors());

app.get("/data/fruits", (req, res) => {
  console.log(fruits);
  res.json(fruits);
});
app.get("/data/vegetables", (req, res) => {
  console.log(vegetables);
  res.json(vegetables);
});
app.get("/data/animals", (req, res) => {
  console.log(animals);
  res.json(animals);
});
app.listen(1130, () => {
  console.log("Server is running on port 1130");
});
