import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { users } from "../../data"


const Stories = () => {
  return (
    <View style={{ marginBottom: 13 }}>
      <ScrollView horizontal showHorizontalScrollIndicator={false}>

        {users.map((story, index) => (
          <View key={index} style={styles.storyContainer}>

            <Image style={styles.story} source={{ uri: story.image }} />
            <Text style={styles.userStoryName}>
              {story.user.length > 10 ? story.user.slice(0, 15).toLowerCase() + '...' : story.user.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 3,
    borderColor: "#ff8501"
  },
  userStoryName: {
    fontSize: 10,
    color: "white",
    marginLeft: 10
  },
  storyContainer: {
    flexDirection: 'column',
    alignItems: 'center'
  }
})

export { Stories }