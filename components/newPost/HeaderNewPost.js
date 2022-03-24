import { StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native'
import React from 'react'

const HeaderNewPost = ({ navigation }) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={() => navigation.goBack()} >
                <Image style={{ width: 30, height: 30 }}
                    source={require('../../assets/back.png')} />
            </TouchableOpacity>
            <Text style={styles.headerText}>NEW POST</Text>
            <Text></Text>
        </View>

    )
}

export { HeaderNewPost }

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        marginRight: 25
    }

})