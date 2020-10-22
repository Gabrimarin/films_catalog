import styled from 'styled-components/native';

export const Image = styled.ImageBackground`
  height: 160px;
  width: 100%;
  margin-top: 10px;
  background-color: ${(props) => props.theme.theme.SECONDARY_TEXT_COLOR + '11'};
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
  font-size: ${props => 35 + props.theme.delta}px;
  margin-top: auto;
  font-weight: bold;
`;
