import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { appRoute } from './router'

const Stack = createNativeStackNavigator()

const MainRoute = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {
                    appRoute.map(({ name, screen_id, component, layout, isSearchBar }) => {

                        const Component = component
                        const Layout = layout

                        return <Stack.Screen
                            name={name}
                            key={screen_id}
                        >
                            {
                                () =>
                                    <Layout ShowSearchBar={isSearchBar}>
                                        <Component />
                                    </Layout>
                            }
                        </Stack.Screen>
                    })
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainRoute



