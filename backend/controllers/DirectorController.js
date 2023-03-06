const Director = require("../models/Director")
const async = require("async")

exports.director_list = (req, res, next) => {
  res.json({message: "direct list"})
}

exports.director_detail = (req, res, next) =>{ 
  res.json({message: "direct detail", director: req.params.id})
}

exports.director_create_get = (req, res, next) => {
  res.json({message: "direct create GET", director: req.params.id})
}
exports.director_create_post = (req, res, next) => {
  res.json({message: "direct create POST", director: req.params.id})
}

exports.director_delete_get = (req, res, next) => {
  res.json({message: "direct delete GET", director: req.params.id})
}
exports.director_delete_post = (req, res, next) => {
  res.json({message: "direct delete POST", director: req.params.id})
}

exports.director_update_get = (req, res, next) => {
  res.json({message: "direct update GET", director: req.params.id})
}
exports.director_update_post = (req, res, next) => {
  res.json({message: "direct update POST", director: req.params.id})
}

