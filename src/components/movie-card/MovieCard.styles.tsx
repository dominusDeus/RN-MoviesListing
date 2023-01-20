import {StyleSheet} from 'react-native';

export const cardStyles = StyleSheet.create({
  container: {marginHorizontal: 2, paddingBottom: 20, paddingHorizontal: 7},
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    backgroundColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
});
