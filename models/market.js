const mongoose = require("mongoose")
const marketSchema = mongoose.Schema({
itemType: String,
Quantity: {
    type: Number,
    required: true
},
price: {
    type: String,
     min: 2,
     max: 5000
}
})
module.exports = mongoose.model("market",marketSchema)