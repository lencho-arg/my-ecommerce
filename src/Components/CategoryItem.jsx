import { Pressable, StyleSheet, Text } from 'react-native'
import React from 'react'
import Card from '../Components/Card'
import { colors } from '../Global/Colors'
import { useDispatch } from 'react-redux'
import { setCategorySelected } from '../Features/Counter/Market/shopSlice'

const CategoryItem = ({
    item,
    navigation
}) => {

    const dispatch = useDispatch()

    const onSelectCategory =() => {
        dispatch(setCategorySelected(item))
        navigation.navigate('Tu Lista', {category:item})
    }

    return (
        <Pressable
            onPress={onSelectCategory}>
            <Card additionalStyle={styles.border}>
                <Text style={styles.textCategory}>{item}</Text>
            </Card>
        </Pressable>

    )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory: {
        fontSize: 20,
        color: colors.white,
        fontFamily: 'Josefin'
    },
    border: {
        borderRadius: 25,
        width: 200,

    }
})