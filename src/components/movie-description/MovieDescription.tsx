import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Cast} from '../../../model/creditsDB';
import {MovieDetailsResponse} from '../../../model/movieDB';
import {movieDescriptionStyles} from './MovieDescriptionStyles';
import {CastCard} from '../cast-card/CastCard';

interface MovieDescriptionProps {
  cast: Cast[];
  movieDetails: MovieDetailsResponse;
}

export const MovieDescription = ({
  cast,
  movieDetails,
}: MovieDescriptionProps) => {
  return (
    <View style={movieDescriptionStyles.containter}>
      <View style={movieDescriptionStyles.votesBox}>
        <Icon name="star-outline" size={16} color="gray" />
        <Text> {Math.round(movieDetails.vote_average * 10) / 10}</Text>
        <Text style={movieDescriptionStyles.genres}>
          {' '}
          - {movieDetails.genres.map(g => g.name).join(', ')}
        </Text>
      </View>
      <Text style={movieDescriptionStyles.subtitles}>Plot</Text>
      <Text style={movieDescriptionStyles.plotText}>
        {movieDetails.overview}
      </Text>

      {movieDetails.budget > 0 && (
        <>
          <Text style={movieDescriptionStyles.subtitles}>Budget</Text>
          <Text style={movieDescriptionStyles.budget}>
            {new Intl.NumberFormat('ja-JP', {
              style: 'currency',
              currency: 'USD',
            }).format(movieDetails.budget)}
          </Text>
        </>
      )}

      <View style={{...movieDescriptionStyles.subtitles, marginBottom: 100}}>
        <Text style={movieDescriptionStyles.cast}>Cast</Text>
        <FlatList
          data={cast}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => <CastCard actor={item} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={movieDescriptionStyles.actorsList}
        />
      </View>
    </View>
  );
};
