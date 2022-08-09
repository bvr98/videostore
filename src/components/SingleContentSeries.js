import React from 'react'
import "../css/series.css";
import SeriesDetail from '../Pages/SeriesDetail';

const singleContentSeries = ({ id, title, year,buy,overview, poster,backdrop_path }) => {
    return (
        <SeriesDetail
         id={id}
        poster={poster}
        title={title}
        year={year}
        buy={buy}
        overview={overview}
        backdrop_path={backdrop_path}>
        <div>
            <div className="movieposter">
                <img src={`${poster}`} alt="series poster" />
            </div>
        </div>
        </SeriesDetail>
    )
}

export default singleContentSeries
 