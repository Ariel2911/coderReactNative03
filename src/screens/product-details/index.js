import React from 'react';
import { Text, View, Button } from 'react-native';
import { products } from '../../data/products';
import {styles} from './styles' 

const ProductDetailsScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const product = products.find(product => product.id === productId);
  return (
    <View style={styles.container}>
      <View style={styles.image} />
      <View>
        <Text style={styles.description}>{product.description}</Text>
      </View>
      <View style={styles.weightAndPrice}>
        <Text>peso: {product.weight}</Text>
        <Text>precio: {product.price}</Text>
      </View>
      <View style= {styles.buttons}>
        <Button title='Categorias' onPress={() => navigation.navigate('Categories')} />
        <Button title='Volver' onPress={() => navigation.navigate('Products')} />
      </View>
    </View>
  );
};

export default ProductDetailsScreen;