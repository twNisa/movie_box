const mongoose = require("mongoose")
const {Schema} = mongoose

const MovieSchema = new Schema({
  title: {type: String, required: true},
  director: {type:Schema.Types.ObjectId, ref: "Director", required: true},
  summary: {type: String, required: true},
  release_date: {type: Date, required: true},
  genre: [{type: Schema.Types.ObjectId, ref: "Genre"}],
  img_url: {type: String, required: true}
})

MovieSchema.virtual("url")
  .get(function() { return `/movie/${this._id}`})

module.exports = mongoose.model("Movie", MovieSchema)