import { StatusBar } from "react-native";
import styled from "styled-components";


export const SafeArea = styled.View`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
    background-color: ${props => props.theme.colors.bg.primary}
`;