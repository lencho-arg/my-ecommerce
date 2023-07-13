import { StyleSheet, Text } from 'react-native'
import React from 'react'
import	Card from '../Components/Card'
import { colors } from '../Global/Colors'


const CategoryItem = ({ item }) => {
    return (
        <Card>
            <Text style={styles.textCategory}>{item}</Text>
        </Card>
    )
}

export default CategoryItem

const styles = StyleSheet.create({
    textCategory:{
        fontSize: 15,
        color: colors.white
    }
})