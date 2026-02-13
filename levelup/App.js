import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from 'react';
import Login from './src/screen/LoginScreen';
import loginBackground from './assets/loginbackground.png';
export default function App() {
  const duration = 2000
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    let timeout;
    if (isVisible) {
      timeout = setTimeout(() => {
        setIsVisible(false)
      }, duration)
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout)
      }
    }

  })

  return (
    <View style={styles.container}>
      {isVisible && (
        <Image source={loginBackground} />

      )}
      <Login style={{ width: '100%', height: '100%' }}></Login>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
