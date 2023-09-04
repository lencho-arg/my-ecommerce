import { Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { StatusBar } from 'react-native'
import { useEffect } from "react";
import React from 'react'

import { Foundation, FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { colors } from '../Global/Colors'

import ShopStack from './ShopStack'
import CartStack from './CartStack'
import AuthStack from './AuthStack'
import OrderStack from './OrderStack'
import MyProfileStack from './MyProfileStack'

import { getSession } from '../SQLite'
import { setUser } from '../Features/User/userSlice'


const Tab = createBottomTabNavigator()

const Navigator = () => {
        
    const dispatch = useDispatch();

    useEffect(()=> {
        (async ()=> {
            try {
                const session = await getSession()
                if (session?.rows.length) {
                    const user = session.rows._array[0]
                    dispatch(setUser(user))
                }
            } catch (error) {
            }
        })()
    }, [])

    const {email} = useSelector(state => state.userReducer.value);

  return (
    <SafeAreaView style = {styles.container}>
        <NavigationContainer>
            {
                email?
                <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar,
                }}
            >
                <Tab.Screen 
                    name='Shop'
                    component={ShopStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Fontisto name="shopping-store" size={24} color={focused ? colors.gris: "white"} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Cart'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <Foundation name="shopping-cart" size={30} color={focused ? colors.gris: "white"} />    
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Orders'
                    component={OrderStack}
                    options={{
                        tabBarIcon: ({focused}) => {
                            return (
                                <View>
                                    <FontAwesome5 name="list-ul" size={24} color={focused ? colors.gris: "white"} />
                                </View>
                            )
                        }
                    }}
                />
                <Tab.Screen
                        name="MyProfile"
                        component={MyProfileStack}
                        options={{
                            tabBarIcon: ({ focused }) => {
                                return (
                                    <View style={styles.item}>
                                        <Ionicons
                                            name="person-circle-outline"
                                            size={24}
                                            color={
                                                focused
                                                    ? colors.gris
                                                    : 'white'
                                            }
                                        />
                                    </View>
                                );
                            },
                        }}
                    />
                </Tab.Navigator>
                :<AuthStack />
            }
        </NavigationContainer>
    </SafeAreaView>
  )
}

export default Navigator

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    tabBar: {
        backgroundColor: colors.blue,
        shadowColor: 'black',
        elevation: 4,
        position: 'absolute',
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90,
    }
  })