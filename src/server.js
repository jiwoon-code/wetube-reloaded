import express from "express";

const app = express();
const handleListening = () => console.log("server listening on port 4000")

app.listen(4000, handleListening)