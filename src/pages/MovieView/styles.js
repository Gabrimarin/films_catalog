import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import {colors} from '../../constants';
Icon.loadFont();
export const Container = styled.ScrollView``;

export const Poster = styled.ImageBackground`
  height: 400px;
`;

export const StickyHeader = styled.View`
  background-color: ${colors.dark};
  height: ${(props) => props.height}px;
  width: 100%;
`;

export const ViewPosterButton = styled(Icon)`
  align-self: flex-end;
`;

export const Title = styled.Text`
  color: white;
  font-size: 30px;
  font-weight: bold;
`;

export const SubText = styled.Text`
  color: white;
  font-size: 20px;
`;

export const DetailsContainer = styled.View`
  padding: 5px;
`;

export const FormRow = styled.View``;

export const Label = styled.Text`
  color: ${colors.medium};
  font-weight: bold;
  font-size: 17px;
`;

export const SinopseView = styled.View`
  height: ${({expanded}) => (expanded ? 'auto' : '100px')};
`;

export const FormText = styled.Text`
  font-size: 20px;
  margin-left: 10px;
  color: ${colors.dark};
`;

export const TagLine = styled.Text`
  font-size: 20px;
  color: ${colors.medium};
  margin-top: 30px;
  text-align: center;
  font-style: italic;
`;


export const ViewMoreIcon = styled(Icon)`
  align-self: center;
`;
