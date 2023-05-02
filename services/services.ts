import axios from 'axios';

import { Movie, TV } from '../types';
import { TMDB_API_KEY } from '@env';

export type MoviesResponse = {
  results: Movie[];
};

export type TVResponse = {
  results: TV[];
};

const API_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${API_URL}/movie/popular?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${API_URL}/movie/upcoming?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};

export const getFamilyMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${API_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=10751`
  );
  return response.data.results;
};

export const getDocumentaries = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${API_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=99`
  );
  return response.data.results;
};

export const getPopularTVs = async (): Promise<TV[]> => {
  const response = await axios.get<TVResponse>(
    `${API_URL}/tv/popular?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};

export const getMovie = async (id: string) => {
  const response = await axios.get<Movie>(
    `${API_URL}/movie/${id}?api_key=${TMDB_API_KEY}`
  );
  return response.data;
};
