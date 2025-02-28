import { StyleSheet, Text, View, Image, Linking, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCards() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }

  return (
      <View style={[styles.card , styles.element]}>
          <Image 
              source={{uri:'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg'}} 
              style = {styles.cardImage}
          ></Image>
  
          <View style={styles.cardBody}>
              <Text style={styles.cardHeading}>Getting Started with React Native: A Beginner’s Guide</Text>
              <Text numberOfLines={3} style={styles.cardDesc}>React Native is a powerful and popular framework for building cross-platform mobile applications using JavaScript and React. It allows developers to use their existing knowledge of React to create native mobile apps for both iOS and Android platforms. If you’re a beginner looking to dive into mobile app development, React Native is a fantastic choice. In this guide, we’ll walk you through the basics to help you get started.</Text> 
          </View> 
          <View style={styles.cardBody2}>
            <TouchableOpacity onPress={()=>{openWebsite("https://medium.com/@ahmed.nums345/getting-started-with-react-native-a-beginners-guide-cf63368bb887")}}>
                <Text style={styles.Link}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{openWebsite("https://www.linkedin.com/in/hrishikesh-alabnur-407269233")}}>
                <Text style={styles.Link}>Follow me</Text>
            </TouchableOpacity>
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
    cardBody2:{
        paddingBottom:20,
        paddingHorizontal:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    }, 
    Link:{
        color:'#0000EE',
        borderWidth: 1,
        padding: 7,
        borderRadius: 5,
    }
})