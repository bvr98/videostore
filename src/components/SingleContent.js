import React from 'react'
import "../css/movies.css";
import MovieDetail from '../Pages/MovieDetail';

const singleContent = ({ id, poster,title,year,rent,buy,overview,backdrop_path}) => {
    console.log({poster})
    return (
        <MovieDetail 
        id={id}
        poster={poster}
        title={title}
        year={year}
        rent={rent}
        buy={buy}
        overview={overview}
        backdrop_path={backdrop_path}>
        <div>
            <div className="movieposter">
                <img src={`${poster}`} alt="movie poster" />
            </div>
        </div>
        </MovieDetail>
    )
}

export default singleContent
