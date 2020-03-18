import axios from "axios";

export const getMoviesByName = () => {
  return axios
    .get("http://www.omdbapi.com/?s=batman&apikey=79ec7f73")
    .then(response => response.data)
    .catch(e => console.log(e));
};

export const getMovies = name => {
  return axios
    .get("http://www.omdbapi.com/?s=" + name + "&apikey=79ec7f73&page=1")
    .then(response => response.data)
    .catch(e => console.log(e));
};

export const getMovieDetail = id => {
  return axios
    .get("http://www.omdbapi.com/?apikey=79ec7f73&i=" + id)
    .then(response => response.data)
    .catch(e => console.log(e));
};
