import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchMovieDataByGenreAsync } from "../store/Movies/slice";

export default function SelectGenre({ genres, type }) {
  const dispatch = useDispatch();
 
  return (
    <Select defaultValue={16}
      className="section"
      onChange={(e) => {
        dispatch(
          fetchMovieDataByGenreAsync({
            genre: e.target.value,
            type,
          })
        );
      }}
    >
      {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  .section{
    display:flex;
  }
`;