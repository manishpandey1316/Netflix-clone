import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import CardSlider from "../components/CardSlider";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import {fetchMovieDataByGenreAsync, selectGenres,selectMovies } from "../store/Movies/slice";

function MoviePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const dispatch=useDispatch()
   useEffect(()=>{  
     dispatch(fetchMovieDataByGenreAsync({genre:28,type:'movie'}))
   },[])
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="movie" />
      {movies.length>0? 
        <Slider movies={movies} /> : <NotAvailable />
      }
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 10rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;