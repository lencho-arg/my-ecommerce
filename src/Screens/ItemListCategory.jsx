import { FlatList, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import productsRaw from '../Data/products.json'
import ProductItem from '../Components/ProductItem'
import { colors } from '../Global/Colors'
import Search from '../Components/Search'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../Services/shopServices'

import { Fontisto } from '@expo/vector-icons'; 


const ItemListCategory = ({
  navigation,
  route
}) => {

  const {category} = route.params

  // const productsSelected = useSelector(state=>state.shopReducer.value.productsSelected)
  const categorySelected = useSelector(state => state.shopReducer.value.categorySelected)
  const {data: productsSelected, isLoading, isError} = useGetProductsByCategoryQuery(categorySelected)


  const [products, setProducts] = useState([])
  const [keyword, setKeyword] = useState("")
  const [keywordError, setKeywordError] = useState("")

  useEffect(() => {
    //Lógica de manejo de category
    if (productsSelected) {
      const productsFiltered = productsSelected.filter(product => product.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()))
      setProducts(productsFiltered)
    }


  }, [productsSelected, keyword])

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/
    const evaluation = expression.test(input)

    if (evaluation) {
      setKeyword(input)
      setKeywordError("")
    } else {
      setKeywordError("SOLO LETRAS Y NUMEROS")
    }

  }

  return (
    <View style={styles.container}>
      <Search
        onSearch={onSearch}
        error= {keywordError}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => <ProductItem 
          item={ item }
          navigation={navigation}
          />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default ItemListCategory

const styles = StyleSheet.create({
  container: {
    height: '83%',
    backgroundColor: colors.claro,
    alignItems: 'center'
  }
})