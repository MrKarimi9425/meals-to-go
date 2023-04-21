import { Card } from "react-native-paper";
import styled from "styled-components";

const Title = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${props => props.theme.fonts.heading};
    font-size: ${props => props.theme.fontSizes.body}
`;
const Address = styled.Text`
    color: ${(props) => props.theme.colors.ui.primary};
    font-family: ${props => props.theme.fonts.body};
    font-size: ${props => props.theme.fontSizes.caption}
`;

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    padding: ${props => props.theme.space[3]}; 
    background-color: ${(props) => props.theme.colors.bg.primary}
`;

const Info = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding: ${props => props.theme.space[2]} 0 ${props => props.theme.space[2]} 0;
`;
const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;
const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;
const Icon = styled.Image`
    width: 15px;
    height: 15px;
`;

export {
    Icon,
    Info,
    Address,
    Rating,
    RestaurantCard,
    RestaurantCardCover,
    Section,
    SectionEnd,
    Title
}
