const express = require('express')
const bodyParser = require("body-parser");
const querystring = require('querystring');

const app = express()



app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

const currentYear = new Date().getFullYear();

app.get("/", (req, res) => {
  res.render('index', {
    currentYear: currentYear
  })
})

app.get("/calculator", (req, res) => {

  res.render("calculator");

})

app.post("/calculator", (req, res) => {
  const hours = parseFloat(req.body.hours);
  const elecCost = parseFloat(req.body.elecCost);
  const ticks = Number(req.body.ticks);
  const type = req.body.type;
  let cop;

  if (type === "Inverter") {
    switch (ticks) {
      case 2:
        cop = 3.34
        break;
      case 3:
        cop = 3.78
        break;
      case 4:
        cop = 4.29
        break;
      case 5:
        cop = 4.86
        break;
      default:
        cop = 2.90;
    }
  } else {
    switch (ticks) {
      case 1:
        cop = 2.90
        break;
      case 2:
        cop = 3.78
        break;
      case 3:
        cop = 4.29
        break;
      case 4:
        cop = 4.86
        break;
      case 5:
        cop = 5.50
        break;
      default:
        cop = 2.90;
    }
  }
  const inputElec = 3.516 / cop

  console.log(type + " : " + cop)
  monthlyElec = (hours * inputElec * 30).toFixed(2);
  yearlyElec = (monthlyElec * 12).toFixed(2);
  resultMonth = (hours * elecCost * inputElec * 30 / 100).toFixed(2);
  resultYear = (resultMonth * 12).toFixed(2);
  res.render("results", {
    elecCost: elecCost,
    resultMonth: resultMonth,
    resultYear: resultYear,
    cop: cop,
    monthlyElec: monthlyElec,
    yearlyElec: yearlyElec,
    ticks: ticks,
    type: type
  })
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
