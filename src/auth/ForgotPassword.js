import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../imagenes/Logo1.png';

function ForgotPass() {

  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validarEmailInput = (email) => {
    const arroba = (email.match(/@/g) || []).length;
    const puntos= (email.match(/\./g) || []).length;

    if (arroba !== 1) {
      setErrorMessageEmail("El email debe contener un solo '@'");
      setIsFormValid(false);
    } else if (puntos >= 2) {
      setErrorMessageEmail("El email debe contener max 2 puntos");
      setIsFormValid(false);
    } else {
      setErrorMessageEmail("");
      if (email && email.includes('@') && email.includes('.')) {
        setIsFormValid(true);
      }
    }
  };

  return (
    <View style={styles.contenedor}>
      <Image source={fondo} style={styles.backgroundImage} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.titulo}>FORGOT PASSWORD</Text>
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        onChangeText={validarEmailInput}
      />
      <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
      <Button
        title="SEND"
        disabled={!isFormValid}
        onPress={() => {
          n
        }}
      />
      <TouchableOpacity onPress={() => {
        
      }}>
        <Text style={styles.loginLink}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    width: '30%',        
    height: '40%', 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#afb5c2',
    flexDirection: 'column',
    padding: 20,
    borderRadius: 10,
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,  
      height: undefined, 
      resizeMode: 'cover', 
    },
    marginVertical: '15%', 
    marginHorizontal: '30%', 

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
  loginLink: {
    marginTop: 20,
    color: 'blue',
  },
});

export default ForgotPass;