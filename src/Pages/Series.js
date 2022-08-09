import React from 'react';
import "../css/series.css";
import SingleContentSeries from '../components/SingleContentSeries';
import MovieContext from "../components/MovieContext";
import { useContext } from 'react';

const Series = () => {
  const {series, setSeries}  = useContext(MovieContext);


  return (
    <div>
      <span className="pageTitle">TV Shows</span>
      <div className="series">
        {

          series && series.map((c,index) => (
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
    </div>
  );
};

export default Series;
