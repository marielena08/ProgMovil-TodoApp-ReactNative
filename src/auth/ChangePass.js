import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../imagenes/Logo1.png';

const ChangePass = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  
  useEffect(() => {
    if (password !== '' && newPassword !== '' && confirmPassword !== '') {
      if (newPassword.toLowerCase() === confirmPassword.toLowerCase()) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    } else {
      setIsFormValid(false);
    }
  }, [password, newPassword, confirmPassword]);

  const handleReset = () => {
    if (isFormValid) {
      setPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.title}>CHANGE PASS</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input]}
          placeholder="PASSWORD"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, showWarning && styles.inputError]}
          placeholder="NEW PASSWORD"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, showWarning && styles.inputError]}
          placeholder="CONFIRM PASSWORD"
          secureTextEntry={true}
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      {showWarning && (
        <Text style={styles.warningText}>
          Complete todos los campos y asegúrese de que las contraseñas coincidan.
        </Text>
      )}
      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleReset}
        disabled={!isFormValid}>
        <Text style={styles.buttonText}>RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '60%',
    maxWidth: 400,
    height: '60%',
    maxHeight: 400,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FC19D',
    flexDirection:'column',
    padding: 10,
    borderRadius: 10,
    marginVertical: '5%',
    marginHorizontal: '10%',
  },
  logoContainer: {
    marginBottom: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputLabel: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    flex: 2,
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
  inputError: {
    borderColor: 'red',
  },
  warningText: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: 'gray', 
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 20,
    color: 'black',
  },
});

export default ChangePass;
