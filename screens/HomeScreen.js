import { View, StyleSheet, Text, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import { Header, Post, Stories } from '../components'
import { ScrollView } from 'react-native'
import { posts } from '../data/posts'

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