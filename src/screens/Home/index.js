import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'react-native-paper';
import {increment} from '../../store/counterSlice';

export default function Home() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <View>
      <Text>value : {count}</Text>
      <Button mode="elevated" onPress={() => dispatch(increment())}>
        Increase
      </Button>
    </View>
  );
}
