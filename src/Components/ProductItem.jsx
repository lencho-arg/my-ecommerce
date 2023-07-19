import { StyleSheet, Text,Image, useWindowDimensions, Pressable } from 'react-native'
import React from 'react'
import Card from './Card'

const ProductItem = ({
  item,
  setProductSelected,
  setCategorySelected
}) => {

  const {height, width} = useWindowDimensions()

  const onSelect = (id) =>{
    setProductSelected(item.id)
    setCategorySelected("")
  }
  
  return (
    <Pressable onPress={() => onSelect(item.id)}>
        <Card additionalStyle={styles.additionalStylesCard}>
            <Text style={width > 350 ? styles.textCategory: styles.textCategorySm}>{item.title}</Text>
            <Image 
            resizeMode= 'cover'
            style= {styles.image}
            source={{uri: item.images[0]}}
            />
        </Card>
    </Pressable>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: '30%',
    minWidth: 150,
    maxWidth: 250,
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between'
  },
  textCategory: {
    width: '50%',
    fontSize: 20
  },
  textCategorySm: {
    width: '50%',
    fontSize: 15
  }
})

// 