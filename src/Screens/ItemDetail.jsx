
import { Button, Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice"
import { colors } from "../Global/Colors";

const ItemDetail = ({ 
  navigation,
  route
 }) => {

    const {productId: idSelected} = route.params

    const dispatch = useDispatch()

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

    const onAddCart = () => {
      dispatch(addCartItem({
        ...product,
        quantity: 1
      }))
    }
    
    return (
      <View>
            {/* <Button onPress={() => navigation.goBack()} title="Go back" /> */}
            {/* <Button onPress={() => navigation.navigate('Home')} title="Home" /> */}

            {product ? (
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={orientation === "portrait" ? styles.image : styles.imageLandscape}
                        resizeMode="cover"
                        />
                    <View style = {styles.textContainer}>
                      <Text style = {styles.textContainer}>{product.title}</Text>
                      <Text style = {styles.textContainer}>{product.description}</Text>
                      <Text style = {styles.textContainer}>${product.price}</Text>
                      
                      <Pressable
                        onPress={onAddCart}>
                        <Text style={styles.btn}>Comprar</Text>
                      </Pressable>
                      
                      {/* <Button 
                        title="Add cart"
                        onPress={onAddCart}
                      ></Button> */}
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
      flexDirection: 'column',
      fontSize: 23,
      fontFamily: "Josefin",
      color: colors.blue
  },
  btn: {
    backgroundColor: colors.blue,
        borderRadius: 20,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.blue,
        fontFamily: "Josefin",
        fontSize: 23,
        color: "white",
        paddingLeft: 25,
        paddingRight: 25
  }
});
