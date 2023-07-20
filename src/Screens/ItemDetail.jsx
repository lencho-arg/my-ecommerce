
import { Button, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";

const ItemDetail = ({ 
  navigation,
  route
 }) => {

    const {productId: idSelected} = route.params

    const [product, setProduct] = useState(null);
    const [orientation, setOrientation] = useState("portrait")
    const {width, height} = useWindowDimensions()

    useEffect(()=> {
      if (width > height) setOrientation("landscape")
      else setOrientation("portrait")
    }, [width, height])

    useEffect(() => {
        //Encontrar el producto por su id
        const productSelected = allProducts.find(
            (product) => product.id === idSelected
        );
        setProduct(productSelected);
    }, [idSelected]);
    
    return (
      <View>
            <Button onPress={() => navigation.goBack()} title="Go back" />
            <Button onPress={() => navigation.navigate('Home')} title="Home" />

            {product ? (
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={orientation === "portrait" ? styles.image : styles.imageLandscape}
                        resizeMode="cover"
                        />
                    <View style = {styles.textContainer}>
                      <Text>{product.title}</Text>
                      <Text>{product.description}</Text>
                      <Text>${product.price}</Text>
                      <Button title="Add cart"></Button>
                    </View>
                </View>
            ) : null}
        </View>
    );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  image: {
    width: 300,
    height: 250,
  },
  imageLandscape: {
      width: 200,
      height: 200,
      marginRight: 20
    },
    textContainer: {
    flexDirection: 'column'
  }
});


      // import { StyleSheet, Text, View } from 'react-native'
      // import React from 'react'
      
      // const ItemDatail = () => {
      //   return (
      //     <View>
      //       <Text>ItemDatail</Text>
      //     </View>
      //   )
      // }
      
      // export default ItemDatail
      
      // const styles = StyleSheet.create({})