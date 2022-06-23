import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles} from './styles' 

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CategoriesScreen</Text>
      <View style= {styles.buttons}>
        <Button title='Productos' onPress={() => navigation.navigate('Products')} />
      </View>
    </View>
  );
}

export default CategoriesScreen;