import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Fontisto';

import {
  Container,
  ScrollView,
  Input,
  Item,
  Text,
  IconView,
  DeleteIcon,
} from './styles';

interface ItemProps {
  todo: string;
  selected: boolean;
}

const Main: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [items, setItems] = useState<Array<ItemProps>>([]);
  const [inputValue, setInputValue] = useState('');

  const handleCheckbox = () => {
    setSelected(!selected);
  };

  const handleInput = (e: string) => {
    setInputValue(e);
  };

  const handleRemoveItem = (elementIndex: number) => {
    //remover item
    if (items.length === 1) {
      setItems([]);
    }

    const array = items.filter((e, index) => index !== elementIndex);

    setItems(array);
  };

  const handleArray = () => {
    //adicionar item ao array
    //limpar input
    setItems([
      ...items,
      {
        todo: inputValue,
        selected: selected,
      },
    ]);

    setInputValue('');
  };

  return (
    <Container>
      <ScrollView>
        {items.length < 1 ? (
          <Text>Você ainda não possui tarefas :(. Que tal adicionar uma?</Text>
        ) : (
          <>
            {items.map((item, index) => (
              <Item key={index} onPress={() => handleCheckbox()}>
                <Icon
                  name={!selected ? 'checkbox-passive' : 'checkbox-active'}
                  size={16}
                  color={'#c0c0c0'}
                />
                <Text>{item.todo}</Text>
                <IconView onPress={() => handleRemoveItem(index)}>
                  <DeleteIcon name="minus-a" size={16} />
                </IconView>
              </Item>
            ))}
          </>
        )}
      </ScrollView>
      <Input
        placeholder="O que você tem à fazer?"
        placeholderTextColor="#c0c0c0"
        onSubmitEditing={() => handleArray()}
        onChange={(e) => handleInput(e.nativeEvent.text)}
        value={inputValue}
        autoFocus
      />
    </Container>
  );
};

export default Main;
