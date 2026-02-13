import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';


export default function Login() {
  const handleLogin = () => {
    // handle login
  };

  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center', alignItems: 'center', backgroundColor: '' }}>
      <View style={{ alignContent: 'center' }}>
        <Text style={styles.loginHeader}>Learn Better with LEVELUP</Text>
        <Text style={styles.loginText}> Login </Text>
        <TextInput placeholder="Email" style={{ borderWidth: 2, borderRadius: 10, margin: 10, borderColor: 'blue' }} />
        <TextInput placeholder="Password" secureTextEntry style={{
          borderWidth: 2, flexDirection: 'row', borderRadius: 10, borderColor: 'blue', margin: 10, marginBottom: 10
        }} />
        <TouchableOpacity onPress={handleLogin}>
          < Text > sign in</Text>
        </TouchableOpacity >
      </View >
    </View>
  );
}
const styles = StyleSheet.create({
  loginText: {
    fontSize: 20,
    fontStyle: 'bold',
    color: 'blue',
    alignContent: 'center',
    alignItems: 'center'
  },
  loginHeader: {
    fontSize: 30,
    fontStyle: 'bold',
    color: 'blue',
    alignContent: 'center',
    padding: 10
  }
})