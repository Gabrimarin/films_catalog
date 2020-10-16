import styled from 'styled-components/native';
import {colors} from '../../constants';
import FastImage from 'react-native-fast-image';

export const Image = styled.ImageBackground`
  height: 160px;
  width: 100%;
  margin-top: 10px;
  background-color: ${colors.medium + '11'};
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  height: 100%;
  padding-horizontal: 12px;
  padding-bottom: 5px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 30px;
  margin-top: auto;
  font-weight: bold;
`;
