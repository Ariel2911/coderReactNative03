import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles} from './styles' 

const ProductDetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductDetailsScreen</Text>
      <View>
        <Text style= {styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</Text>
      </View>
      <View style= {styles.buttons}>
        <Button title='Home' onPress={() => navigation.navigate('Categories')} />
        <Button title='Volver' onPress={() => navigation.navigate('Products')} />
      </View>
    </View>
  );
}

export default ProductDetailsScreen;