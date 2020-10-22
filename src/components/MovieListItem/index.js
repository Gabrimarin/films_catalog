import React from 'react';
import FastImage from 'react-native-fast-image';
import {Image, Container, DetailText, DetailsContainer} from './styles';
const MovieListItem = ({id, imgSrc, onPress, year, rate, title}) => {
  return (
    <Container
      onPress={onPress}
      accessibilityLabel={`${title}, released on ${year}`}
      accessibilityHint="tap to movie details">
      <Image source={{uri: imgSrc}} resizeMode={FastImage.resizeMode.cover} />
      <DetailsContainer>
        <DetailText>{year}</DetailText>
      </DetailsContainer>
    </Container>
  );
};

export default MovieListItem;
