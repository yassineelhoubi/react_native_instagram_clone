import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen, NewPostScreen, LoginScreen } from './screens'


const Stack = createStackNavigator()

// const screenOptions = {
//     header: false
// }

const SingedInStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='LoginScreen'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='NewPostScreen' component={NewPostScreen} />
                <Stack.Screen name='LoginScreen' component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SingedInStack
