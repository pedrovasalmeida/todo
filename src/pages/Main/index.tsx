import React, { useState, useEffect } from 'react';

import Icon from 'react-native-vector-icons/Fontisto';

import {
  Container,
  ScrollView,
  Input,
  Item,
  Text,
  IconView,
  CheckboxIcon,
  DeleteIcon,
} from './styles';
import { Alert } from 'react-native';

interface ItemProps {
  todo: string;
  selected: boolean;
}

const Main: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [items, setItems] = useState<Array<ItemProps>>([]);
  const [inputValue, setInputValue] = useState('');

  const handleCheckbox = (eIndex: number) => {
    const oldArray = items;
    const array = items.filter((e, index) => index === eIndex);
    const [oneItem] = array;

    oneItem.selected ? (oneItem.selected = false) : (oneItem.selected = true);

    oldArray.splice(eIndex, 1);
    oldArray.splice(eIndex, 0, oneItem);

    setItems(oldArray);
    setSelected(!selected);
  };

  const changeArray = (eIndex: number) => {
    const oldArray = items;
    const array = items.filter((e, index) => index === eIndex);
    const [oneItem] = array;

    oneItem.selected ? (oneItem.selected = false) : (oneItem.selected = true);

    oldArray.splice(eIndex, 1);
    oldArray.splice(eIndex, 0, oneItem);

    setItems(oldArray);
  };

  const handleInput = (e: string) => {
    setInputValue(e);
  };

  const handleRemoveItem = (elementIndex: number) => {
    if (items.length === 1) {
      setItems([]);
    }

    /** retorna todos os itens que não tenham o index igual a 'elementIndex' */
    const array = items.filter((e, index) => index !== elementIndex);

    setItems(array);
  };

  const handleArray = (value: string) => {
    if (value.length < 1)
      return Alert.alert('Você precisa inserir alguma coisa x.x');
    setItems([
      ...items,
      {
        todo: inputValue,
        selected: false,
      },
    ]);

    setInputValue('');
  };

  useEffect(() => {}, []);

  return (
    <Container>
      <ScrollView
        data={items}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (
          <Item selected={item.selected} onPress={() => handleCheckbox(index)}>
            <CheckboxIcon
              name={item.selected ? 'checkbox-active' : 'checkbox-passive'}
              size={16}
              color={'#c0c0c0'}
              selected={item.selected}
            />
            <Text selected={item.selected}>{item.todo}</Text>
            <IconView onPress={() => handleRemoveItem(index)}>
              <DeleteIcon name="minus-a" size={16} />
            </IconView>
          </Item>
        )}
      />
      <Input
        placeholder="O que você tem à fazer?"
        placeholderTextColor="#c0c0c0"
        onSubmitEditing={() => handleArray(inputValue)}
        onChange={(e) => handleInput(e.nativeEvent.text)}
        value={inputValue}
        autoFocus
      />
    </Container>
  );
};

export default Main;
