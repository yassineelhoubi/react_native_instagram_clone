import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Header, Post, Stories, BottomTabs, bottomTabIcons } from '../components'
import { ScrollView } from 'react-native'
import { posts } from '../data'


const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <Stories />
            <ScrollView>
                {posts.map((post, index) => (
                    <Post post={post} key={index} />
                ))}
            </ScrollView>
            <BottomTabs icons={bottomTabIcons} />
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