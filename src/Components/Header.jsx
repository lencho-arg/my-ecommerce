import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { AntDesign } from '@expo/vector-icons';


const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Text style={styles.text}>Ecommerce</Text>
      <AntDesign name="shoppingcart" size={24} color="white" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    containerHeader: {
        flexDirection: 'row',
        height: '10%',
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Josefin'
    }
})