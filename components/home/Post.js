import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
    return (
        <View>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
        </View>
    )
}

const PostHeader = ({ post }) => (
    <View style={styles.postHeader}>
        <View style={styles.postFounder}>
            <Image source={{ uri: post.profile_picture }} style={styles.story} />
            <Text style={styles.textHeader}>{post.user}</Text>
        </View>
        <Text style={{ color: 'white', fontWeight: '900' }}>...</Text>
    </View>
)

const styles = StyleSheet.create({
    postHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 5,
        alignItems: 'center'
    },
    postFounder: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textHeader: {
        color: 'white',
        marginLeft: 5,
        fontWeight: '700'
    },
    story: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: "#ff8501"
    },
})

export { Post }