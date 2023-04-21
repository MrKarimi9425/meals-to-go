import React from 'react'
import { CompactRestaurantInfo } from '../../../components/restaurant/campact-restaurant-info.component'

export const MapCallout = ({ restaurant }) => {
    return (
        <CompactRestaurantInfo restaurant={restaurant} isMap />
    )
}