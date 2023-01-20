import React from 'react';
import {getMoviePoster} from '../../../utils/movie-poster';
import {Movie, MovieDetailsResponse} from '../../../model/movieDB';
import {Dimensions} from 'react-native';
import movieDB from '../../api/MovieDBController';
import {useEffect, useState} from 'react';
import {Cast, CastResopnse} from '../../../model/creditsDB';

interface useDetailsStore {
  moviePosterURL: string;
  screenHeight: number;
  movieDetails?: MovieDetailsResponse;
  isLoading: boolean;
  cast?: Cast[];
}

interface useDetailsProps {
  movie: Movie;
}

export const useDetails = ({movie}: useDetailsProps): useDetailsStore => {
  const [movieDetailsState, setMovieDetailsState] = useState<useDetailsStore>({
    moviePosterURL: '',
    screenHeight: 0,
    isLoading: true,
  });

  const {height: screenHeight} = Dimensions.get('screen');
  const moviePosterURL = getMoviePoster(movie.poster_path);

  const getMovieDetails = async () => {
    const detailsRes = movieDB.get<MovieDetailsResponse>(`/${movie.id}`);
    const castRes = movieDB.get<CastResopnse>(`/${movie.id}/credits`);

    const [resolvedDetails, resolvedCast] = await Promise.all([
      detailsRes,
      castRes,
    ]);

    setMovieDetailsState(v => ({
      moviePosterURL,
      screenHeight,
      movieDetails: resolvedDetails.data,
      cast: resolvedCast.data.cast,
      isLoading: false,
    }));
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return {
    ...movieDetailsState,
  };
};
