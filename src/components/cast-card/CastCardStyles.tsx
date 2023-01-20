import {StyleSheet} from 'react-native';

export const castCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    shadowColor: '#000',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 10,
    paddingRight: 15,
    marginLeft: 18,
  },
  actorDetails: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  actorCharacter: {
    fontSize: 16,
    opacity: 0.7,
  },
});
