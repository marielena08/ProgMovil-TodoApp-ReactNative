import React, { useState } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet , TouchableOpacity} from 'react-native';
import logo from '../../imagenes/Logo1.png';
import fondo from '../../imagenes/fondo.jpg';

function Login({goToSignUp}) {
  const [email, setEmail] = useState('');  // Nuevo estado para el email
  const [errorMessageEmail, setErrorMessageEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [password, setPassword] = useState('');

  const validarEmailInput = (emailValue) => {
    setEmail(emailValue);
    const arroba = (emailValue.match(/@/g) || []).length;
    const puntos = (emailValue.match(/\./g) || []).length;

    if (arroba !== 1) {
      setErrorMessageEmail("El email debe contener un solo '@' ");
      setIsFormValid(false);
    } else if (puntos >= 2) {
      setErrorMessageEmail("El email debe contener max 2 puntos");
      setIsFormValid(false);
    } else {
      setErrorMessageEmail("");
      if (emailValue && emailValue.includes('@') && emailValue.includes('.') && password) {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image source={fondo} style={styles.backgroundImage} />
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>LOGIN</Text>
      <TextInput style={styles.input} placeholder="LOGIN" onChangeText={validarEmailInput}/>
      <Text style={styles.errorMessage}>{errorMessageEmail}</Text>
      <TextInput style={styles.input} secureTextEntry placeholder="PASSWORD"
      onChangeText={(text) => {
          setPassword(text);
          if (email && email.includes('@') && email.includes('.') && text) {
              setIsFormValid(true);
          } else {
              setIsFormValid(false);
          }
      }}
    />
    <Button title="LOGIN" 
      onPress={() => {
        console.log("Login:", email);  
        console.log("Password:", password);
      }}
      disabled={!isFormValid} 
    /> 
    <TouchableOpacity onPress={goToSignUp}>
      <Text style={styles.forgotPassword}>¿FORGOT PASSWORD?</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',  
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
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: undefined,  
      height: undefined, 
      resizeMode: 'cover', 
    },
    marginVertical: '5%', 
    marginHorizontal: '10%', 
    
  },
  logo: {
    width: 100,
    height: 100,
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
  forgotPassword: {
    marginTop: 20,
    color: 'black',
  },
});

export default Login;