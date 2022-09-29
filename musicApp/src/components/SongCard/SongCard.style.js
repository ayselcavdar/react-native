import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  inner_container: {
    justifyContent: 'center',
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  conten_container: {
    flexDirection: 'row',
  },
  soldout_container: {
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'red',
  },
  soldout_title: {
    color: 'red',
    fontSize: 12,
  },
});
