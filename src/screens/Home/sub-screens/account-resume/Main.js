import {View, StyleSheet} from 'react-native';
import {AccountBalance, NavBar, Transfers} from './components';
import React from 'react';
import {Pallet} from '../../../../utils/colorPallet';

export function Main() {
  return (
    <View style={styles.container}>
      <NavBar />
      <AccountBalance />
      <Transfers />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Pallet.grayBackgroundDarker,
  },
});
