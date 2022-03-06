import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.container}>
      {/* instagram logo */}
      <TouchableOpacity>
        <Image style={styles.logo} source={require('../../assets/instagram_logo.png')} />
      </TouchableOpacity>
      {/* icons Container */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/plus_logo.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.icon} source={require('../../assets/heart.png')} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <Image style={styles.icon} source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 20
  },
  iconsContainer: {
    flexDirection: 'row',
    width: '33%',
    justifyContent: 'space-between',
  },
  icon: {
    width: 23,
    height: 20,
    marginLeft: 10,
    resizeMode: 'contain'
  },
  logo: {
    width: 100,
    height: 70,
    resizeMode: 'contain',
  },
  unreadBadge: {
    backgroundColor: '#FF3250',
    position: 'absolute',
    left: 20,
    bottom: 14,
    width: 16,
    height: 16,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10
  },
  unreadBadgeText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 10
  }
})
export { Header }