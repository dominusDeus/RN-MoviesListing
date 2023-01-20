import React from 'react';
import {
  View,
  Image,
  ScrollView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../../navigation/NavigationController';
import {useDetails} from './DetailsHooks';
import {detailsStyles} from './DetailsStyles';
import {MovieDescription} from '../../components/movie-description/MovieDescription';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface DetailsScreenProps
  extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route, navigation}: DetailsScreenProps) => {
  const {top} = useSafeAreaInsets();
  const movie = route.params;
  if (!movie) {
    return null;
  }

  const {moviePosterURL, screenHeight, movieDetails, cast, isLoading} =
    useDetails({movie});
  if (!moviePosterURL) {
    return null;
  }

  return (
    <ScrollView>
      <View
        style={{
          ...detailsStyles.imageContainer,
          height: screenHeight * 0.7,
        }}>
        <View style={detailsStyles.imageBorder}>
          <Image
            source={{uri: moviePosterURL}}
            style={detailsStyles.posterImage}
          />
        </View>
      </View>
      <View style={detailsStyles.descriptionBlock}>
        <Text style={detailsStyles.caption}>{movie.original_title}</Text>
        <Text style={detailsStyles.title}>{movie.title}</Text>
      </View>

      <View>
        {isLoading ? (
          <ActivityIndicator size={30} color="gray" />
        ) : (
          <MovieDescription movieDetails={movieDetails!} cast={cast!} />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigation.pop()}
        style={{...detailsStyles.backButton, top: top + 5}}>
        <Icon name="arrow-back-outline" size={40} color="white" />
      </TouchableOpacity>
    </ScrollView>
  );
};
