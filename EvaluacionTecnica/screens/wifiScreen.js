import React from 'react';
import { View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';





function WifiScreen({navigation}) {

 
  
  return (
    
      <View >
       
      </View>
  
      
    
  );
}
  
const wifiStack = createStackNavigator();

const stackWifiScreen = ({navigation}) => ( 
  <wifiStack.Navigator 
    screenOptions = {{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  }}
  >
    <wifiStack.Screen name="wifi" component={WifiScreen} options={{
      headerLeft: () => (
        <Icon.Button name="align-justify" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}> 
        </Icon.Button>)
    }}/>

  </wifiStack.Navigator>
);

export default stackWifiScreen;