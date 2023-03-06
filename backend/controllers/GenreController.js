const Director = require("../models/Genre")
const async = require("async")
const Genre = require("../models/Genre")
const Movie = require("../models/Movie")

exports.genre_list = (req, res, next) => {
  Genre.find()
      .sort("name")
      .exec()
      .then(results => {
        if(results === null){
          const err = new Error("No genres")
          err.status = 404
          return next(err)
        }
        res.json(results)
      }).catch(err => next(err))
}

exports.genre_detail = (req, res, next) =>{ 
  async.parallel(
    {
      movies: (callback) => {
        Movie.find({genre: req.params.id})
              .populate("director")
              .exec(callback)
      },
      genre: (callback) => {
        Genre.findById(req.params.id).exec(callback)
      }
    },
    (err, results) => {
      if(err) next(err)
      if(results.genre === null){
        const err = new Error("Genre not found")
        err.status = 404
        return next(err)
      }
      res.json({
        title: "Genre Detail",
        genre: results.genre,
        movies: results.movies
      })
    }
  )

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

