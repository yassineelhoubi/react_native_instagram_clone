import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Header, Stories } from '../components'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: 'black',
        flex: 1
    }
});

export { HomeScreen }