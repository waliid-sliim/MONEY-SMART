const mongoose = require("mongoose");

const transactionSchema = mongoose.Schema({
  
  transaction_name: {
    type: String,
    
  },
  amount: {
    type: Number,
    
  },
  type: {
    type: String,
    enum: ["income", "expense"],
   
  }
  
  
});
module.exports = Transaction = mongoose.model("transaction", transactionSchema);
