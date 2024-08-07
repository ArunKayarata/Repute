import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import more from '../constants/More.png'



function Genres({genre, index}) {
    const [movies, setmovies] = useState([]);
    const [display, setdisplay] = useState(false);
    const [previousstate, setpreviousstate] = useState(0);
    const posterurl = "https://image.tmdb.org/t/p/original/";
    const navigate = useNavigate();


    useEffect(() => {
        getallmovies()
    }, [previousstate]);

    async function getallmovies() {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=81f382d33088c6d52099a62eab51d967&language=en-US&page=${index+1}`);
        let allmovies = await res.json();
        // console.log("All movies", allmovies.results);

        setmovies(allmovies.results.slice(previousstate, previousstate + 5));
        // console.log("movies", movies);
        setdisplay(true);
    }

    function moremovies() {
        setpreviousstate(previousstate + 5);
    }

    function showmoviedetails(movie) {
        // console.log("clicked on movie name button")

        // console.log("movie", movie);
        navigate(`/${movie.id}`, { state: { movie } })


    }
    return (
        <>
        {
            display && (
                <>
                <div className='flex items-center w-full'>
                    <h1 className='text-start p-2 text-3xl font-semibold'>{genre}</h1>
                    <hr className=' flex-grow border-t-2 border-black' />
                    <button className='bg-gray-300 w-9 h-9 ml-1'> <img src={more} alt="more" className='ml-3' onClick={moremovies} /> </button>
                </div>
    
                <div className=' flex flex-col   md:flex-row flex-wrap justify-evenly items-center '>
                    {
                        movies.map((movie, index) => (
                            <div key={index} className='m-3 px-2  w-full md:w-1/3  lg:w-1/4 xl:w-1/6'>
                                <img src={posterurl + movie.poster_path} alt="poster" className=' rounded-3xl' />
                                <button className='text-white bg-cyan-950 rounded-full w-full p-1 mt-2' onClick={() => showmoviedetails(movie)}>{movie.original_title}</button>
                            </div>
                        ))
                    }
    
                </div>
    
            </>
            )
        }
        </>
        
    )
}

export default Genres