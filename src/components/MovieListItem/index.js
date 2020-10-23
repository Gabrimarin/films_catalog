import React from 'react';
import {TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useDispatch} from 'react-redux';
import {addMovie, deleteMovie} from '../../store/actions';

Icon.loadFont();

import {Image, Container, DetailText, DetailsContainer} from './styles';
const MovieListItem = ({
  id,
  imgSrc,
  onPress,
  year,
  rate,
  title,
  isFavourite,
}) => {
  const dispatch = useDispatch();
  return (
    <Container
      onPress={onPress}
      accessibilityLabel={`${title}, released on ${year}`}
      accessibilityHint="tap to movie details">
      <Image source={{uri: imgSrc}} resizeMode={FastImage.resizeMode.cover}>
        <TouchableOpacity
          style={{ marginLeft: 'auto'}}
          onPress={() =>
            !isFavourite ? dispatch(addMovie(id)) : dispatch(deleteMovie(id))
          }>
          <Icon name="star" size={30} color={isFavourite ? 'yellow' : 'grey'} />
        </TouchableOpacity>
      </Image>
      <DetailsContainer>
        <DetailText>{year}</DetailText>
      </DetailsContainer>
    </Container>
  );
};

export default MovieListItem;
