import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { current } from '@reduxjs/toolkit'
import { colors } from '../Global/Colors'
import { useSelector } from 'react-redux'
import { usePostCartMutation } from '../Services/shopServices'

const Cart = () => {

    // const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)

    const {items: CartData, total, updateAt, user} = useSelector(state => state.cartReducer.value)
    const [triggerPostCart, result] = usePostCartMutation()

    const onConfirm = () => {
        triggerPostCart({items: CartData, total, user, updateAt})
    }

  return (
    <View style={styles.container}>
        <FlatList
            data={CartData}
            keyExtractor={cartItem => cartItem.id}
            renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}/>
                )
            }}
            />
        <View style={styles.totalContainer}>
            <Pressable
                onPress={onConfirm}
            >
                <Text style={styles.btnConfirm}>Confirmar</Text>
            </Pressable>
            <Text style={styles.textConfirm}>Total: ${total}</Text>
        </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        flex: 1,
        marginBottom: 150
    },
    totalContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnConfirm: {
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
    },
    textConfirm: {
        backgroundColor: colors.celeste,
        borderRadius: 25,
        fontFamily: "Josefin",
        fontSize: 23,
        color: "white",
        paddingLeft: 25,
        paddingRight: 25
      }
})