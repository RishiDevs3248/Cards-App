import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
            uid : 1,
            name : "Rishi",
            status : "Web and Mobile Developer",
            imageURL : "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg",
        },
        {
            uid : 2,
            name : "Ankit",
            status : "Web Developer",
            imageURL : "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg",
        },
        {
            uid : 3,
            name : "Shantanu",
            status : "Sales Executive",
            imageURL : "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg",
        },
        {
            uid : 4,
            name : "Aditya",
            status : "UI/UX",
            imageURL : "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg",
        },
        {
            uid : 5,
            name : "Siddhant",
            status : "Beat Boxer",
            imageURL : "https://i.pinimg.com/736x/8d/ff/49/8dff49985d0d8afa53751d9ba8907aed.jpg",
        },
    ]
  return (
    <View>
        <ScrollView style={styles.container} scrollEnabled={false}>
            {contacts.map((item)=>(
                <View key={item.uid} style={styles.userCard }>
                    <Image source={{uri : item.imageURL}} style={styles.userImage}></Image>
                    <View style={styles.userDesc}>
                        <Text style={styles.userName}>{item.name}</Text>
                        <Text style={styles.userStatus}>{item.status}</Text>
                    </View>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:10,
    },
    userCard:{
        display:"flex",
        flexDirection:"row",
        marginVertical:7,
        backgroundColor: 'gray',
        padding:10,
        borderRadius:10
    },
    userImage:{
        height:50,
        width:50,
        borderRadius:50/2,
        marginRight:10,
    },
    userDesc:{},
    userName:{
        color:"#fff",
        fontSize:20,
        fontWeight:"900",
        letterSpacing:1
    },
    userStatus:{
        color:"#FAF9F6",
    },
})