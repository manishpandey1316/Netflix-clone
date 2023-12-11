import React, { useState } from "react";
import styled from "styled-components";
import video from "../assets/demo.mp4";
import { IoPlayCircle } from "react-icons/io5";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
position: relative;
height: 100%;
width: 230px;
max-width: 230px;
cursor: pointer;
img {
  height: 100%;
  width: 100%;
  border-radius: 0.2rem;
  object-fit: cover;
  z-index: 10;
}
.hover {
  position: absolute;
  height: max-content;
  width: 20rem;
  top: -18vh;
  left: 0;
  z-index: 50;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.75) 0px 3px 10px;
  background-color: #181818;
  transition: 0.3s ease-in-out;
  .hover-img-video {
    position: relative;
    height: 140px;
    img {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 4;
      position: absolute;
    }
    video {
      width: 100%;
      height: 140px;
      object-fit: cover;
      border-radius: 0.3rem;
      top: 0;
      z-index: 5;
      position: absolute;
    }
  }
  .hover-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    .name {
      font-size: 1rem;
    }
    .controls {
      display: flex;
      gap: 1rem;
      svg {
        font-size: 1.5rem;
        cursor: pointer;
        transition: 0.3s ease-in-out;
        &:hover {
          color: #b8b8b8;
        }
      }
    }
    ul {
      display: flex;
      align-items: center;
      gap: 1rem;
      li {
        padding-right: 0.7rem;
        &:first-of-type {
          list-style-type: none;
        }
      }
    }
  }
}
`;
export default React.memo(function Card({ movie }) {
 
  const [isHovered, setIsHovered] = useState(false);
  const nav = useNavigate();
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
        alt=""
        onClick={() => nav("/Player")}
      ></img>
      {isHovered && (
        <div className="hover">
          <div className="hover-img-video">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.image}`}
              alt=""
              onClick={() => nav("/Player")}
            ></img>
            <video
              src={video}
              autoPlay
              muted
              loop
              onClick={() => nav("/Player")}
            ></video>
          </div>
          <div className="hover-info">
            <h1 className="name" onClick={() => nav("/Player")}>
              {movie.name}
            </h1>
            <div className="controls">
              <IoPlayCircle   onClick={() => nav("/Player")}></IoPlayCircle>
              <FaThumbsUp></FaThumbsUp>
              <FaThumbsDown></FaThumbsDown>
              <FaPlus></FaPlus>
            </div>
            <ul>
              {movie.genres.map((genre) => {
                return <li className="genre-item">{genre}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </Container>
  );
})
