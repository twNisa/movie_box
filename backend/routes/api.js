const express = require("express")
const router = express.Router()

const movieController = require("../controllers/MovieController")
const directorController = require("../controllers/DirectorController")
const genreController = require("../controllers/GenreController"
)

// movie routes
router.get("/", movieController.movie_list)

router.get("/movie/:id", movieController.movie_detail)
router.get("/movie/create", movieController.movie_create_get)
router.post("/movie/create", movieController.movie_create_post)
router.get("/movie/:id/delete", movieController.movie_delete_get)
router.post("/movie/:id/delete", movieController.movie_delete_post)
router.get("/movie/:id/update", movieController.movie_update_get)
router.post("/movie/:id/update", movieController.movie_update_post)

// director routes
router.get("/directors", directorController.director_list)

router.get("/director/:id", directorController.director_detail)
router.get("/director/create", directorController.director_create_get)
router.post("/director/create", directorController.director_create_post)
router.get("/director/:id/delete", directorController.director_delete_get)
router.post("/director/:id/delete", directorController.director_delete_post)
router.get("/director/:id/update", directorController.director_update_get)
router.post("/director/:id/update", directorController.director_update_post)


//genre routes
router.get("/genres", genreController.genre_list)

router.get("/genre/:id", genreController.genre_detail)
router.get("/genre/create", genreController.genre_create_get)
router.post("/genre/create", genreController.genre_create_post)
router.get("/genre/:id/delete", genreController.genre_delete_get)
router.post("/genre/:id/delete", genreController.genre_delete_post)
router.get("/genre/:id/update", genreController.genre_update_get)
router.post("/genre/:id/update", genreController.genre_update_post)

module.exports = router