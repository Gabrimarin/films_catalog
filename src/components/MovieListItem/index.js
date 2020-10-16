import React from 'react';

import {Image, Container} from './styles';
const sampleImage = require('../../assets/image_sample.jpg');
const MovieListItem = ({data}) => {
  return (
    <Container>
      <Image source={sampleImage} />
    </Container>
  );
};

export default MovieListItem;
