import { useState,useEffect } from 'react';
import React from 'react';
import searchicon from '../constants/searchicon.png';
import { useNavigate } from 'react-router-dom';
import cross from'../constants/cross.png'

function Title() {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const[recentsearches,setRecentSearches]=useState([]);
 
    useEffect(() => {
        console.log("recentsearches", recentsearches);
    }, [recentsearches]);
    function showsignup() {
        navigate('/signup');
    }

    function showhomepage() {
        navigate('/');
    }

    function showmatchingresults() {
        console.log("showmat",searchQuery )
        
        // if (searchQuery && !recentsearches.includes(searchQuery)) {
        //     setRecentSearches(prevSearches => {
        //         const newSearches = [ ...prevSearches,searchQuery].slice(0, 4);
        //         return newSearches;
        //     });
        //     console.log("recentsearches inside",recentsearches);

        // }
        // console.log("recentsearches",recentsearches);
        // setRecentSearches([...recentsearches,searchQuery])
        setRecentSearches(prevSearches => {
            if (searchQuery && !prevSearches.includes(searchQuery)) {
                return [searchQuery, ...prevSearches].slice(0, 4); 
            }
            return prevSearches;
        });

        console.log("recentsearches", recentsearches);
        navigate('/filteredMovies', { state: { searchQuery } });
    }

     function searchmovieresults(event) {
        // console.log("params", event.target.value);
        setSearchQuery(event.target.value);

        // console.log("searchresults", searchQuery);
    }

    function deleteinrecentsearches(index){
        console.log("searches",index);
        const newrecentsearches=recentsearches.filter((ele,inde)=>
             inde!=index
        )
        console.log("newrecentsearches", newrecentsearches)
        setRecentSearches(newrecentsearches);
        

    }

    return (
        <div className='flex flex-col items-start  md:flex-row justify-start w-full p-4'>
            <div className='mb-4 md:mb-0'>
                <h1 className='font-extrabold text-xl text-start cursor-pointer' onClick={showhomepage}>MovieStreamer</h1>
            </div>
            <div className='flex flex-col items-start md:flex-row  md:justify-evenly  font-semibold text-md w-full md:w-1/2 mb-4 md:mb-0'>
                <p className='mb-2 md:mb-0 cursor-pointer'>Movies</p>
                <p className='mb-2 md:mb-0 cursor-pointer'>Series</p>
                <p className='mb-2 md:mb-0 cursor-pointer'>Contact</p>
                <p className='mb-2 md:mb-0 cursor-pointer'>About Us</p>
            </div>
            <div className='flex  md:items-center justify-center w-full  md:w-auto'>
                <div className='relative w-full   md:w-auto'>
                    <input
                        placeholder='Search'
                        className='border-2 bg-gray-200 rounded-full p-1 pl-8 w-1/2  md:w-64'
                        onChange={searchmovieresults}
                    />
                    <img
                        src={searchicon}
                        alt='icon'
                        className='absolute right-[27%] top-[30%] md:right-[5%] md:top-1/2 transform -translate-y-1/2 cursor-pointer'
                        style={{ width: '16px', height: '16px' }}
                        onClick={showmatchingresults}
                    />
                     {searchQuery && recentsearches.length > 0 && (
                        <ul className='absolute left-0 right-0 bg-white border border-gray-300 rounded-md mt-1 z-10'>
                            {recentsearches.map((search, index) => (
                                <li
                                    key={index}
                                    className='p-2 cursor-pointer hover:bg-gray-200  rounded-lg flex  justify-between items-center'
                                    onClick={() => {
                                        setSearchQuery(search);
                                        showmatchingresults();
                                    }}
                                >
                                    <div className='flex justify-start items-center'>
                                    <img src={searchicon} alt='search' className='mr-4 w-3 h-5' />
                                    {search}
                                    </div>
                                  
                                    <img src={cross} alt="cross" onClick={()=>deleteinrecentsearches(index)}/>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button className='px-2 ml-2 border-2 border-black rounded-lg' onClick={showsignup}>Sign Up</button>
            </div>
        </div>
    );
}

export default Title;
