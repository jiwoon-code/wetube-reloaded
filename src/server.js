import express from "express";

const PORT = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.send("ulala");
};

const handleLogin = (req, res) => {
  return res.send("login here");
};

app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () =>
  console.log(`server listening on port 4000 http://localhost:${PORT}`);

app.listen(PORT, handleListening);
