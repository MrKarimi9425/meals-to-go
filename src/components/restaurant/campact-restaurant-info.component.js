import React from 'react'
import styled from 'styled-components'
import WebView from 'react-native-webview';
import { Text } from '../typography/text.component';
import { Platform } from 'react-native';

const CompactImage = styled.Image`
    border-radius: 10px;
    width: 120px;
    height: 100px;
`;
const WebViewImage = styled(WebView)`
    border-radius: 100px;
    width: 120px;
    height: 100px;
`;

const Item = styled.View`
    padding: 10px;
    max-width: 120px;
    align-items: center;
`;

const isAndroid = Platform.OS == 'android';

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
    const Image = isAndroid && isMap ? WebViewImage : CompactImage;
    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text variant={"caption"}>
                {restaurant.name}
            </Text>
        </Item>
    )
}