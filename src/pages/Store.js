import React, { useEffect, useState } from 'react'
import Splash from '../component/Spalsh';
function Store() { 
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");


    
    const fetchData = () => {
        setIsLoading(true);
        //Timeout added to show Splash screen for 1000ms 
        setTimeout(() => {
            return fetch("https://api.tvmaze.com/search/shows?q=all")
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false)
                setMovies(data)
            }) .catch(() => {
                console.log("Unable to fetch Movies list")
                setErrorMessage("Unable to fetch Movies list");
                setIsLoading(false);
             });
        }, 1000);
       
    }

    useEffect(() => {
      fetchData();
    },[])
  
  const  renderMovies = (
        <div className='storecontainer'>
        <ul className='image_grid'>
       
          {movies && movies.length > 0 && movies.map((movieObj, index) => (
               movieObj && movieObj.show.image !== null && <li className='image_grid_list'>
                <img src={movieObj.show.image["medium"]}></img></li>
            ))}
        </ul>
      </div>
    );
    

    return (
        <div className="App">
            {isLoading ? <Splash /> : renderMovies}
            {errorMessage && <div className="error">{errorMessage}</div>}
        </div>
    );
}
  

export default Store