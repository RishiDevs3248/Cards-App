import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <View style={styles.Container}>
        <View style={[styles.Card, styles.cardOne]}>
            <Text style={styles.cardText}>Red</Text>
        </View>
        <View style={[styles.Card, styles.cardTwo]}>
            <Text style={styles.cardText}>Dark Blue</Text>
        </View>
        <View style={[styles.Card, styles.cardThree]}>
            <Text style={styles.cardText}>Light Blue</Text>
        </View>
      </View>
    </View> 
  )
}

const styles = StyleSheet.create({
    Container:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        gap:10,
    },
    Card:{
        height: 120,
        width : 120,
        borderRadius:7,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: 'green',
        borderWidth:1,
        borderStyle:"solid",
        borderColor:'#fff'
    },
    cardText:{
        color:'#fff',
        fontWeight:'bold'
    },
    cardOne:{
        backgroundColor:"red",
    },
    cardTwo:{
        backgroundColor:"#003366",
    },
    cardThree:{
        backgroundColor:"lightblue",
    }

})