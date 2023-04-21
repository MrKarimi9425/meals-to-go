import camelize from "camelize";
import { mockImages, mocks } from "./mock"

export const RestaurantRequest = (location) => {
    return new Promise((resolve, reject) => {
        const mock = mocks[location];
        if (!mock) {
            reject("not found")
        }
        resolve(mock)
    })
}


export const restaurantsTransform = ({ results = [] }) => {
    const mappedResults = results.map(restaurant => {
        restaurant.photos = restaurant.photos.map(photo => {
            return mockImages[Math.ceil(Math.random() * (mockImages.length))]
        });
        return {
            ...restaurant,
            address: restaurant.vicinity,
            rating: restaurant.rating,
            isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
            isClosedTemporarily: restaurant.business_status == "CLOSED_TEMPORARILY"
        }
    })
    return camelize(mappedResults);
};