const Director = require("../models/Genre")
const async = require("async")

exports.genre_list = (req, res, next) => {
  res.json({message: "genre list"})
}

exports.genre_detail = (req, res, next) =>{ 
  res.json({message: "genre detail", genre: req.params.id})
}

exports.genre_create_get = (req, res, next) => {
  res.json({message: "genre create GET", genre: req.params.id})
}
exports.genre_create_post = (req, res, next) => {
  res.json({message: "genre create POST", genre: req.params.id})
}

exports.genre_delete_get = (req, res, next) => {
  res.json({message: "genre delete GET", genre: req.params.id})
}
exports.genre_delete_post = (req, res, next) => {
  res.json({message: "genre delete POST", genre: req.params.id})
}

exports.genre_update_get = (req, res, next) => {
  res.json({message: "genre update GET", genre: req.params.id})
}
exports.genre_update_post = (req, res, next) => {
  res.json({message: "genre update POST", genre: req.params.id})
}

