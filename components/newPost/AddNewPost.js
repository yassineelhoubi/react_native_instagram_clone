import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderNewPost } from './HeaderNewPost'

const AddNewPost = () => {
    return (
        <View style={styles.container} >
            <HeaderNewPost />
        </View>
    )
}

export { AddNewPost }

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10
    }
})