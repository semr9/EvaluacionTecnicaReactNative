import React, {  useState } from 'react';
import { View, Text, Button , ActivityIndicator, FlatList} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../Designs/DesignJokes';


function JokesScreen({navigation}) {
    
  const [isLoading, setLoading] = useState(true);
  const [dataValue, setDataValue] = useState([]);

  const fetchApi =  () => { 
    const response =  fetch('http://api.icndb.com/jokes/random',{
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      
      })
      .then((response) => response.json())
      .then((data) => setDataValue(data.value))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }
    

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text_header}> Push the button </Text>
        </View >
        <View style={styles.footer}>
          {isLoading ? <ActivityIndicator/> : (
            <View >
              <View style={styles.action} > 
                <Text style={styles.text_footer} >ID : </Text>
                <Text style={styles.textInput} >{dataValue.id}</Text>
              </View>
              <View style={styles.action} > 
                <Text style={styles.text_footer} >JOKE : </Text>
                <Text style={styles.textInput} >{dataValue.joke}</Text>
              </View>
              <View style={styles.action} > 
                <Text style={styles.text_footer} >CATEGORIES : </Text>
                <Text style={styles.textInput} >{dataValue.categories}</Text>
              </View>
            </View>
          )}
          <View  >
            <Button color='#000000' style={styles.button} title="Update Jokes" onPress= { () => fetchApi()  }/>
          </View>
        </View>    
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