import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import OrderData from '../Data/orders.json'
import OrderItem from '../Components/OrderItem'
import { useSelector } from 'react-redux'
import { useGetCategoriesQuery } from '../Services/shopServices'

const OrderScreen = () => {

  const user = useSelector(state => state.cartReducer.value.user)

  const {data: orders} = useGetCategoriesQuery(user)

  return (
    <View>
        <FlatList
            data={OrderData}
            keyExtractor={orderItem => orderItem.id}
            renderItem={({item}) => {
                return(
                    <OrderItem
                        order={item}
                     />
                )
            }}
        />
      
    </View>
  )
}

export default OrderScreen

const styles = StyleSheet.create({})