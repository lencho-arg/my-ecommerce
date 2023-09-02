import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../Global/Colors";

const ProductItem = ({ 
    item,
    navigation
}) => {
    const { height, width } = useWindowDimensions();

    const onSelect = (id) => {
        navigation.navigate('Detalle', {productId: item.id})
    }

    return (
        <Pressable onPress={() => onSelect(item.id)}>
            <Card additionalStyle={styles.additionalStylesCard}>
                <Text
                    style={
                        width > 350 ? styles.textCategory : 
                        styles.textCategorySm
                    }
                >
                    {item.title}
                </Text>
                <Image
                    resizeMode="cover"
                    style={styles.image}
                    source={{ uri: item.images[0] }}
                />
            </Card>
        </Pressable>
    );
};

export default ProductItem;

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: '40%',
        
        minWidth: 150,
        maxWidth: 250,
        borderRadius: 15,

    },
    additionalStylesCard: {
        flexDirection: "row",
        height: 120,
        justifyContent: "space-between",
        padding: 8

    },
    textCategory: {
        width: "50%",
        fontSize: 20,
        fontFamily: "Josefin",
        color: colors.white,
    },
    textCategorySm: {
        width: "50%",
        fontSize: 17,
        fontFamily: "Josefin",
        color: colors.white,
    },
});