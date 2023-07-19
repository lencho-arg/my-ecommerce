import { Pressable, StyleSheet, Text, TextInput, View, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../Global/Colors';
import { AntDesign } from '@expo/vector-icons';

const Search = ({
    onSearch,
    error = "",
    goBack
}) => {
    const [keyword, setKeyword] = useState("")
    const {width, height} = useWindowDimensions()

    return (
        <View style={width > 350 ? styles.container : styles.containerSm}>
            <TextInput style={styles.input}
                placeholder='Search...'
                value={keyword}
                onChangeText={setKeyword}
            />
            
            <View style={styles.goBack}>
            <Pressable onPress={() => onSearch(keyword)}>
                <FontAwesome name="search" size={24} color="black" />
            </Pressable>
            <Pressable onPress={() => setKeyword("")}>
                <FontAwesome5 name="eraser" size={24} color="black" />
            </Pressable>
            <Pressable onPress={goBack}>
                <AntDesign name="back" size={24} color="black" />
            </Pressable>
            {error ? <Text>
                {error}
            </Text> :
                null}
            </View>
            
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '10%',
        gap: 18,
    },
    containerSm: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '17%',
        // gap: 8,
    },
    input: {
        width: 250,
        padding: 8,
        fontSize: 18,
        backgroundColor: colors.white,
        borderRadius: 10,
        fontFamily: 'Josefin'
    },
    goBack: {
        flexDirection: 'row',
        gap: 15,
    }
})