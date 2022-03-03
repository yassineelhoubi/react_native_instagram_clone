import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import {Header} from '../components/home/Header'

const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
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