const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  const {
    number
  } = req.query
  const regex = /\d/;
  if (number === undefined) {
    res.render("getData", {
      message: "Lack of Parameter"
    })
  } else if (regex.test(number) === false) {
    res.render("getData", {
      message: "Wrong Parameter"
    })
  } else {
    let num = []
    let numcount = 0
    for (let i = 1; i <= number; i++) {
      num.push(i)
      numcount = numcount + i
    }
    let numString = num.join("+")
    res.render("getData", {
      numString: numString,
      numcount: numcount
    })
  }

})

module.exports = router