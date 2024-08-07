import React from 'react'
import { useLocation } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import date from '../constants/date.png'
import language from '../constants/language.png'
import ReactStars from 'react-stars';
import star from '../constants/Star 5.png';
import Genre from'../constants/Genre.png'

const posterurl = "https://image.tmdb.org/t/p/original/";


function MovieDetails() {
    const languagesknown = ["Telugu", "Hindi", "English", "Kannada"];
    const rating = ["IMDB", "Streamvibe"];

    const location = useLocation();
    const { movie } = location.state || {};
    // console.log(movie);

    if (!movie) {
        return <div>Movie not allowed</div>
    }

    return (
        <div className='w-full  mt-10 ' >
            <div className='w-full  ml-10 relative'>
                <img src={posterurl + movie.poster_path} alt="poster" className=' rounded-xl  w-full h-[800px]   opacity-65 ' />
                <div className='absolute top-[150px] left-6  w-1/2'>
                    <h1 className='text-7xl font-bold mb-20'>{movie.original_title}</h1>
                    <p className='text-2xl font-semibold p-2 text-gray'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, id quo, sunt, suscipit expedita aut tempora cupiditate non explicabo dolor inventore! Debitis blanditiis non ullam eaque, corporis amet modi dignissimos!</p>
            <button className='bg-black text-white text-2xl rounded-full px-2 w-1/3 py-2 mt-7'>Play Now</button>
                </div>

                <div className='m-3 mt-6 bg-gray-200 rounded-md p-2'>
                    <h1 className=' m-2 text-2xl text-gray-400 text-start  px-10'>Description</h1>
                    <p className='m-2 text-xl text-start px-10 text-gray-600'>
                        {movie.overview}
                    </p>
                </div>
                <div className='m-3 mt-6 bg-gray-200 rounded-md p-2'>
                    <div className='flex text-gray-400 text-start mx-7 mt-4 '>
                        <img src={date} alt="date" />
                        <p className='pl-2 text-xl '>Released Year</p>
                    </div>
                    <p className='text-start m-3 pl-6 text-gray-600 text-xl'>{movie.release_date.slice(0, 4)}</p>

                    <div className=' flex flex-col '>
                        <div className='flex text-gray-400 text-start mx-7 mt-4'>
                            <img src={language} alt='language' className=' ' />
                            <p className='pl-2 text-xl'>Available Language</p>
                        </div>
                        <div className='flex justify-start items-center m-3 '>
                            {languagesknown.map((lang, index) => (
                                <div key={index} className='mt-2 ml-4 ' >
                                    <button className='bg-black text-white text-xl  p-2  rounded-lg m-1 ' >{lang}</button>
                                </div>
                            )
                            )}


                        </div>


                        <div className='flex text-gray-400 text-start mx-7 mt-4'>
                            <img src={star} alt="date" />
                            <p className='pl-2 text-xl '>Ratings</p>
                        </div>
                        <div className='flex '>
                        {
                            rating.map((rate, index) => (
                                <div  key={index} className='flex flex-col items-start ml-6 mt-4 w-1/2 h-20 pl-7 bg-gray-300 rounded-md '>

                                    <p className='font-bold mt-2'>{rate}</p>
                                    <div className=' flex items-center'>
                                        <ReactStars
                                            count={10}
                                            value={movie.vote_average}
                                            size={24}
                                            color2={'#ff0000'}
                                            edit={false}
                                        />
                                        <span className='ml-2 text-white'>{movie.vote_average}</span>

                                    </div>

                                </div>

                            ))
                        }

                        </div>
                       
                       <div className=' mt-3 '>
                        
                       <div className='flex text-gray-400 text-start mx-7'>
                            <img src={Genre} alt="date" />
                            <p className='pl-2 text-xl '>Genre</p>
                        </div>
                        <div className='flex ml-3 mt-3 '>
                            <button className='bg-black text-white text-xl  p-2  rounded-lg m-1 '>Action</button>
                            <button className='bg-black text-white text-xl  p-2  rounded-lg m-1 '>Adventure</button>
                        </div>

                       </div>




                    </div>
                </div>

            </div>


        </div>
    )
}

export default MovieDetails