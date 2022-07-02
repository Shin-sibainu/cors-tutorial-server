const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;

app.use(
  cors({
    origin: "http://127.0.0.1:5500", //"*"
    // methods: ["GET", "POST"],
    credentials: true,
  })
);

app.get("/data", (req, res) => {
  return res.json({ name: "shincode", age: 24 });
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => console.log("server is running"));
