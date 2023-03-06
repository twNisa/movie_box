import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Movie from "./pages/Movie"
import Genre from "./pages/Genre"
import Director from "./pages/Director"
import Home from './pages/Home';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="movie" element={<Movie />} />
      <Route path="genre" element={<Genre />} />
      <Route path="director" element={<Director />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


