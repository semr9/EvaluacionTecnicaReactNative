import React from 'react';
import { View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';


function JokesScreen({navigation}) {
    
  
    return (
      <View >
        
      </View>
    );
  }



const jokesStack = createStackNavigator();

const stackJokesScreen = ({navigation}) => ( 
  <jokesStack.Navigator 
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
    <jokesStack.Screen name="Jokes" component={JokesScreen} options={{
      headerLeft: () => (
        <Icon.Button name="align-justify" size={25} backgroundColor="#009387" onPress ={() => navigation.openDrawer()}> 
          </Icon.Button>)
    }}/>
  </jokesStack.Navigator>
);

export default stackJokesScreen;