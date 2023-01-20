import {StyleSheet} from 'react-native';

export const movieDescriptionStyles = StyleSheet.create({
  containter: {
    marginHorizontal: 20,
  },
  votesBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genres: {
    fontSize: 12,
  },
  subtitles: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
  },
  plotText: {
    fontSize: 16,
  },
  budget: {
    fontSize: 18,
  },
  cast: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  actorsList: {
    marginTop: 10,
    height: 70,
  },
});
