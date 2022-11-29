
const express = require("express");
const mongoose = require("mongoose");
const Transaction = require("./models/transaction");
const bodyParser = require("body-parser");
const cors =require("cors");
const app = express();

app.use(bodyParser.json());
app.use(express.json());
app.use(cors())
app.get("/", (req, res) => {
  res.send("hello!!!!!!!!");
});

app.get("/transactions", async (req, res) => {
  try {
    await Transaction.find({}).then((result) => {
      res.send(result);
    });
  } catch (err) {
    console.log(err);
  }
});

app.post("/add", async (req, res) => {
  try {
    let new_transaction = new Transaction({
      transaction_name: req.body.transaction_name,
      amount: req.body.amount,
      type: req.body.type,
    });

    await new_transaction.save();
    res.send("succes");
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:transaction_name", async (req, res) => {
  try {
    await Transaction.findOneAndDelete({ transaction_name: req.params.transaction_name });
    res.send("deleted");
  } catch (err) {
    res.send(err);
  }
});

app.put("/update/:transaction_name", async (req, res) => {
  try {
    await Transaction.findOneAndUpdate(
      { transaction_name: req.params.transaction_name },req. body
     
    );
    res.send("updated");
  } catch (err) {
    res.send(err);
  }
});

mongoose.connect(
    "mongodb+srv://walid:eEw8eoLHEEPC7n8G@cluster0.5urpm2u.mongodb.net/transactions",
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("connected !!!!!!!!!!!!");
  })
  .catch(() => {
    console.log("not connected error");
  });

app.listen(5000, () => console.log("serveur connected"));
