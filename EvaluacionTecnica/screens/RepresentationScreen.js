import React from 'react';
import { View } from 'react-native';
import { Drawer } from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../Designs/DesignRepresentationScreen'

export function DrawerContent(props) {
    return (
    <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="account-box" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Login"
                        onPress={() => {props.navigation.navigate('Login')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="bookmark" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Jokes"
                        onPress={() => {props.navigation.navigate('Jokes')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="access-point-network" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Wifi"
                        onPress={() => {props.navigation.navigate('Wifi')}}
                    />
                    </Drawer.Section>
            </View>
        </DrawerContentScrollView>    
    </View>);


}