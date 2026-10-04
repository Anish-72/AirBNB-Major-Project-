const mongoose = require("mongoose");
const schema = mongoose.schema;

const listingSchema = new schema({
    title:{
        type:String,
        required:true,
    },
    description:String,
    image:String,
    price:Number,
    location:String,
    counrty:String
})

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;