import {StyleSheet} from 'react-native';

export const detailsStyles = StyleSheet.create({
  imageContainer: {
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {flex: 1},
  descriptionBlock: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  caption: {fontSize: 16, opacity: 0.8},
  title: {fontSize: 20, fontWeight: 'bold'},
  backButton: {
    position: 'absolute',
    left: 5,
  },
});
