if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const express = require("express");
const app = express();
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/store", function (req, res) {
  fs.readFile('item.json', function (err,data) {
    if (err) {
      res.status(500).end();
    }else{
      res.render('store.ejs',{
        items: JSON.parse(data),
      })
    }
  })
});

app.listen(3000);
