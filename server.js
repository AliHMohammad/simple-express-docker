import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello docker!");
});

app.listen(port, () => {
    console.log("App is running on port " + port);
});
