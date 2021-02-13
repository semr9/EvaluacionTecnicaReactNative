/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import   JokesScreen  from "./screens/jokesScreen";
import   LoginScreen  from "./screens/loginScreen";
import   WifiScreen  from "./screens/wifiScreen";
import   {DrawerContent} from "./screens/RepresentationScreen";

const Drawer = createDrawerNavigator();


const App: () => React$Node = () => {
  return (
    <>
      <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Login" component={LoginScreen} /> 
        <Drawer.Screen name="Jokes" component={JokesScreen} />
        <Drawer.Screen name="Wifi" component={WifiScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};


export default App;
