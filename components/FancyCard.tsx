import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View style={[styles.card , styles.element]}>
        <Image 
            source={{uri:'https://c4.wallpaperflare.com/wallpaper/227/60/1/anime-the-place-promised-in-our-early-days-the-place-promised-in-our-early-days-hd-wallpaper-thumb.jpg'}} 
            style = {styles.cardImage}
        ></Image>

        <View style={styles.cardBody}>
            <Text style={styles.cardHeading}>Chiling while learning react native</Text>
            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam debitis exercitationem voluptatum deserunt modi repellat, possimus cum delectus dignissimos et.
            </Text>
            <Text style={styles.cardFooter}>10 min drive</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        borderRadius:10,
        margin:15,
        marginTop:0,
        overflow:'hidden',
    },
    element:{},
    cardImage:{
        height:200
    },
    cardBody:{
        paddingVertical:20,
        paddingHorizontal:10,
    },    
    cardHeading:{
        fontWeight:'700',
        fontSize:20,
    },
    cardDesc:{
        marginTop:5,
    },    
    cardFooter:{
        marginTop:5,
        fontSize:13,
        color:"gray"
    },
}) 