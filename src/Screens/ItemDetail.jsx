
import { Image, Pressable, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/products.json";
import { useDispatch } from "react-redux";
import { addCartItem } from "../Features/Cart/cartSlice"
import { colors } from "../Global/Colors";
import AddButton from "../Components/AddButton";

// import MapView from 'react-native-maps';

const ItemDetail = ({ 
  navigation,
  route,
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

            {product ? (
              <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape} >
                    <Image
                        source={{ uri: product.images[0] }}
                        style={orientation === "portrait" ? styles.image : styles.imageLandscape}
                        resizeMode="cover"
                        />
                    <View style = {styles.textContainerCard}>
                      <Text style = {styles.textContainer}>{product.title} - {product.lugar}{product.author}</Text>
                      <Text style = {styles.textContainer}>{product.description}</Text>
                      <Text style = {styles.textContainer}>${product.price}</Text>                    

                      <View style={styles.button}>
                        <AddButton 
                        title="Comprar"
                        onPress={onAddCart} />
                      </View>

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
    padding: 40,
    backgroundColor: colors.gris
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
    borderRadius: 50
  },
  imageLandscape: {
      width: 200,
      height: 200,
      marginRight: 20
  },
  textContainerCard: {
  //     borderColor: colors.celeste,
  //     padding: 15,
      marginTop: 5,
  //     borderRadius: 15,
  //     borderBottomWidth: 3.5,
  //       borderRightWidth: 3.5,
  },
  textContainer: {
      flexDirection: 'column',
      fontSize: 23,
      fontFamily: "Josefin",
      color: colors.blue,
      
  },
  btn: {
    backgroundColor: colors.celeste,
        borderRadius: 20,
        borderBottomWidth: 3.5,
        borderRightWidth: 3.5,
        borderColor: colors.blue,
        fontFamily: "Josefin",
        fontSize: 23,
        color: "white",
        paddingLeft: 25,
        paddingRight: 25,
        marginTop: 5,
        textAlign:'center'
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25,
  },
});
