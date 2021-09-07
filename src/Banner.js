import React, { useState, useEffect}from 'react';
import axios from './axios';
import request from './requests'

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(request.fetchNetflixOriginals);

        }
        fetchData();

    },[]);


    return (
       <header>
           
       </header>
    )
}

export default Banner;
