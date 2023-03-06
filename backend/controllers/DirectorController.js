const Director = require("../models/Director")
const async = require("async")
const Movie = require("../models/Movie")

exports.director_list = (req, res, next) => {
  Director.find().exec()
    .then(result => {
      if(result === null){
        res.json({message: "no directors"})
      }
      res.json(result)
    })
    .catch(err => next(err))
}

exports.director_detail = (req, res, next) =>{ 
  async.parallel(
    {
      director: (callback) => {
        Director.findById(req.params.id).exec(callback)
      },
      director_movies: (callback) => {
        Movie.find({director: req.params.id}).exec(callback)
      }
    },
    (err, results) => {
      if(err) next(err)
      if(results.director === null){
        const err = new Error("No director")
        err.status = 404
        next(err)
      }
      res.json({
        title: "Director Detail",
        director: results.director,
        director_movies: results.director_movies
      })
    }
  )
}

exports.director_create_get = (req, res, next) => {
  res.json({message: "direct create GET"})
}
exports.director_create_post = (req, res, next) => {
  res.json({message: "direct create POST"})
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

