import React from 'react';
import { useState, useEffect } from "react";
import SingleContent from '../components/SingleContent';
import SingleContentSeries from '../components/SingleContentSeries';
import { useContext } from 'react';
import MovieContext from "../components/MovieContext";


export default function SearchResult() {
    const { id, setID } = useContext(MovieContext);
    let movieTitle = id.title;
    let seriesTitle = id.title;
    var [movie, setMovie] = useState([]);
    var [series, setSeries] = useState([]);

    useEffect(() => {
        fetch("https://pure-depths-83970.herokuapp.com/movies/title?title=" + movieTitle)
            .then(res => res.json())
            .then((data) => {
                setMovie((previousState) => {
                    previousState = data.body;
                    return previousState
                });
            })
            .catch(err => console.log(`Error ${err}`));

    }, [])

    useEffect(() => {
        fetch("https://pure-depths-83970.herokuapp.com/series/title?title=" + seriesTitle)
            .then(res => res.json())
            .then((data) => {
                setSeries((previousState) => {
                    previousState = data.body;
                    return previousState
                });
            })
            .catch(err => console.log(`Error ${err}`));
    }, [])

    return (
       <div>
           <span className="pageTitle">Search Results</span>
            {movie.map((c => {

                return (
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
                    )
            }
            ))}
            {series.map((c => {
                return (
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
                )
            }
            ))}
            </div>
    );
}