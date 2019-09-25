const express = require("express")
const app = express();
const path = require("path")

app.use(express.static(path.join(__dirname, "client/build")))

app.get("/", (req, res) => {
    res.send("Hello from server")
})

app.listen(process.env.PORT || 5007, () => {
    console.log("Server listening at port 5007")
})