import React from 'react'
import "../css/App.css";
import Trending from "./Trending";
import Slider from "../components/Slider";
const Home = () => {
    return (
        <div>
            <Slider />
            <Trending />
        </div>
    )
}
export default Home
