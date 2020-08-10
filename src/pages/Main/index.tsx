import React, { useState } from 'react';
import {
  Container,
  ScrollView,
  Input,
  Item,
  Text,
  // BlackCheckbox,
  // SelectedCheckbox,
} from './styles';

const Main: React.FC = () => {
  const [selected, setSelected] = useState(false);

  const items = [0, 1, 2, 3];

  return (
    <Container>
      <ScrollView>
        {items.map((item) => (
          <Item key={item}>
            <Text>Alguma coisa para fazer</Text>
          </Item>
        ))}
      </ScrollView>
      <Input
        placeholder="O que você tem à fazer?"
        placeholderTextColor="#c0c0c0"
      />
    </Container>
  );
};

export default Main;
