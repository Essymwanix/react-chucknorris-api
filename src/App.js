import './App.css';
import Chuck from './chuck_norris.jpg';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const categories = ["animal", "career", "celebrity", "dev", "explicit", "fashion", "food", "history", "money", "movie", "music", "political", "religion", "science", "sport", "travel"]

    const [state, set] = useState({
        category: ''
    });

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async() => {
        const result = await axios.get('https://api.chucknorris.io/jokes/categories');
        console.log(result.data);

        set({
            ...state,
            category: result.data
        });
    }
    return ( <
        div className = "container" >
        <
        div className = "row" >
        <
        div className = "col-6" >
        <
        h1 className = "title" > Chuck Norris API < /h1> <
        img src = { Chuck }
        alt = "Chuck Norris" / >

        <
        /div> < /
        div > <
        h3 > Joke Categories < /h3>  <
        h4 > {
            categories.map((category) =>

                ( < a href = "https://api.chucknorris.io/jokes/random?category={category}" >
                    <
                    li > { category } < /li></a >
                ))
        } <
        /h4>


        <
        /div>
    );
}

export default App;