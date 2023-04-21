import { FlatList, Pressable } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import React, { useContext, useState } from 'react';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import styled from 'styled-components';
import { Spacer } from '../../../components/spacer/spacer.component';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context';
import { theme } from '../../../infrastructure/theme';
import { Search } from '../components/search.component';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { FadeInView } from '../../../components/animations/fade.animation';

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
        paddingHorizontal: 16
    }
})``;

const LoadingContainer = styled.View`
    position: absolute;
    top: 50%;
    left: 50%;
`;

const Loading = styled(ActivityIndicator)`
    margin-left: -25px;
`;

export const RestaurantScreen = ({ navigation }) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    const { favourites } = useContext(FavouritesContext);
    const [isToggled, setIsToggeled] = useState(false);

    return (
        <SafeArea>
            {
                isLoading &&
                <LoadingContainer>
                    <Loading size={'large'} color={theme.colors.brand.primary} />
                </LoadingContainer>
            }
            <Search isFavouritesToggled={isToggled} onFavouritesToggled={() => setIsToggeled(!isToggled)} />
            {isToggled && <FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
            <RestaurantList
                data={restaurants}
                renderItem={({ item }) => {
                    return (
                        <Pressable
                            onPress={() => navigation.navigate('restaurantDetail', {
                                restaurant: item
                            })}>
                            <Spacer position={"bottom"}>
                                <FadeInView>
                                    <RestaurantInfoCard restaurant={item} />
                                </FadeInView>
                            </Spacer>
                        </Pressable>
                    )
                }}
                keyExtractor={item => item.name}
            />
        </SafeArea>
    )
}