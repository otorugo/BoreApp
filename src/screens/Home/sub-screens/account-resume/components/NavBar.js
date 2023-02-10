import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Pallet} from '../../../../../utils/colorPallet';
import {SvgXml} from 'react-native-svg';
import maleProfilePic from '../../../../../assets/images/svg/maleProfilePic';

export default function NavBar() {
  return (
    <View style={styles.container}>
      <View>
        <SvgXml xml={maleProfilePic} height={50} width={50} />
      </View>
      <Text>Options</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    paddingHorizontal: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Pallet.white,
    flexDirection: 'row',
  },
});
