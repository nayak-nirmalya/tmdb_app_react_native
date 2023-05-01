import axios from 'axios';

import { Movie } from '../types';
import { TMDB_API_KEY } from '@env';

export type MoviesResponse = {
  results: Movie[];
};

const API_URL = 'https://api.themoviedb.org/3';

export const getPopularMovies = async (): Promise<Movie[]> => {
  const response = await axios.get<MoviesResponse>(
    `${API_URL}/movie/popular?api_key=${TMDB_API_KEY}`
  );
  return response.data.results;
};
