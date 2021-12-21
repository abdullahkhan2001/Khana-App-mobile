
import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingPage from './screen/LandingPage';
import SignUp from './screen/SignUp';
import SignIn from './screen/SignIn';
import NeedyDashboard from './screen/NeedyDashboard';
import firebase from 'firebase'
import AddDetails from './screen/NeedyDetails';
import BranchMap from './screen/map'
const Stack = createStackNavigator();



export default function App() {

  const firebaseConfig = {
    apiKey: "AIzaSyB8ERTfTMONT2s38NS5Uf2ZzHtTC1a61lU",
    authDomain: "food-delivery-41c9d.firebaseapp.com",
    projectId: "food-delivery-41c9d",
    storageBucket: "food-delivery-41c9d.appspot.com",
    messagingSenderId: "344552484613",
    appId: "1:344552484613:web:93e4a2196f03f34d2d116c"
  };
  
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator>

    
      
        <Stack.Screen name="landingPage" component={LandingPage}
          options={{
            headerShown: false
          }}

        />
  <Stack.Screen name="NeedyDashboard" component={NeedyDashboard}
          options={{
            headerShown: false
          }}

        />
<Stack.Screen name="AddDetails" component={AddDetails}
          options={{
            headerShown: false
          }}

        />




        <Stack.Screen name="SignUp" component={SignUp}
          options={{
            headerShown: false
          }}

        />


        <Stack.Screen name="SignIn" component={SignIn}
          options={{
            headerShown: false
          }}

        />



      </Stack.Navigator>
    </NavigationContainer>
  );
}