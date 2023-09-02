import React from "react";
import Header from '../Components/Header'
import ItemListCategory from '../Screens/ItemListCategory'
import ItemDetail from '../Screens/ItemDetail'
import Home from '../Screens/Home'

import { createNativeStackNavigator } from '@react-navigation/native-stack'


const Stack = createNativeStackNavigator()

const ShopStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                header: () => {
                    return <Header route={route} navigation={navigation} />;
                },
            })}
        >
            <Stack.Screen name="BAmos" component={Home} />
            <Stack.Screen
                name="Tu Lista"
                component={ItemListCategory}
            />
            <Stack.Screen name="Detalle" component={ItemDetail} />
        </Stack.Navigator>
    );
};

export default ShopStack;