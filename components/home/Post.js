import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const Post = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
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

const PostImage = ({ post }) => (
    <View style={styles.postImageContainer}>
        <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
    </View>
)

const styles = StyleSheet.create({
    postContainer: {
        marginBottom: 30
    },
    /* PostHeader */
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
    /* PostImage */
    postImageContainer: {
        width: "100%",
        height: 450
    },
    postImage: {
        height: '100%',
        resizeMode: 'cover'
    }

})

export { Post }