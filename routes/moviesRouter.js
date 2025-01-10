const { Router } = require('express');
const { getAllMovies, getMovieById, createMovie, 
    updateMovieGet, updateMoviePost, deleteMovie,
    getAllYears, renderMoviesPage} = require("../controllers/moviesController");
const upload = require('./multer');

const moviesRouter = Router();

moviesRouter.get("/", getAllMovies, getAllYears, renderMoviesPage);
moviesRouter.get("/:id", getMovieById);
moviesRouter.post("/", upload, createMovie);
moviesRouter.get("/:id/update", updateMovieGet);
moviesRouter.post("/:id/update", upload,  updateMoviePost);
moviesRouter.post("/:id/delete", deleteMovie);

module.exports = moviesRouter;