import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
  },  
  description: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    margin: 24,
  },
  weightAndPrice: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttons: {
    flex: 1,
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 10, 
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  image: {
    width: '80%',
    height: '50%',
    marginTop: 20,
    backgroundColor: 'blue',
    color: 'white',
  },
});