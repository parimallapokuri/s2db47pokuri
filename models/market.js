const mongoose = require("mongoose")
const marketSchema = mongoose.Schema({
itemType: String,
Quantity: Number,
price: String
})
module.exports = mongoose.model("market",
marketSchema)