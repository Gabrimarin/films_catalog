import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
Icon.loadFont();
export const Container = styled.ScrollView``;

export const Poster = styled.ImageBackground`
  height: 400px;
`;

export const StickyHeader = styled.View`
  background-color: ${(props) => props.theme.theme.SECONDARY_BACKGROUND_COLOR};
  height: ${(props) => props.height}px;
  width: 100%;
  align-items: center;
`;

export const ViewPosterButton = styled(Icon).attrs((props) => {
  return {
    name: 'remove-red-eye',
    size: 35 + props.theme.delta,
    color: 'white',
  };
})`
  align-self: flex-end;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${(props) => 30 + props.theme.delta}px;
  font-weight: bold;
`;

export const SubText = styled.Text`
  color: white;
  font-size: ${(props) => 20 + props.theme.delta}px;
`;

export const DetailsContainer = styled.View`
  padding: 5px;
  background-color: ${(props) => props.theme.theme.PRIMARY_BACKGROUND_COLOR};
`;

export const FormRow = styled.View.attrs({
  accessible: true,
})``;

export const Label = styled.Text`
  color: ${(props) => props.theme.theme.PRIMARY_TEXT_COLOR};
  font-weight: bold;
  font-size: ${(props) => 17 + props.theme.delta}px;
`;

export const SinopseView = styled.View`
  height: ${({expanded}) => (expanded ? 'auto' : '50px')};
`;

export const FormText = styled.Text`
  font-size: ${(props) => 20 + props.theme.delta}px;
  margin-left: 10px;
  color: ${(props) => props.theme.theme.TERTIARY_TEXT_COLOR};
`;

export const TagLine = styled.Text`
  font-size: ${(props) => 20 + props.theme.delta}px;
  color: ${(props) => props.theme.theme.PRIMARY_TEXT_COLOR};
  margin-top: 30px;
  text-align: center;
  font-style: italic;
`;

export const ViewMoreIcon = styled(Icon)`
  align-self: center;
`;
