const express = require("express")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.set("view engine", "pug")

const mainroutes = require("./routes")
const sumroutes = require("./routes/sum")

app.use(mainroutes)
app.use("/getData", sumroutes)
app.use(express.static("public"))

app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
})