import React, { useEffect, useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'


function FilteredMovie() {
    const location = useLocation();
    const navigate=useNavigate();
    const search = location.state || {};
    const posterurl = "https://image.tmdb.org/t/p/original/";
    // console.log("in filtered component", search.searchQuery);
    const [display, setdisplay] = useState(false);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        getfilteredmovies()
    }, [search.searchQuery]);
    async function getfilteredmovies() {
        const filteredMoviesRaw = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search.searchQuery}&api_key=81f382d33088c6d52099a62eab51d967`);
        const res = await filteredMoviesRaw.json();
        setMovies(res.results);
        setdisplay(true);
    }
    function showmoviedetails(movie) {
     
        navigate(`/${movie.id}`, { state: { movie } })


    }

    if(movies.length==0){
        return (
            <div className='w-full flex  justify-center h-full  '>
                    <div className='w-1/2  mt-20 '>
                <h1 className='text-5xl font-bold text-gray-500'>No movies found</h1>
            </div>

            </div>
        
        )
    }
    return (
        <>
            {display && (
                <div className='flex flex-row flex-wrap justify-evenly items-center'>

                    {
                        movies.map((movie, index) => (
                            <div key={index} className='m-3  w-1/6'>
                                <img src={posterurl + movie.poster_path} alt="image" className=' rounded-xl' />
                                <button className='text-white bg-cyan-950 rounded-full w-full p-1 mt-2' onClick={() => showmoviedetails(movie)}>{movie.original_title}</button>
                            </div>
                        ))
                    }

                </div>
            )}
    </>

    )
}

export default FilteredMovie