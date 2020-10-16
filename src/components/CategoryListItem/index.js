import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../constants';

import {Button, Title, Image} from './styles';
const CategoryListItem = ({title, imageSrc, onPress}) => {
  return (
    <Image source={{uri: imageSrc}}>
      <LinearGradient colors={[colors.dark + '00', colors.dark + 'fa']}>
        <Button onPress={onPress}>
          <Title>{title}</Title>
        </Button>
      </LinearGradient>
    </Image>
  );
};

export default CategoryListItem;
