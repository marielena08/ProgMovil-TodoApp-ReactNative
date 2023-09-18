import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Login from './src/auth/Login';
import SignUp from './src/auth/SignUp';

export default function App() {

    return (
    <View style={styles.container}>
      <Login />
      {/* <Signup /> */}
      <StatusBar style="auto" />
    </View>
  );

  // const [currentScreen, setCurrentScreen] = useState('Login','SignUp');
  // // const [currentScreen, setCurrentScreen] = useState('SignUp');

  // if (currentScreen === 'Login') {
  //   return <Login goToSignUp={() => setCurrentScreen('SignUp')} />;
  // }
  //  else if (currentScreen === 'SignUp') {
  //   return <SignUp goToLogin={() => setCurrentScreen('Login')} />;
  // }

  // return null;

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E5C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
