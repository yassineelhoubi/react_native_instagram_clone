import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png'
const LoginScreen = () => (
    <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
        </View>
        <LoginForm />

    </View>
)


export { LoginScreen }

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 12
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 50,
    }
});