import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Movie} from '../../../model/movieDB';
import {MovieCard} from '../movie-card/MovieCard';

interface HorizontalSliderProps {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({title, movies}: HorizontalSliderProps) => {
  if (!title) {
    return null;
  }
  return (
    <View style={{height: 260}}>
      <Text style={{fontSize: 30, fontWeight: 'bold'}}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MovieCard movie={item} height={200} width={140} />
        )}
        keyExtractor={item => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};
