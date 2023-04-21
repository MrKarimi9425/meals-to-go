import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RestaurantNavigator } from './restaurant.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context';
import { SettingsScreen } from '../../features/setting/screens/settings.screen';
import { SettingsNavigator } from './settings.navigator';

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    restaurant: "md-restaurant",
    map: "md-map",
    setting: "md-settings"
}

const createScreenOption = ({ route }) => {
    const tabBarIcon = TAB_ICON[route["name"]]
    return {
        tabBarIcon: ({ size, color }) => <Ionicons name={tabBarIcon} size={size} color={color} />,
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false
    }
}

export const AppNavigator = () => (
    <FavouritesContextProvider>
        <LocationContextProvider>
            <RestaurantsContextProvider>
                <Tab.Navigator screenOptions={createScreenOption}>
                    <Tab.Screen name='restaurant' component={RestaurantNavigator} />
                    <Tab.Screen name='map' component={MapScreen} />
                    <Tab.Screen name='setting' component={SettingsNavigator} />
                </Tab.Navigator>
            </RestaurantsContextProvider>
        </LocationContextProvider>
    </FavouritesContextProvider>
)