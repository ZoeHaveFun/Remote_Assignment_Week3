const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
  res.render("index")
})

router.get("/myName", (req, res) => {
  const name = req.cookies.userName
  if (name) {
    res.render("myName", {
      name: name
    })
  } else {
    res.redirect("trackName")
  }
})

router.post("/bye", (req, res) => {
  res.clearCookie("userName")
  res.redirect("/trackName")
})

router.get("/trackName", (req, res) => {
  const queryname = req.query.name
  
  if (queryname) {
    res.cookie("userName", queryname)
    res.redirect("myName")
  } else {
    const cookiename = req.cookies.userName
    if (cookiename) {
      res.redirect("myName")
    } else {
      res.render("trackName")
    }
  }

})

router.post("/trackName", (req, res) => {
  res.cookie("userName", req.body.userName)
  res.redirect("/myName")
})


module.exports = router