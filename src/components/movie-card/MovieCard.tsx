import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';

import {Movie} from '../../../model/movieDB';
import {moviesImageURL} from '../../constants';
import {cardStyles} from './MovieCard.styles';
import {getMoviePoster} from '../../../utils/movie-poster';

interface MovieCardProps {
  movie: Movie;
  height?: number;
  width?: number;
}

export const MovieCard = ({
  movie,
  width = 300,
  height = 420,
}: MovieCardProps) => {
  if (!movie) {
    return null;
  }
  const navigation = useNavigation<any>();
  const moviePosterURL = getMoviePoster(movie.poster_path);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Details', movie)}
      style={{
        ...cardStyles.container,
        width,
        height,
      }}>
      <View style={cardStyles.imageContainer}>
        <Image source={{uri: moviePosterURL}} style={cardStyles.image} />
      </View>
    </TouchableOpacity>
  );
};
