import React, { useState } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import logo from '../../imagenes/Logo1.png';

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  const validarInput = () => {
    const arroba = (email.match(/@/g) || []).length;
    const puntos = (email.match(/\./g) || []).length;
    let formValid = true;

    if (!name) {
      setNameError("El campo 'NAME' es obligatorio.");
      formValid = false;
    } else {
      setNameError("");
    }

    if (arroba !== 1 || (puntos !== 1 && puntos !== 2)) {
      setEmailError("El campo 'EMAIL' debe tener un formato válido.");
      formValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("El campo 'PASSWORD' es obligatorio.");
      formValid = false;
    } else {
      setPasswordError("");
    }
    setIsFormValid(formValid);
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>SIGN UP</Text>
      <TextInput
        style={styles.input}
        placeholder="NAME"
        onChangeText={(text) => {
          setName(text);
          validarInput();
        }}
      />
      <Text style={styles.errorMessage}>{nameError}</Text>
      <TextInput
        style={styles.input}
        placeholder="EMAIL"
        onChangeText={(text) => {
          setEmail(text);
          validarInput();
        }}
      />
      <Text style={styles.errorMessage}>{emailError}</Text>
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        secureTextEntry
        onChangeText={(text) => {
          setPassword(text);
          validarInput();
        }}
      />
      <Text style={styles.errorMessage}>{passwordError}</Text>
      <Button
        title="SIGN UP"
        onPress={() => {
          console.log("Name:", name);
          console.log("Email:", email);
          console.log("Password:", password);
        }}
        disabled={!isFormValid}
      />
      <TouchableOpacity>
        <Text style={styles.loginLink}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '60%',
    maxWidth: 500,
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
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

export default SignUp;
