import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'
import LogoFirst from '../Components/LogoFirst'


const Home = ({
    navigation
}) => {
    const {data: categories,  isLoading, isError} = useGetCategoriesQuery()
    
    return (

        <View style={styles.container}>
        <LogoFirst 
                navigation={navigation}
        />
        <FlatList
            data={categories}
            keyExtractor={category => category}
            renderItem={({ item }) => <CategoryItem item={item} navigation={navigation}/>} 
            showsVerticalScrollIndicator={false}
        />
        </View>
        
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.claro,
        alignItems: 'center',
    }
})