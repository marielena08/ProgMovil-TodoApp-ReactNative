import React, { useState } from 'react';
import { View, TextInput, Text, Image, Button, StyleSheet , TouchableOpacity} from 'react-native';
import logo from '../../imagenes/Logo1.png';

function Login() {
  const [email, setEmail] = useState(''); 
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
     
      }}
      disabled={!isFormValid} 
    /> 
    <TouchableOpacity onPress={() => navigation.navigate('ForgotPass')}>
      <Text style={styles.forgotPassword}>¿FORGOT PASSWORD?</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    maxWidth: 500,      
    height: '50%', 
    maxHeight: 500,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7FC19D',
    flexDirection: 'column',
    padding: 10,
    borderRadius: 10,
    backgroundImage: {
      ...StyleSheet.absoluteFillObject,
      width: 100,  
      height: 100, 
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
