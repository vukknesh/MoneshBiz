const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const Users = [
  {
    id: 1,
    name: "leonardo",
    email: "leomcn@hotmail.com"
  },
  {
    id: 2,
    name: "Damares",
    email: "Damares@hotmail.com"
  },
  {
    id: 3,
    name: "Goran",
    email: "Goran@hotmail.com"
  },
  {
    id: 4,
    name: "Nina",
    email: "Nina@hotmail.com"
  },
  {
    id: 5,
    name: "Marina",
    email: "Marina@hotmail.com"
  }
];

const app = express();
app.use(cors());

//Body-parser

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/users", (req, res) => {
  res.send(Users);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}.`);
});
