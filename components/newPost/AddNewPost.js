import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderNewPost } from './HeaderNewPost'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => {
    return (
        <View style={styles.container} >
            <HeaderNewPost />
            <FormikPostUploader /> 
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