import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {CategoryListItem} from '../index';

const CategoryList = ({data}) => {
  const navigation = useNavigation();

  const renderItem = ({item}) => (
    <CategoryListItem
      imageSrc={item.posterPath}
      key={item.id}
      title={item.name}
      navigation={navigation}
      onPress={() =>
        navigation.navigate('MovieList', {
          genreId: item.id,
          origin: 'category',
          title: item.name,
        })
      }
    />
  );

  return (
    <FlatList
      style={{padding: 5}}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default CategoryList;
