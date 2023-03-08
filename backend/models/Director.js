const mongoose = require("mongoose")
const {Schema} = mongoose

const DirectorSchema = new Schema({
  first_name: {type: String, required: true, maxLength: 100},
  last_name: {type: String, required: true, maxLength: 100},
  date_of_birth: {type: Date},
  date_of_death: {type: Date}
})

DirectorSchema.virtual("fullname")
  .get(function() { 
    let fullname = ""
    if(this.first_name && this.last_name){
      fullname = this.first_name + " " + this.last_name
    }
    if(!this.first_name || !this.last_name){
      fullname = ""
    }
    return fullname
  })

DirectorSchema.virtual("url")
  .get(function() { return `/director/${this._id}`})

module.exports = mongoose.model("Director", DirectorSchema)