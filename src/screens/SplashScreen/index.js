import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Pallet} from '../../utils/colorPallet.js';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Bore <Text style={styles.author}>by Torugo</Text>
      </Text>
      <Text style={styles.message}>Borrow and not repay</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Pallet.grayBackgroundLighter,
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    color: Pallet.primaryColorDarker,
  },
  author: {
    fontSize: 10,
    color: Pallet.black,
  },
  message: {
    marginVertical: 10,
    fontSize: 13,
    color: Pallet.black,
  },
});
