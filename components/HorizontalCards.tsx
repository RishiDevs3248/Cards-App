import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HorizontalCards() {
    return (
        <ScrollView horizontal={true}>
            <View>
                <View style={styles.Container}>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>scroll</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>to</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>Right</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>-</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>-</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>-</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>-</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>-</Text>
                    </View>
                    <View style={[styles.Card]}>
                        <Text style={styles.cardText}>end</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        paddingRight:10,
    },
    Card: {
        height: 120,
        width: 120,
        borderRadius: 7,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // margin:10,
        // marginTop:0,
        // marginRight:0,
        backgroundColor: 'gray',
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: '#fff',
    },
    cardText: {
        color: '#fff',
        fontWeight: 'bold'
    },

})