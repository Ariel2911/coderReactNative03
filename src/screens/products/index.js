import React from 'react';
import { Text, View, Button } from 'react-native';
import {styles} from './styles' 

const ProductsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ProductsScreen</Text>
      <Text style={styles.image}>Imagen del producto</Text>
      <Text style={styles.text}>Precio del producto</Text>
      <View style={styles.buttons}>
        <Button title=' detalles productos' onPress={() => navigation.navigate('ProductDetails')} />

      </View>
    </View>
  );
}

export default ProductsScreen;