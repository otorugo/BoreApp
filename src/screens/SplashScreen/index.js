import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Pallet} from '../../utils/colorPallet.js';
import {Fonts} from '../../utils/fontSpecs.js';
import {Screen} from '../../utils/screenNames';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace(Screen.LOGIN_PAGE);
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
    fontFamily: Fonts.SAIRA_EC_SEMIBOLD,
  },
  author: {
    fontSize: 10,
    color: Pallet.black,
    fontFamily: Fonts.SAIRA_EC_LIGHT,
  },
  message: {
    marginVertical: 10,
    fontSize: 13,
    color: Pallet.black,
    fontFamily: Fonts.SAIRA_EC_THIN,
  },
});
