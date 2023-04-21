import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantScreen } from '../../features/rastaurants/screens/restaurant.screen';
import { RestaurantDetailScreen } from '../../features/rastaurants/screens/raestaurantDetail.screen';


const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator screenOptions={{
            ...TransitionPresets.ModalPresentationIOS,
            headerShown: false
        }}>
            <RestaurantStack.Screen name='restaurants' component={RestaurantScreen} />
            <RestaurantStack.Screen name='restaurantDetail' component={RestaurantDetailScreen} />
        </RestaurantStack.Navigator>
    )
}