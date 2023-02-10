import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {Card, Button} from 'react-native-paper';
import {Pallet} from '../../../../../utils/colorPallet';
import {Fonts} from '../../../../../utils/fontSpecs';

export default function AccountBalance() {
  return (
    <Card style={styles.container}>
      <View style={styles.money}>
        <Text style={styles.moneyText}>$ 12.345</Text>
        <Text style={styles.moneyDecimal}>,55</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button mode="outlined" labelStyle={styles.buttonMoney} compact={true}>
          Add Money
        </Button>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>Contacts</Text>
      </ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: Pallet.white,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    elevation: 30,
    padding: 15,
    justifyContent: 'space-around',
    verticalAlign: 'top',
    textAlign: 'center',
  },
  money: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  moneyText: {
    fontFamily: Fonts.SAIRA_EC_EXTRABOLD,
    fontSize: 50,
    color: Pallet.accentColor,
  },
  moneyDecimal: {
    color: Pallet.accentColor,
    fontFamily: Fonts.SAIRA_EC_BOLD,
    fontSize: 15,
    paddingVertical: 15,
  },
  buttonMoney: {
    fontFamily: Fonts.SAIRA_EC_SEMIBOLD,
    fontSize: 14,
    marginHorizontal: 20,
  },
  buttonContainer: {
    alignSelf: 'center',
  },
  scrollView: {
    marginTop: 50,
  },
});
