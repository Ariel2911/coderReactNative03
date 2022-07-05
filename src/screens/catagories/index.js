import React from 'react';
import { View, FlatList } from 'react-native';
// import { categories } from '../../data/categories';
import { CategoryItem } from '../../componets';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategory } from '../../store/actions/category.action';
import {styles} from './styles'; 

const CategoriesScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const categories = useSelector(state => state.category.categories);
  const categorySelected = useSelector(state => state.category.selected);
  const categoryProducts = useSelector(state => state.product.filteredProducts)
  // console.log(categorySelected)

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate('Products', {
      // categoryId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({item}) => (
    <CategoryItem item={item} onSelected={onSelected} />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;