import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
  },  
  title: {
    fontFamily: 'Lato-Bold',
    fontSize: 20,
    marginVertical: 20,
  },
  text: {
    fontFamily: 'Lato-Regular',
    margin: 20,
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


  }
});