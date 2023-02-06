import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Fonts} from '../../utils/fontSpecs';
import {SvgXml} from 'react-native-svg';
import savings from '../../assets/images/svg/savings.js';
import {Button, TextInput} from 'react-native-paper';
import {Pallet} from '../../utils/colorPallet';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.mainContainer}>
      <View style={styles.image}>
        <SvgXml xml={savings} width="60%" height="60%" />
      </View>
      <Text style={styles.titleText}>Login</Text>
      <ScrollView keyboardDismissMode="on-drag" style={styles.input}>
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          keyboardType="email-address"
          value={email}
          mode="outlined"
          textColor={Pallet.primaryColorDarker}
          placeholderTextColor={Pallet.primaryColorDarker}
          outlineColor={Pallet.primaryColorDarker}
          onChangeText={text => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          mode="outlined"
          keyboardType="default"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          textColor={Pallet.primaryColorDarker}
          placeholderTextColor={Pallet.primaryColorDarker}
          outlineColor={Pallet.primaryColorDarker}
        />
        <Button
          textColor={Pallet.white}
          style={{
            ...styles.input,
            backgroundColor: Pallet.primaryColorDarker,
          }}
          mode="elevated">
          Entrar
        </Button>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    fontFamily: Fonts.SAIRA_EC_BOLD,
    fontSize: 40,
    color: Pallet.primaryColorDarker,
  },
  texts: {
    fontFamily: Fonts.SAIRA_EC_BOLD,
  },
  mainContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: Pallet.white,
  },
  input: {
    marginVertical: 10,
    color: Pallet.primaryColor,
    fontFamily: Fonts.SAIRA_EC_BOLD,
    fontWeight: 'normal',
    tintColor: Pallet.white,
    textShadowColor: Pallet.white,
  },
  image: {alignItems: 'center', flex: 0.7, marginVertical: 40},
});
