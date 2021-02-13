import React, { useEffect, useState } from 'react';
import { View, Text , FlatList,SafeAreaView, StyleSheet,StatusBar, Button} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PermissionsAndroid } from 'react-native';
import WifiManager from "react-native-wifi-reborn";
import styles from '../Designs/DesignWifi';


const Item = ({ SSID ,BSSID}) => (
  <View  style={styles.action} >
    <Text style={styles.textInput}> {SSID} </Text>
    <Text style={styles.textInput}> {BSSID} </Text>
  </View>
);

function WifiScreen({navigation}) {

  const [dataWifi, setDataWifi] = useState([]);

  const scanExample = async () => {
    try {
      const data = await WifiManager.reScanAndLoadWifiList()
      setDataWifi(data);
      console.log(dataWifi);
    } catch (error) {
      console.log(error);
    }
  }

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "React Native Wifi Reborn App Permission",
          message:
            "Location permission is required to connect with or scan for Wifi networks. ",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        scanExample();
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };
  
  useEffect(() => {
    requestLocationPermission();
  }, []);



  const renderItem = ({ item }) => (
    <Item SSID={item.SSID} BSSID={item.BSSID} />
  );
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
       <Text style={styles.text_header} >See new conncetions</Text> 
      </View>
      <View style={styles.footer}>
        <View style={styles.action}>
         <Text style={styles.text_footer} >Connections</Text>
        </View>
        <FlatList
          data={dataWifi}
          renderItem={renderItem}
          keyExtractor={item => item.BSSID}
        />
        <View>
          <Button color='#000000' title="Update" onPress= { () => scanExample()  }/>
        </View>
      </View>
     </SafeAreaView>
      
    
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