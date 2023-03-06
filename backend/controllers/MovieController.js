const Director = require("../models/Director")
const Genre = require("../models/Genre")
const Movie = require("../models/Movie")
const async = require("async")

exports.movie_list = (req, res, next) => {
  res.json({message: "movie list"})
}

exports.movie_detail = (req, res, next) =>{ 
  res.json({message: "movie detail", movie: req.params.id})
}

exports.movie_create_get = (req, res, next) => {
  res.json({message: "movie create GET", movie: req.params.id})
}
exports.movie_create_post = (req, res, next) => {
  res.json({message: "movie create POST", movie: req.params.id})
}

exports.movie_delete_get = (req, res, next) => {
  res.json({message: "movie delete GET", movie: req.params.id})
}
exports.movie_delete_post = (req, res, next) => {
  res.json({message: "movie delete POST", movie: req.params.id})
}

exports.movie_update_get = (req, res, next) => {
  res.json({message: "movie update GET", movie: req.params.id})
}
exports.movie_update_post = (req, res, next) => {
  res.json({message: "movie update POST", movie: req.params.id})
}

