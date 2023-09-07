import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ModalPortal } from 'react-native-modals';
import { Provider } from 'react-redux';
import StackNavigator from './nav/StackNavigator';
import store from './redux/store';
import { UserContext } from './utils/UserContext';

export default function App() {
  return (
    <>
      <Provider store={store}>
        <UserContext>
          <StackNavigator />
          <ModalPortal />
        </UserContext>
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
 