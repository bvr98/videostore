import "../css/Trending.css";
import React from 'react';
import SingleContent from '../components/SingleContent';
import SingleContentSeries from '../components/SingleContentSeries';
import MovieContext from "../components/MovieContext";
import { useContext } from 'react';

export default function Trending()  {
  const {movies, setTrendingMovies} =  useContext(MovieContext);
  const {series, setTrendingSeries} =  useContext(MovieContext);
console.log({movies, series})

  return (
    <div>
      <span className="pageTitle">Trending Today</span>
      <h1>Trending Movies</h1>
 
      <div className="trending">
        {
         
          movies && movies.map((c) => (
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
      <hr/>
      <div className="Banner">
        <img src="https://images2.vudu.com/assets/mixMatch/banner/206210-1305" alt="Movie banner"/>
        <hr/>
        </div>

      <h1>Trending Tv Shows</h1>
      <div className="trending">
        {
          series && series.map((c) => (
            <SingleContentSeries
            key={c.id}
            id={c.id}
            title={c.title}
            year={c.year}
            buy={c.buy}
            poster={c.poster}
            overview={c.overview}
            release_date={c.release_date}
            backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
      <div className="Banner">
        <hr/>
        <img src="https://images2.vudu.com/assets/mixMatch/banner/205938-1305" alt="content banner"/>
        <hr/>
      </div>
    </div>
  );
};
