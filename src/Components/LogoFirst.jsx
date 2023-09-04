import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../Global/Colors';

const LogoFirst = ({
  navigation
}) => {



  return (
    <View style={styles.containerBanner}>
      
          <View style={styles.containerBannerImage}>
            <Text style={styles.textBanner}>
              BAmos Foodie
            </Text>
            
            <Image 
                resizeMode='contain'
                style = {styles.image}
                source={{uri: 'https://imgur.com/dnmviR6.jpg'}}
            />
          </View>
    </View>
  )
}


export default LogoFirst;

const styles = StyleSheet.create({

    containerBannerImage: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        justifyContent: 'center',
        width: 350,
        height: 300,
        // position: 'relative'
    },
    textBanner: {
        fontSize: 40,
        padding: 10,
        color: colors.celeste,
        fontFamily: 'Josefin',
        position: 'absolute',
        zIndex: 2,
        left: 50,
        opacity: 0.8,
        textAlign: 'center',
        backgroundColor: "white"
    },
    image: {
        width: 950,
        height: 450,
        zIndex: 1,
    }
})