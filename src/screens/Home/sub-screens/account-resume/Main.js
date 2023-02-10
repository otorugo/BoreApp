import {View, Text} from 'react-native';
import {AccountBalance, NavBar, Transfers} from './components';

export function Main() {
  return (
    <View>
      <NavBar />
      <AccountBalance />
      <Transfers />
    </View>
  );
}
