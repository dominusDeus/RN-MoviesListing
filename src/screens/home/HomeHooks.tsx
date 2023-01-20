import {useEffect, useState, useContext} from 'react';
import {moviesRes, Movie} from '../../../model/movieDB';
import movieDB from '../../api/MovieDBController';
import {getMoviePoster} from '../../../utils/movie-poster';
import ImageColors from 'react-native-image-colors';
import {getPosterColorsRes} from '../../../utils/getPosterColors';
import {GradientContext} from '../../context/GradientContext';

interface HomeStore extends MoviesState {
  isLoading: boolean;
  getPosterColors: (index: number) => void;
}

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useHome = (): HomeStore => {
  const [movies, setMovies] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const {setMainColors} = useContext(GradientContext);
  const [isLoading, setLoading] = useState<boolean>(false);

  const getMovies = async () => {
    setLoading(true);

    const nowPlayingPromise = movieDB.get<moviesRes>('/now_playing');
    const popularPromise = movieDB.get<moviesRes>('/popular');
    const topRatedPromise = movieDB.get<moviesRes>('/top_rated');
    const upcomingPromise = movieDB.get<moviesRes>('/upcoming');

    const [
      resolvedNowPlaying,
      resolvedPopular,
      resolvedTopRated,
      resolvedUpcoming,
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMovies({
      nowPlaying: resolvedNowPlaying.data.results,
      popular: resolvedPopular.data.results,
      topRated: resolvedTopRated.data.results,
      upcoming: resolvedUpcoming.data.results,
    });

    setLoading(false);
  };

  const getPosterColors = async (index: number) => {
    const movie = movies.nowPlaying[index || 0];
    const posterURI = getMoviePoster(movie.poster_path);
    setMainColors(await getPosterColorsRes(posterURI));
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {...movies, isLoading, getPosterColors};
};
