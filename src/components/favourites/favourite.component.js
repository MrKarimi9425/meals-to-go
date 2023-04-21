import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouritesContext } from "../../services/favourites/favourites.context";
import { AntDesign } from '@expo/vector-icons';

const FavouriteButton = styled(TouchableOpacity)`
    position: absolute;
    top: 25px;
    right: 25px;
    z-index: 9
`;


export const Favourite = ({ resaurant }) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext)

    const isFavourite = favourites.find(x => x.placeId === resaurant.placeId);
    return (
        <FavouriteButton
            onPress={() => {
                !isFavourite ? addToFavourites(resaurant) : removeFromFavourites(resaurant)
            }}
        >
            <AntDesign name={isFavourite ? "heart" : "hearto"} size={25} color={isFavourite ? "red" : "gray"} />
        </FavouriteButton>
    )
}