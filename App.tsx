import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import HorizontalCards from './components/HorizontalCards'
import HeadingTexts from './components/HeadingTexts'
import FancyCard from './components/FancyCard'
import ActionCards from './components/ActionCards'
import ContactList from './components/ContactList'

const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <HeadingTexts text='Flat Cards'/>
            <FlatCards />
            <HeadingTexts text='Horizontal  Cards' />
            <HorizontalCards />
            <HeadingTexts text="Trending Places" />
            <FancyCard/>
            <HeadingTexts text='Fancy Cards'/>
            <ActionCards/>
            <HeadingTexts text='Contact List '/>
            <ContactList/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default App