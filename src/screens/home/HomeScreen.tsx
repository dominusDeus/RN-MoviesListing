/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  ActivityIndicator,
  Dimensions,
  Text,
  ScrollView,
} from 'react-native';
import {MovieCard} from '../../components/movie-card/MovieCard';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Carousel from 'react-native-reanimated-carousel';

import {useHome} from './HomeHooks';
import {HorizontalSlider} from '../../components/horizontal-slider/HorizontalSlider';
import {GradientBackground} from '../../components/gradient/GradientBackground';

export const HomeScreen = () => {
  const {popular, upcoming, topRated, nowPlaying, isLoading, getPosterColors} =
    useHome();
  const {width: windowWidth} = Dimensions.get('screen');

  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color="purple" size={80} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{marginTop: top + 20}}>
          <View style={{height: 440}}>
            <Carousel
              // Just one of the many styles from the Carousel module
              mode="parallax"
              // This style prop regards to the carousel container not to the item itself
              style={{
                width: windowWidth,
                justifyContent: 'center',
              }}
              // Paging in false allows to do superfast scroll
              pagingEnabled={false}
              // and that superfast scroll stops on multiples of windowSize
              windowSize={2}
              // the snap helps to stop exactly in 1 item, no in the middle of two or so
              snapEnabled
              // This props are for the item in the middle
              width={300}
              // height={420}
              modeConfig={{
                // How the "main" item will look
                parallaxScrollingScale: 0.9,
                // How separate the adjacent items will be
                parallaxScrollingOffset: 40,
                // How big the adjacent items will look compared to the "main" item
                parallaxAdjacentItemScale: 0.75,
              }}
              data={nowPlaying}
              renderItem={({item}) => <MovieCard movie={item} />}
              onSnapToItem={getPosterColors}
            />
          </View>

          {/* popular movies */}
          <HorizontalSlider movies={topRated} title={'Top Rated'} />
          <HorizontalSlider movies={popular} title={'Popular'} />
          <HorizontalSlider movies={upcoming} title={'upcoming'} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};
