import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';
import {MoviePosterWidth} from '../../constants';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: ${MoviePosterWidth * (3 / 2) + 25}px;
  width: ${MoviePosterWidth}px;
  elevation: 10;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: ${(props) =>
    props.theme.theme.PRIMARY_TEXT_BACKGROUND_COLOR};
`;

export const Image = styled(FastImage)`
  width: 100%;
  align-self: center;
  margin: auto;
  flex: 1;
  background-color: ${(props) =>
    props.theme.theme.SECONDARY_TEXT_BACKGROUND_COLOR};
`;

export const DetailsContainer = styled.View`
  padding: 2px;
`;

export const DetailText = styled.Text`
  color: ${(props) => props.theme.theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
  font-size: ${(props) => 17 + props.theme.delta}px;
`;
