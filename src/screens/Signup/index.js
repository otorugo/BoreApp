import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ScrollView, TextComponent} from 'react-native';
import {Fonts} from '../../utils/fontSpecs';
import {Screen} from '../../utils/screenNames';
import {SvgXml} from 'react-native-svg';
import savings from '../../assets/images/svg/savings.js';
import {Button, TextInput} from 'react-native-paper';
import {Pallet} from '../../utils/colorPallet';
import {useDispatch, useSelector} from 'react-redux';
import {changeEmail, changePassword, loginUser} from '../../store/authSlice';

export default function Signup({navigation}) {
  const {email, password} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    email;
  }, [email]);

  return (
    <View style={styles.mainContainer}>
      <ScrollView
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.scrollView}>
        <View style={styles.image}>
          <SvgXml xml={savings} height="120" />
        </View>
        <Text style={styles.titleText}>SIGN UP</Text>
        <TextInput
          style={styles.input}
          placeholder={'Nome'}
          keyboardType="default"
          mode="outlined"
          maxLength={40}
          // value={email}
          // onChangeText={text => dispatch(changeEmail({text}))}
          textColor={Pallet.black}
          placeholderTextColor={Pallet.gray}
          outlineColor={Pallet.gray}
          activeOutlineColor={Pallet.primaryColorDarker}
        />
        <TextInput
          style={styles.input}
          placeholder={'Email'}
          keyboardType="email-address"
          mode="outlined"
          maxLength={40}
          value={email}
          onChangeText={text => dispatch(changeEmail({text}))}
          textColor={Pallet.black}
          placeholderTextColor={Pallet.gray}
          outlineColor={Pallet.gray}
          activeOutlineColor={Pallet.primaryColorDarker}
        />
        <TextInput
          style={styles.input}
          placeholder={'Password'}
          mode="outlined"
          keyboardType="default"
          secureTextEntry={true}
          maxLength={40}
          value={password}
          onChangeText={text => dispatch(changePassword({text}))}
          textColor={Pallet.black}
          placeholderTextColor={Pallet.gray}
          outlineColor={Pallet.gray}
          activeOutlineColor={Pallet.primaryColorDarker}
        />
        <Button
          textColor={Pallet.white}
          onPress={() => {
            dispatch(loginUser({email, password}));
          }}
          style={{
            ...styles.input,
            backgroundColor: Pallet.primaryColorDarker,
          }}
          mode="elevated">
          Cadastrar
        </Button>
        <Button onPress={() => navigation.replace(Screen.LOGIN_PAGE)}>
          Já tem conta? Entra ai!
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
    paddingHorizontal: 37,
    backgroundColor: Pallet.white,
  },
  input: {
    marginVertical: 13,
    fontFamily: Fonts.SAIRA_EC_EXTRABOLD,
    fontWeight: '700',
  },
  image: {alignItems: 'center', marginVertical: 10},
  scrollView: {
    flex: 1,
    justifyContent: 'center',
  },
});
