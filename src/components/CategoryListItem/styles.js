import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import {colors} from '../../constants';

export const Image = styled.ImageBackground`
  height: 160px;
  width: 100%;
  margin: auto;
  margin-top: 10px;
  background-color: ${colors.light}
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
