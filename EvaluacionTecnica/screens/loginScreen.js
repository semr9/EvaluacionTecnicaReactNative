import * as React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function LoginScreen({navigation}) {

    return (
      <View>
        
        </View> 
    );
  }
 
const loginStack = createStackNavigator();

const stackLoginScreen = ({navigation}) => ( 
  <loginStack.Navigator 
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
    <loginStack.Screen name="Login" component={LoginScreen} options={{
      headerLeft: () => (
        <FontAwesome.Button name="align-justify" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}> 
        </FontAwesome.Button>)
    }}/>
  </loginStack.Navigator>
);

export default stackLoginScreen;

