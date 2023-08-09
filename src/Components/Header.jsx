import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../Features/User/userSlice";


const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = "Welcome"
    if (route.name === 'Signup') title = "Registrate"
    if (route.name === 'Login') title = 'Ingresa'
    if (route.name === 'ItemListCategory') title = route.params.category
    if (route.name === 'Detail') title = route.params.title
    if (route.name === 'CartScreen') title = 'Tu carrito'
    if (route.name === 'OrderScreen') title = 'Ordenes'
    else title = route.name

    const dispatch = useDispatch()
    const {email} = useSelector(state=>state.userReducer.value)
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {route.name !== ("Signup" || "Login" || "Home" ) ? (
                
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            ) : email ? 
                <Pressable
                    style={styles.signOut}
                    onPress={()=> dispatch(signOut())}
                >
                    <Text>Sign Out</Text>
                </Pressable>
                :null}

        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    containerHeader: {
        // flexDirection: 'row',
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Josefin'
    },
    pressable: {
      position: "absolute",
      right: 30,
      top: "50%",
    },
    signOut: {
        position: "absolute",
        left: 30,
        top: "50%",
    }
})