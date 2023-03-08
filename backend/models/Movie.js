const mongoose = require("mongoose")
const {Schema} = mongoose

const MovieSchema = new Schema({
  title: {type: String, required: true},
  director: {type:Schema.Types.ObjectId, ref: "Director", required: true},
  summary: {type: String, required: true},
  release_date: {type: Date, required: true},
  genre: [{type: Schema.Types.ObjectId, ref: "Genre"}],
  rating: {type: String},
  img_url: {type: String, required: true}
})

MovieSchema.virtual("url")
  .get(function() { return `/movie/${this._id}`})

MovieSchema.virtual("release_year")
  .get(function() {
    return this.release_date.getFullYear()
  })
module.exports = mongoose.model("Movie", MovieSchema)