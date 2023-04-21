import { ScrollView, TouchableOpacity } from 'react-native'
import React from 'react';
import styled from 'styled-components';
import { Spacer } from '../spacer/spacer.component';
import { CompactRestaurantInfo } from '../restaurant/campact-restaurant-info.component';
import { Text } from '../typography/text.component';


const FavouritesWrapper = styled.View`
  padding: 16px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (favourites.length == 0) return null;
  return (
    <FavouritesWrapper>
      <Spacer size={"small"}>
        <Text variant={"caption"}>Favourites</Text>
      </Spacer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          favourites.map((restaurant, index) => {
            return (
              <Spacer key={index} position={"left"} size={"medium"}>
                <TouchableOpacity onPress={() => onNavigate('restaurantDetail', {
                  restaurant: restaurant
                })}>
                  <CompactRestaurantInfo restaurant={restaurant} />
                </TouchableOpacity>
              </Spacer>
            )
          })
        }
      </ScrollView>
    </FavouritesWrapper>
  )
}