//import React, { useState, useEffect } from 'react';
import "../css/movies.css";
import SingleContent from '../components/SingleContent';
import MovieContext from "../components/MovieContext";
import { useContext } from 'react';

  export default function Movies(props) {

   const { movies, setMovies}  = useContext(MovieContext);
   console.log({movies})
    return (
      <div>
        <span className="pageTitle">Movies</span>
        <div className="movies">
          {

//Array.isArray(this.state.movies) && this.state.movies.map((c) => (
   movies.map((c,index) => (
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title}
                year={c.year}
                rent={c.rent}
                buy={c.buy}
                poster={c.poster}
                overview={c.overview}
                backdrop_path={c.backdrop_path}
              />
            ))}
        </div>
      </div>
    );
  };
//}
//export default Movies

 //     const [movies, setMovies] = useState([]);

  //   useEffect(() => {
  //     fetch("http://localhost:5000/movies")
  //     .then(res => res.json())
  //     .then((data) => {
  //           setMovies((M => {

  //         M = data;
  //         return M
  //       }));
  //     })
  //     .catch(err => console.log(`Error ${err}`));

  // }, [])
  //render() {
    //{console.log("Movie Data:"+movies[0].id)}

