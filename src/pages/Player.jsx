import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import video from "../assets/demo.mp4";
const Container = styled.div`
.section{
  width:100vw;
  height:100vh;
 .back{
    position:absolute;
    top:1rem;
    left:1rem;
    z-index:1;
    background-color:transparent;
    border:none;
    cursor:pointer;
    svg{
      font-size:3rem;
      color:white;
      font-weight:bold;
    }
    &:focus{
       transform:scale(0.95);
    }
 }
 video{
   width:100%;
   height:100%;
   object-fit:cover;
 }
}
`;
export default function Player() {
  const nav = useNavigate();
  return (
    <Container>
      <div className="section">
        <button className="back" onClick={() => nav("/Netflix")}>
          <IoIosArrowRoundBack/>
        </button>
       
          <video src={video} controls loop muted autoPlay></video>
      
      </div>
    </Container>
  );
}
