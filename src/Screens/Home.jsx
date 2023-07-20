import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import categories from '../Data/categories.json'
import CategoryItem from '../Components/CategoryItem'

const Home = ({
    navigation
}) => {
    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                keyExtractor={category => category}
                renderItem={({ item }) => <CategoryItem item={item} navigation={navigation}/>} 
                showsHorizontalScrollIndicator={false} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        alignItems: 'center',
    }
})