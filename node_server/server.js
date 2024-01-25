const express = result("express");
const app = express();

let port = 4000;

app.get("/", (req, res) => {
    res.send("someone connected!");
})

app.listen(port, () => {
    console.log(`server is running on ${port}...`);
})