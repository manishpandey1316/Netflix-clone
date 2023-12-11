import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { RiLogoutCircleRLine } from "react-icons/ri";

const Container = styled.div`
  nav {
    position:fixed;
    width: 100vw;
    display: flex;
    left:0;
    top: 0;
    align-items: center;
    background-color:black;
    padding:0.5em 2em;
    z-index:2;
    .logo {
      height: 8vh;
      width: 12vw;
      background: url(${logo});
      background-size: 12vw 8vh;
    }
    ul {
      display: flex;
      gap: 2rem;
      align-items: center;
      margin: 0 3rem;
      padding: 0.2rem;
      li {
        a {
          text-decoration: none;
          color: white;
          &:focus{
          outline:none;
         
        }
        }
       
      }
    }
    .right {
      margin: 2rem;
      display: flex;
      position: absolute;
      right: 10vw;
      gap: 1.6rem;
      align-items: center;
      button {
        background-color: transparent;
        border: none;
        font-size: 1.2rem;
        outline:none;
        cursor:pointer;
        &:active {
  transform: scale(0.95); 
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3); 
}
      }
      svg {
        color: red;
        
      }

      .search {
        display: flex;
        gap: 1rem;
        padding: 0.25rem;
        button {
         
          svg {
            color: white;
          }
        }
        .search-field {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.2s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
        }
      }
      .show-search {
        border: 2px solid white;
        .search-field {
          width: 100%;
          opacity: 1;
          visibility: visible;
          &:focus {
            outline:none;
          }
        }
      }
    }
  }
`;

export default function Navbar({isScroll}) {
  const navList = [
    { text: "Home", link: "/NetFlix" },
    { text: "TV Shows", link: "/TvShows" },
    { text: "Movies", link: "/Movies" },
  
  ];

  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const backgroundStyle={
    backgroundColor:'transparent'
  }
  return (
    <>
      <Container >
        <nav style={isScroll?backgroundStyle:null}>
          <div className="logo"></div>
          <ul type="none" className="nav-list">
            {navList.map(({ text, link }) => (
              <li key={text}>
                <Link to={link}>{text}</Link>
              </li>
            ))}
          </ul>
          <div className="right">
            <div className={`search ${showSearch ? "show-search" : ""}`}>
              <button
                onFocus={() => {
                  setShowSearch(true);

                }}
              >
                <FaSearch />
              </button>
              <input
                type="text"
                
                className="search-field"
                placeholder="search"
                value={searchValue}
                onBlur={() => {
                  setShowSearch(false);
                }}
                onChange={(e) => setSearchValue(e.target.value)}
              ></input>
            </div>
            <button>
              <Link to="/">
              <RiLogoutCircleRLine/>
              </Link>
            </button>
          </div>
        </nav>
      </Container>
    </>
  );
}
