const Director = require("../models/Director")
const Genre = require("../models/Genre")
const Movie = require("../models/Movie")
const async = require("async")

exports.movie_list = (req, res, next) => {
  Movie.find()
    .populate("director")
    .populate("genre")
    .exec((err, results) => {
      if(err) return next(err)
      res.json(results)
    })
}

exports.movie_detail = (req, res, next) =>{ 
  Movie.findById(req.params.id)
    .exec((err, results) => {
      if(err) return next(err)
      if(results === null){
        const error = new Error("Movie does not exist")
        error.status = 404
        return next(error)
      }
      res.json(results)
    })
}

exports.movie_create_get = (req, res, next) => {
  // async.parallel(
  //   {
  //     directors: (callback)=>{
  //       Director.find(callback)
  //     },
  //     genres: (callback)=>{
  //       Genre.find(callback)
  //     }
  //   }
  // ).then(results => {
  //     console.log(results)
  //     res.json({
  //       title: "Add new movie",
  //       directors: results.directors,
  //       genres: results.genres
  //     })
  // }).catch(err => {
  //   console.log(err)
  //   return next(err)
  // })
  res.send("get")
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

