import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
const postFooterIcons = [
    {
        name: 'like',
        img: require('../../assets/heart.png')
    },
    {
        name: 'comment',
        img: require('../../assets/comment.png')
    },
    {
        name: 'share',
        img: require('../../assets/send.png')
    },
    {
        name: 'save',
        img: require('../../assets/save.png')
    }
]
const Post = ({ post }) => {
    return (
        <View style={styles.postContainer}>
            <Divider width={1} orientation='vertical' />
            <PostHeader post={post} />
            <PostImage post={post} />
            <View style={styles.postFooterContainer}>
                <PostFooter />
                <Likes post={post} />
                <Caption post={post} />
                <CommentSections post={post} />
            </View>
        </View>
    )
}

const Likes = ({ post }) => (
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
        <Text style={{ color: 'white', fontWeight: '600' }}>
            {post.likes.toLocaleString('en')} likes
        </Text>
    </View>
)

const Caption = ({ post }) => (
    <View>
        <Text style={{ color: 'white' }}>
            <Text style={{ fontWeight: "bold" }}>{post.user}</Text>
            <Text> {post.caption}</Text>
        </Text>

    </View>
)

const CommentSections = ({ post }) => (
    <View style={{ marginTop: 5 }}>
        {!!post.comments.length && (
            <Text style={{ color: "gray" }}>
                {post.comments.length > 1 ? `View all ${post.comments.length} comments ` : 'View comment'}
            </Text>
        )}
    </View>
)

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

const PostFooter = () => (
    <View style={styles.footerIconContainer}>
        <View style={styles.subFooterIconContainer}>
            <Icon imgStyle={styles.footerIcon} img={postFooterIcons[0].img} />
            <Icon imgStyle={styles.footerIcon} img={postFooterIcons[1].img} />
            <Icon imgStyle={styles.footerIcon} img={postFooterIcons[2].img} />
        </View>
        <View style={styles.subFooterSaveIcon}>
            <Icon imgStyle={styles.footerIcon} img={postFooterIcons[3].img} />
        </View>
    </View>
)

const Icon = ({ imgStyle, img }) => (
    <TouchableOpacity>
        <Image style={imgStyle} source={img} />
    </TouchableOpacity>
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
    },
    postFooterContainer: {
        marginHorizontal: 15,
        marginTop: 10
    },
    footerIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
    footerIconContainer: {
        flexDirection: 'row',
    },
    subFooterIconContainer: {
        flexDirection: 'row',
        width: '28%',
        justifyContent: "space-between"
    },
    subFooterSaveIcon: {
        flex: 1,
        alignItems: "flex-end"
    }

})

export { Post }