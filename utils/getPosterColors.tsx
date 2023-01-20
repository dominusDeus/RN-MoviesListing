import React from 'react';
import {View} from 'react-native';
import ImageColors from 'react-native-image-colors';
import {ImageColors as ImageColorsType} from '../src/context/GradientContext';

export const getPosterColorsRes = async (
  uri: string,
): Promise<ImageColorsType> => {
  const result = await ImageColors.getColors(uri, {
    cache: true,
  });

  let primary;
  let secondary;

  if (result.platform === 'android') {
    primary = result.dominant;
    secondary = result.average;
  } else if (result.platform === 'ios') {
    primary = result.primary;
    secondary = result.secondary;
  }

  return {primary, secondary};
};
