import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {
  Container,
  EmptyContainer,
  ScrollView,
  Input,
  Item,
  Text,
  IconView,
  CheckboxIcon,
  DeleteIcon,
} from './styles';

interface ItemProps {
  todo: string;
  selected: boolean;
}

interface RenderProps {
  item: ItemProps;
  index: number;
}

const Main: React.FC = () => {
  const [selected, setSelected] = useState(false);
  const [items, setItems] = useState<ItemProps[]>([]);

  const [inputValue, setInputValue] = useState('');

  const handleCheckbox = async (eIndex: number) => {
    const oldArray = items;
    const array = oldArray.filter((e, index) => index === eIndex);
    const [oneItem] = array;

    oneItem.selected ? (oneItem.selected = false) : (oneItem.selected = true);

    oldArray.splice(eIndex, 1);
    oldArray.splice(eIndex, 0, oneItem);

    setItems(oldArray);
    setSelected(!selected);

    await AsyncStorage.setItem('@todoapp:list', JSON.stringify(oldArray));
  };

  const handleInput = (e: string) => {
    setInputValue(e);
  };

  const handleRemoveItem = async (elementIndex: number) => {
    if (items.length === 1) {
      setItems([]);
    }

    /** retorna todos os itens que não tenham o index igual a 'elementIndex' */
    const array = items.filter((e, index) => index !== elementIndex);

    await AsyncStorage.setItem('@todoapp:list', JSON.stringify(array));

    return setItems(array);
  };

  const handleArray = async (value: string) => {
    if (value.length < 1)
      return Alert.alert('Você precisa inserir alguma coisa x.x');

    setItems((prev) => [
      ...prev,
      {
        todo: inputValue,
        selected: false,
      },
    ]);
    // setItems([
    //   ...items,
    //   {
    //     todo: inputValue,
    //     selected: false,
    //   },
    // ]);

    setInputValue('');
    return await AsyncStorage.setItem('@todoapp:list', JSON.stringify(items));
  };

  useEffect(() => {
    async function readDataFromStorage() {
      const data = await AsyncStorage.getItem('@todoapp:list');

      if (data !== null) return setItems(JSON.parse(data));

      return setItems([]);
    }

    readDataFromStorage();
  }, []);

  useEffect(() => {
    async function saveToStorage() {
      if (items.length < 1) return;

      await AsyncStorage.setItem('@todoapp:list', JSON.stringify(items));
    }

    saveToStorage();
  }, [items]);

  return (
    <Container>
      {items.length < 1 ? (
        <EmptyContainer>
          <Text style={{ color: '#c0c0c0', fontSize: 20 }}>
            Você ainda não possui tarefas. :(
          </Text>
        </EmptyContainer>
      ) : (
        <ScrollView
          data={items}
          keyExtractor={(item, index) => String(index)}
          renderItem={({ item, index }: RenderProps) => (
            <Item
              selected={item.selected}
              onPress={() => handleCheckbox(index)}
            >
              <CheckboxIcon
                name={item.selected ? 'checkbox-active' : 'checkbox-passive'}
                size={16}
                color={'#c0c0c0'}
                selected={item.selected}
              />
              <Text selected={item.selected}>{item.todo}</Text>
              <IconView
                onPress={() => handleRemoveItem(index)}
                selected={item.selected}
              >
                <DeleteIcon name="minus-a" size={16} />
              </IconView>
            </Item>
          )}
        />
      )}

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
