import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import React from 'react'
import CartData from '../Data/cart.json'
import CartItem from '../Components/CartItem'
import { current } from '@reduxjs/toolkit'

const Cart = () => {

    const total = CartData.reduce((acumulador, currentItem) => acumulador += currentItem.price * currentItem.quantity, 0)
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
            <Pressable>
                <Text>Confirm</Text>
            </Pressable>
            <Text>Total: ${total}</Text>
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
    }
})