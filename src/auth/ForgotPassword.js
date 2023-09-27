import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../imagenes/Logo1.png';

function ForgotPass() {

  const [email, setEmail] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validarEmailInput = (email) => {
    const arroba = (email.match(/@/g) || []).length;
    const puntos = (email.match(/\./g) || []).length;

    if (arroba !== 1) {
      setErrorMessageEmail("El email debe contener un solo '@'");
      setIsFormValid(false);
    } else if (puntos >= 2) {
      setErrorMessageEmail("El email debe contener máximo 2 puntos");
      setIsFormValid(false);
    } else {
      setErrorMessageEmail("");
      if (email && email.includes('@') && email.includes('.')) {
        setIsFormValid(true);
      }
    }
    setEmail(email);
  };

  const handleReset = () => {
    setEmail("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
      </View>
      <Text style={styles.titulo}>FORGOT PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        onChangeText={validarEmailInput}
        value={email} 
      />
      <Text style={styles.errorMessage}>{errorMessageEmail}</Text>

      <TouchableOpacity
        style={[styles.button, !isFormValid && styles.disabledButton]}
        onPress={handleReset}
        disabled={!isFormValid}>
        <Text style={styles.buttonText}>SEND</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    flexDirection: 'column',
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
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    paddingLeft: 8,
    borderRadius: 4,
  },
  errorMessage: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold'
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
  disabledButton: {
    backgroundColor: 'gray', 
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
  },
});

export default ForgotPass;

