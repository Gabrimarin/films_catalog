import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {MoviePosterWidth} from '../../constants';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 230px;
  width: ${MoviePosterWidth}px;
  elevation: 5;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled(FastImage)`
  width: 90%;
  align-self: center;
  margin: auto;
  flex: 1;
  background-color: #dde;
`;
