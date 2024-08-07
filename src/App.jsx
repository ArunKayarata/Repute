import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Title from './assets/components/Title.jsx'
import Homecard from './assets/components/Homecard.jsx'
import MovieList from './assets/components/MovieList.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './assets/components/SignIn.jsx'
import MovieDetails from './assets/components/MovieDetails.jsx'
import FilteredMovie from './assets/components/FilteredMovie.jsx'

function App() {
  function Home() {
    return (
      <div className='w-[1400px]'>
        <Title />,
        <Homecard />,
        <MovieList />
      </div>
    )
  }

  function Movie(){
    return (
      <>
      <Title/>
      <MovieDetails/>
      </>
    )
  }

  function Filter(){
    return (
    <>
    <Title/>
    <FilteredMovie/>
    </>
    )
  }

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signup' element={<SignIn/>} />
      <Route path='/:id' element ={<Movie/>}/>
      <Route path='/filteredMovies' element={<Filter/>} /> 
    </Routes>

  </BrowserRouter>
 
    </>
  )
}

export default App
