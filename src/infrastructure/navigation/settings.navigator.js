import React from 'react';
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import { SettingsScreen } from '../../features/setting/screens/settings.screen';
import { FavouritesScreen } from '../../features/setting/screens/favourites.screen';
import { CameraScreen } from '../../features/setting/screens/camera.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
    return (
        <SettingsStack.Navigator screenOptions={{
            headerShown: false,
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
            <SettingsStack.Screen name='settings' component={SettingsScreen} />
            <SettingsStack.Screen name='favourites' component={FavouritesScreen} />
            <SettingsStack.Screen name='camera' component={CameraScreen} />
        </SettingsStack.Navigator>
    )
}