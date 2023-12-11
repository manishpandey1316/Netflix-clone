import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchGenreData,fetchMovieData, fetchMovieDataByGenre } from './api';
const initialState = {
    genres:[],
    genresLoaded:false,
    movies:[]
}

export const fetchGenreAsync = createAsyncThunk(
    'Movies/fetchGenre',
    async () => {
     
      const response = await fetchGenreData() 
      return response.data
    }
  )
  export const fetchMovieAsync = createAsyncThunk(
    'Movies/fetchMovie',
    async ({type},thunkAPI) => {
      const {Movies:{genres}} = thunkAPI.getState();
     
      const response = await fetchMovieData(type,genres)
      return response.data
    }
  )
  export const fetchMovieDataByGenreAsync = createAsyncThunk(
    "Movies/fetchMovieDataByGenre",
    async ({ genre, type }, thunkAPI) => {
      const {
        Movies: { genres },
      } = thunkAPI.getState();
       console.log(genre)
        const response = await fetchMovieDataByGenre(genre,type,genres)
      return response.data
    
    }
  );
  export const MoviesSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers: {
      increment: (state) => {
        
        
      }
    },
    
    extraReducers: (builder) => {
      builder
        .addCase(fetchGenreAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchGenreAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.genresLoaded=true;
          state.genres = action.payload;
        })
        .addCase(fetchMovieAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMovieAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.movies = action.payload;
        })
        .addCase(fetchMovieDataByGenreAsync.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMovieDataByGenreAsync.fulfilled, (state, action) => {
          state.status = 'idle';
          state.movies = action.payload;
        })
    }})

export const selectGenres = (state) => state.Movies.genres;
export const selectMovies = (state) => state.Movies.movies;
export const selectGenresLoaded = (state) => state.Movies.genresLoaded;
export default MoviesSlice.reducer;