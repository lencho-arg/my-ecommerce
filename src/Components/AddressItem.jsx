import { Pressable, StyleSheet, Text, View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { colors } from "../Global/Colors";

const AddressItem = ({ location, navigation }) => {

    const onChangeLocation = () => {
        navigation.navigate('Location Selector')
    }

    return (
        <>
            <Text style={styles.textFirst}>
                Si desea cambiar su ubicación, haga click en el Icono
                <Entypo name="location" size={20} color="white"></Entypo>
            </Text>

        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    {location.address}
                </Text>
            </View>
            <Pressable onPress={onChangeLocation}>
                <Entypo name="location" size={30} color="white">
                    {/* <Text style={styles.text2}>CAMBIO</Text> */}
                </Entypo>
            </Pressable>
        </View>

        </>
    );
};

export default AddressItem;

const styles = StyleSheet.create({
    card: {
        height: 200,
        width: 350,
        backgroundColor: colors.blue,
        padding: 25,
        margin: 10,
        borderRadius: 15,
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        right: -15
    },
    textFirst: {
        fontFamily: "Josefin",
        fontSize: 17,
        color: "black",
        backgroundColor: "#C5DFF8",
        justifyContent: 'center',
        alignItems: 'center',
        height: '12%',
        textAlign: 'center',
        padding: 15
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: "white",
        textAlign: 'center',
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.pink,
    },
});