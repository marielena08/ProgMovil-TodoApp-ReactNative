import React, { useState } from 'react';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './AppNavigator';
import Login from './src/auth/Login';
import SignUp from './src/auth/SignUp';
import ForgotPass from './src/auth/ForgotPassword';
import ChangePass from './src/auth/ChangePass';
import Homepage from '/src/auth/Homepage';

export default function App() {

    return (
    <View style={styles.container}>
      {/* <AppNavigator/> */}
      {/* <Login /> */}
      {/* <ForgotPass /> */}
      {/* <ChangePass /> */}
      {/* <SignUp /> */}
      <Homepage />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A4E5C2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

