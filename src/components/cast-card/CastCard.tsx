import React from 'react';
import {Image, Text, View} from 'react-native';
import {Cast} from '../../../model/creditsDB';

import {castCardStyles} from './CastCardStyles';
import {getMoviePoster} from '../../../utils/movie-poster';

interface CastCardProps {
  actor: Cast;
}

export const CastCard = ({actor}: CastCardProps) => {
  const imageURL = actor.profile_path && getMoviePoster(actor.profile_path);

  return (
    <View style={castCardStyles.container}>
      {imageURL && (
        <Image
          source={{uri: imageURL}}
          style={{height: 50, width: 50, borderRadius: 10}}
        />
      )}
      <View style={castCardStyles.actorDetails}>
        <Text style={castCardStyles.actorName}>{actor.name}</Text>
        <Text style={castCardStyles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  );
};
