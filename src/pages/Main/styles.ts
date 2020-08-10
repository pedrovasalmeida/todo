import styled from 'styled-components/native';
import { shade } from 'polished';
import { FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/Fontisto';

interface TextProps {
  selected?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #36213e;
`;

export const ScrollView = styled(FlatList)``;

export const Item = styled.TouchableOpacity<TextProps>`
  position: relative;

  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  height: 72px;
  margin: 2px 0;

  padding: 2px 16px;

  background-color: ${(props) =>
    props.selected ? `${shade(0.2, '#36213E')}` : `${shade(0.4, '#36213E')}`};
`;

export const Input = styled.TextInput`
  height: 48px;

  padding: 0 16px;

  color: #c0c0c0;
  background-color: ${shade(0.4, '#36213E')};
`;

export const Text = styled.Text<TextProps>`
  margin: 0 24px;

  padding: 0 24px;

  font-size: 16px;

  text-decoration: ${(props) => (props.selected ? 'line-through' : 'none')};
  color: ${(props) =>
    props.selected ? 'rgba(192, 192, 192, 0.3)' : '#c0c0c0'};
`;

export const IconView = styled.TouchableOpacity<TextProps>`
  position: absolute;
  top: 30%;
  right: 5%;

  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: ${(props) =>
    props.selected ? 'rgba(140, 0, 0, 0.5)' : 'rgba(140, 0, 0, 1)'};
  border-radius: 50px;
`;

export const CheckboxIcon = styled(Icon)<TextProps>`
  position: absolute;
  top: 40%;
  left: 5%;

  color: ${(props) => (props.selected ? 'rgba(19, 195, 0, 0.5)' : '#c0c0c0')};
`;

export const DeleteIcon = styled(Icon)`
  color: #c0c0c0;
`;
