import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomeScreen from './screens/HomeScreen';
import { GlobalStyles } from './screens/GlobalStyle';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen.js';
import { app } from './Firebase/FirebaseConfig.js';
import auth from '@react-native-firebase/auth';
import LoginScreen from './screens/LoginScreen.js';


export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log('User is signed in:', user);
      } else {
        // User is signed out
        console.log('User is signed out');
      }
    });

    // Cleanup the listener on unmount to avoid memory leaks
    return () => unsubscribe();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={{ flex: 1 }}>
            {/* it is for giving keyboard space but otherwise for me also it is working */}
            <Stack.Navigator>
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ title: 'Login' }}
              />
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                headerShown: false,
              }} />
              <Stack.Screen name="MapScreen" component={MapScreen} options={{
                headerShown: false,
              }} />
            </Stack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}