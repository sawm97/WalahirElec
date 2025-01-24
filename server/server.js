const express = require("express");
const app = express();
const PORT = 8080;

app.use("/", (req, res) => {
    res.json ({ message: "Hello World from WalahirElec!"});
});

app.listen(PORT , () => {
    console.log(`Server started on port ${PORT}`);
});