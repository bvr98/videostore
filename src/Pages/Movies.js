
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
