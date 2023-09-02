import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../Global/Colors";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { removeCartItem } from "../Features/Cart/cartSlice";

const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const onRemoveCartItem = () => {
        dispatch(removeCartItem(cartItem.id))
    }
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>
                        {/* <Image
                        source={{ uri: product.images[0] }}
                        style={orientation === "portrait" ? styles.image : styles.imageLandscape}
                        resizeMode="cover"
                        /> */}
                <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.text2}>${cartItem.price}</Text>
            </View>
            <Pressable onPress={onRemoveCartItem}>
                <Entypo name="trash" size={30} color="black" />
            </ Pressable>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.celeste,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {

        width: "70%",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    text: {
        fontFamily: "Josefin",
        fontSize: 19,
        color: colors.white,
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 14,
    },
});