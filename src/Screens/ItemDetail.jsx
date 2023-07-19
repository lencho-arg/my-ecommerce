import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../Data/products.json'

const ItemDetail = ({
    idSelected,
    setProductSelected
}) => {

    const [product, setProduct] = useState(null)
    const [orientation, setOrientation] = useState("portrait")
    const {width, height} = useWindowDimensions()

    useEffect (() => {
        if (width > height) setOrientation("landscape")
        else setOrientation("portrait") 
    }, [width, height])

    useEffect(() => {
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
            )
            setProduct(productSelected)
    }, [idSelected])


    return (
        <View>
            <Button onPress={() => setProductSelected("")} title='Go Back' />

            {product ?
            <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>

                <Image
                    source={{ uri: product.images[0] }}
                    style={styles.image}
                    resizeMode="cover"
                />
                <View style={styles.textContainer}>
                    <Text>{product.title}</Text>
                    <Text>{product.description}</Text>
                    <Text>${product.price}</Text>
                    <Button title='Add Cart'></Button>
                </View>

            </View> : null }
        </View>
    )
}

export default ItemDetail

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'flex-start',
        padding: 10
    },
    mainContainerLandscape: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'flex-start',
        padding: 10
    },
    image: {
        width: 300,
        height: 200
    },
    textContainer: {
        flexDirection: 'column',
    }
})
