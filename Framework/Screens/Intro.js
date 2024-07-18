import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View, ImageBackground, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton } from '../Components/AppButton';
 export function IntroScreen({ navigation }) {
  const [visibility, setVisibility] = useState(true)
 
  setTimeout(() => {
      setVisibility(false)
  }, 100);
  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <ImageBackground 
      source={{ uri: visibility ? null : "https://media.istockphoto.com/id/1141258375/photo/brand-identity-style-font-letter-z.jpg?s=1024x1024&w=is&k=20&c=hP-glJdnQcKdIzP4fHxrHd-JTyE25xSqbY3yJFTUiKE="}} style={{ height: "100%", width: "100%" }}
      //  "https://img.freepik.com/premium-photo/shopping-scene_931878-78573.jpg"
      // "https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?s=1024x1024&w=is&k=20&c=uH4aWgahWVQO8mCFQjw4vXWC9o5FITo8IOk7NqEflBk="
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Zital!</Text>
        <Text style={{ fontSize: 25, color: '#000fff', marginBottom: 1 }}>
          Explore the world of commerce with us
        </Text>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Play</Text>
          <Text style={styles.buttonText}>Credits</Text>
          <Text style={styles.buttonText}>Shop</Text>
          <Text style={styles.buttonText}>Inventory</Text>
        </View>
        <Pressable>
          <AppButton onPress={() => navigation.navigate("HomeScreen")} >
            Let's Get Started
            <Entypo name="arrow-right" size={17} color="#000000" />
            </AppButton>
          
        </Pressable>
      </View>
    </ImageBackground>
    </SafeAreaView>
  )};
    
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'pace-between',
    padding: 5
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
    color: '#0000ffff',
    marginBottom : 5,
  },
  text: {
    fontSize: 50,
    textAlign: 'center',
    color: 'black',
    marginBottom : -25,
    fontFamily: "Pacifico_400Regular" 
  }
});