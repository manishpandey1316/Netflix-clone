import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import logo from "../assets/homeTitle.webp";
import backgroungImage from "../assets/home.jpg";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { fetchGenreAsync, fetchMovieAsync, selectGenres, selectGenresLoaded, selectMovies } from "../store/Movies/slice";
import {useSelector,useDispatch}  from 'react-redux';
import Slider from "../components/Slider";
const Container = styled.div`
 
  .hero {
    margin-right:0;
    position:relative;
    
    img {
      height: 100vh;
      width: 100vw;
      opacity: 0.6;
    }
    .section {
      position: absolute;
      bottom: 4rem;
      padding:4rem;
      .logo {
        img {
          height: 100%;
          width: 100%;
          opacity:0.7;
        }
        &:focus {
        border: 2px solid blue;
        }
      }
     
      .controls {
        margin-top:2rem;
        display: flex;
        gap: 2rem;
        button {
          display: flex;
          height: 3rem;
          width: 8rem;
          border: 1px solid;
          border-radius: 0.5em;
          cursor: pointer;
          padding: 1rem;
          gap: 1rem;
          align-items: center;
          &:active {
            transform: scale(0.95);
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
          }
          &:focus{
            outline:none;
          }
          svg {
            font-size: 2rem;
          }
          span {
          font-size: 1.2rem;
         
        }
        
        }
       
      .play{
            background-color:rgba(255, 255, 255, 0.8);
            span{
               color:black;
            }
      } 
      .info{
        background-color:rgba(100, 100, 100, 0.8);
        svg{
              color:white;
          }
        span{
          color:white;
          
          }
        }
      }
    }
    }
   
  
`;
export default function Netflix() {
  const [isScroll, setIsScroll] = useState(false);
  
  window.onscroll = () => {
   
    setIsScroll(window.pageYOffset <= 4 ? false : true);
    return () => window.onscroll == null;
  };
  const dispatch=useDispatch();
  const genres=useSelector(selectGenres)
  const genresLoaded=useSelector(selectGenresLoaded)
  const movies=useSelector(selectMovies)
  useEffect(()=>{
    dispatch(fetchGenreAsync())
  },[])
  useEffect(()=>
  {  
    if(genresLoaded)
      {  dispatch(fetchMovieAsync({type:"movie"})) }
  },[genres])
  
  const nav = useNavigate();
  return (
    <>
      {movies.length>0 && <Container>
        <Navbar isScroll={isScroll}></Navbar>
        <div className="hero">
          <img src={backgroungImage} alt="background-image"></img>
          <div className="section">
            <div className="logo">
              <img src={logo} alt="logo-image" onFocus={(e)=>{ e.defaultPropagation();}}></img>
            </div>
            <div className="controls">
              <button className="play" onClick={() => nav("/Player")}>
                <FaPlay />
                <span>Play</span>
              </button>
              <button className="info">
                <AiOutlineInfoCircle />
                <span>Info</span>
              </button>
            </div>
          </div>
        </div>
         <Slider/>
      </Container>}
    </>
  );
}
