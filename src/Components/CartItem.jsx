import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

import { removeCartItem } from "../Features/Cart/cartSlice";

import { colors } from "../Global/Colors";
import { Entypo, Ionicons, Fontisto } from '@expo/vector-icons'; 


const CartItem = ({ cartItem }) => {

    const dispatch = useDispatch()

    const onRemoveCartItem = () => {
        dispatch(removeCartItem(cartItem.id))
    }
    return (
        <View style={styles.card} onPress={() => {}}>
            <View style={styles.textContainer}>

                <View style={styles.containerImages}>
                    <View style={styles.imagesCard}>
                        <Image
                            source={{ uri: cartItem.images[0] }}
                            style={styles.image}
                            resizeMode="cover"
                        />
                    </View>
                </View>

                <View style={styles.containerText}>
                    <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
                    <Text style={styles.text2}>{cartItem.description}</Text>
                    <Text style={styles.text2}>${cartItem.price}</Text>
                </View>

            </View>

            <Pressable onPress={onRemoveCartItem}>
                <Fontisto name="trash" size={30} color='#4B7BE5' />
            </ Pressable>
            

        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 110,
        backgroundColor: colors.gris,
        padding: 10,
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {

        width: "80%",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    containerText: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    text: {

        fontFamily: "Josefin",
        fontSize: 17,
        color: colors.celeste,
    },
    text2: {
        fontFamily: "Josefin",
        fontSize: 12,

    },
    containerImages: {
        width: "100%",
        position: 'absolute',
        borderRadius: 15,
        top: -8,
        alignItems: "flex-start",

    },
    image: {
        width: 110,
        height: 80,
        borderRadius: 15,
    },
    
});