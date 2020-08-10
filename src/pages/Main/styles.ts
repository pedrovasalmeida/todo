import styled from 'styled-components/native';
import { shade } from 'polished';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #36213e;
`;

export const ScrollView = styled.ScrollView``;

export const Item = styled.View`
  justify-content: center;
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

export const Text = styled.Text`
  color: #c0c0c0;
`;

// export const BlackCheckbox = styled(RiCheckboxMultipleBlankLine)``;

// export const SelectedCheckbox = styled(RiCheckboxMultipleLine)``;
