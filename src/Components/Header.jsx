import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { AntDesign } from "@expo/vector-icons";

const Header = ({ route, navigation }) => {
    let title
    if (route.name === 'Home') title = 'Home'
    else if (route.name === 'ItemListCategory') title = route.params.category
    else if (route.name === 'Detail') title = route.params.title
    else title = route.name
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.text}>{title}</Text>
            {route.name !== "Home" ? (
                <Pressable
                    style={styles.pressable}
                    onPress={() => navigation.goBack()}
                >
                    <AntDesign name="back" size={24} color="black" />
                </Pressable>
            ) : null}
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
})