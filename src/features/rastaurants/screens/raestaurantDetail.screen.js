import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { SafeArea } from '../../../components/utility/safe-area.component'
import { RestaurantInfoCard } from '../components/restaurant-info-card.component'
import { List } from 'react-native-paper'

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    const [state, setState] = useState({
        breakfast: false,
        lunch: false,
        dinner: false,
        drink: false
    })
    return (
        <>
            <RestaurantInfoCard restaurant={restaurant} />
            <ScrollView>
                <List.Accordion
                    title="Breakfast"
                    left={props => <List.Icon {...props} icon="bread-slice" />}
                    expanded={state.breakfast}
                    onPress={() => setState(prov => ({ ...prov, breakfast: !prov.breakfast }))}
                >
                    <List.Item title="Eggs Benedict" />
                    <List.Item title="Classec Breakfast" />
                </List.Accordion>
                <List.Accordion
                    title="lunch"
                    left={props => <List.Icon {...props} icon="hamburger" />}
                    expanded={state.lunch}
                    onPress={() => setState(prov => ({ ...prov, lunch: !prov.lunch }))}
                >
                    <List.Item title="Burger w/ Fries" />
                    <List.Item title="Steak Sandwich" />
                    <List.Item title="Mushroom Soup" />
                </List.Accordion>
                <List.Accordion
                    title="dinner"
                    left={props => <List.Icon {...props} icon="food" />}
                    expanded={state.dinner}
                    onPress={() => setState(prov => ({ ...prov, dinner: !prov.dinner }))}
                >
                    <List.Item title="Spaghetti Bolognese" />
                    <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
                    <List.Item title="Steak Frites" />
                </List.Accordion>
                <List.Accordion
                    title="drink"
                    left={props => <List.Icon {...props} icon="cup" />}
                    expanded={state.drink}
                    onPress={() => setState(prov => ({ ...prov, drink: !prov.drink }))}
                >
                    <List.Item title="Coffee" />
                    <List.Item title="Tea" />
                    <List.Item title="Modelo" />
                    <List.Item title="Coke" />
                    <List.Item title="Fanta" />
                </List.Accordion>
            </ScrollView>
        </>
    )
}