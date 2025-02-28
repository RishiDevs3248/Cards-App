import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type headingText = {
    text : string;
}

export default function HeadingTexts({text}:headingText) {
  return (
    <View>
      <Text style={styles.headingOne}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    headingOne:{
        color:'#fff',
        fontSize: 23,
        fontWeight: '700',
        letterSpacing:1.5,
        fontStyle: 'italic',
        padding:10,
    },
})