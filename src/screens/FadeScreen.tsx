import React from 'react';
import {Animated, Button, View} from 'react-native';
import {UseFade} from '../components/fade/FadeHook';

export const FadeScreen = () => {
  const {fadeIn, fadeOut, opacity} = UseFade();
  console.log('from screen: ', opacity);
  console.log('from screen:', fadeIn);
  console.log('from screen:', fadeOut);

  return (
    <View
      style={{
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderWidth: 10,
          borderColor: 'white',
          opacity,
        }}></Animated.View>

      <Button title="Fade In" onPress={() => fadeIn()} />
      <Button title="Fade Out" onPress={() => fadeOut()} />
    </View>
  );
};
