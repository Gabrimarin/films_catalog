import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image, Container} from './styles';
const sampleImage = require('../../assets/image_sample.jpg');
const MovieListItem = ({id, imgSrc, onPress}) => {
  return (
    <Container onPress={onPress}>
      <Image source={{uri: imgSrc}} resizeMode={FastImage.resizeMode.cover} />
    </Container>
  );
};

export default MovieListItem;
