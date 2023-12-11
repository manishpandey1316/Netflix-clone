import React from 'react'
import CardSlider from './CardSlider'
import { selectMovies } from '../store/Movies/slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
export default function Slider() {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' ) {
        event.preventDefault();
        
      }
    };

    document.addEventListener('keydown', handleKeyDown);

   
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const movies=useSelector(selectMovies)
  
  const getMoviesFromAndTo=(from,to)=>
  {   
     return  movies.slice(from,to)
  }
  return (
    <div>
     
      <CardSlider title="Trending Now" movies={getMoviesFromAndTo(0,10)}></CardSlider>
      <CardSlider title="New Releases" movies={getMoviesFromAndTo(10,20)}></CardSlider>
      <CardSlider title="Global Blockbusters" movies={getMoviesFromAndTo(20,30)}></CardSlider>
      <CardSlider title="Popular on NetFlix" movies={getMoviesFromAndTo(30,40)}></CardSlider>
      <CardSlider title="Action movies" movies={getMoviesFromAndTo(40,50)}></CardSlider>
      <CardSlider title="This Week" movies={getMoviesFromAndTo(50,60)}></CardSlider>
    </div>
  )
}
