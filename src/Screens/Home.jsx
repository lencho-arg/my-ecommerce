import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'
// import categories from '../Data/categories.json'
import { useGetCategoriesQuery } from '../Services/shopServices'
import CategoryItem from '../Components/CategoryItem'
import Counter from '../Components/Counter'
import { Fontisto } from '@expo/vector-icons'; 


const Home = ({
    navigation
}) => {
    const {data: categories, isLoading, isError} = useGetCategoriesQuery()
    
    return (

        <View style={styles.container}>
            {/* <Counter/> */}
            <FlatList
                data={categories}
                // style={styles.flatlist}
                // numColumns={3}
                keyExtractor={category => category}
                renderItem={({ item }) => <CategoryItem item={item} navigation={navigation}/>} 
                showsVerticalScrollIndicator={false}
                // showsHorizontalScrollIndicator={false} 
                // contentContainerStyle={styles.wrapper}
                // horizontal={true}
                />

                {/* <Fontisto name="coffeescript" size={24} color="black" /> */}
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.claro,
        alignItems: 'center',
    },
    // flatlist: {
    //     fontSize: 23,
    // }
})