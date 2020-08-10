import styled from 'styled-components/native';
import { shade } from 'polished';

import Icon from 'react-native-vector-icons/Fontisto';

interface TextProps {
  selected?: boolean;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #36213e;
`;

export const ScrollView = styled.ScrollView``;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  height: 72px;
  margin: 2px 0;

  padding: 2px 16px;

  background-color: ${shade(0.4, '#36213E')};
`;

export const Input = styled.TextInput`
  height: 48px;

  padding: 0 16px;

  color: #c0c0c0;
  background-color: ${shade(0.4, '#36213E')};
`;

export const Text = styled.Text<TextProps>`
  margin: 0 24px;

  font-size: 16px;

  color: #c0c0c0;
`;

export const IconView = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32px;

  background-color: #c0c0c0;

  border-radius: 50px;
`;

export const DeleteIcon = styled(Icon)`
  color: #36213e;
`;
