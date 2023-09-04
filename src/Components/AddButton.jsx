import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.celeste,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: 250,
        // borderWidth: 1,
        borderRadius: 25,
        backgroundColor: colors.blue,
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 23,
        color: colors.claro,
    },
});