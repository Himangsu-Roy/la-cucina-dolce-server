const express = require("express")
const app = express();
const cors = require("cors");
const port = 5000;


app.use(cors());

app.get("/", (req, res) => {
    res.send("Chef Recipe Hunter Server is Running");
})




app.listen(port, () => {
    console.log(`Chef recipe hunter server is running on port: ${port}`)
})