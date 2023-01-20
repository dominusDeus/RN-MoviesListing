import React from 'react';
import {Animated, View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useContext, useEffect} from 'react';
import {GradientContext} from '../../context/GradientContext';
import {UseFade} from '../fade/FadeHook';

interface GradientBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: GradientBackgroundProps) => {
  const {colors, prevColors, setPrevMainColors} = useContext(GradientContext);
  const {opacity, fadeIn, fadeOut} = UseFade();
  if (
    !prevColors.primary ||
    !prevColors.secondary ||
    !colors.primary ||
    !colors.secondary
  ) {
    return null;
  }

  useEffect(() => {
    fadeIn(() => {
      setPrevMainColors(colors);
      fadeOut(0);
    });
  }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[prevColors.primary, prevColors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />

      <Animated.View
        style={{
          ...StyleSheet.absoluteFillObject,
          opacity,
        }}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View>
      {children}
    </View>
  );
};
