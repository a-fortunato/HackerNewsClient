import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './HomeScreen'

type RootStackParamList = {
  Home: undefined
  Comments: undefined
}

const Stack = createNativeStackNavigator<RootStackParamList>()

// ts error in Stack.Navigator can only be fixed updating @types/react to v18,
// but expo then fails to build. That's why we chose to ignore it temporarily
// until the problem is fixed. See more at: https://github.com/expo/expo-cli/issues/4427
function RootNavigation() {
  return (
    <NavigationContainer>
      {/* @ts-ignore */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Hacker News\' best stories' }} />
        <Stack.Screen name="Comments" component={HomeScreen} options={{ title: 'Story\'s comments' }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
