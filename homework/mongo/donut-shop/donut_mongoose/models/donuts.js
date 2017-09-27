//requirements: require mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
//create your donut schema:
const Schema = moongoose.Schema;

      const donutSchema = new Schema({
        name: String,
      description: String,
      img: String,
      price: Number,
      qty: Number
  })

    

//export your donut with module.exports()
module.exports = router