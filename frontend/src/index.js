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

      <Route path="/movies" element={<Movie />} />
      <Route path="/movie/create" element="create" />
      <Route path="/movie/:id" element="get" />
      <Route path="/movie/:id/delete" element="create" />
      <Route path="/movie/:id/update" element="create" />

      <Route path="/genres" element={<Genre />} />

      <Route path="/directors" element={<Director />} />
    </Route>
  )
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


