import { Button, TextInput } from "react-native-paper";
import styled from "styled-components";
import { Text } from "../../../components/typography/text.component";
import { colors } from "../../../infrastructure/theme/colors";


export const AccountBackground = styled.ImageBackground.attrs({
    source: require("../../../../assets/home-bg.jpg")
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const AccountCover = styled.View`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255,255,255,0.3);
`;

export const AccountContainer = styled.View`
    background-color: rgba(255,255,255,0.7);
    padding: ${props => props.theme.space[4]};
    margin-top: ${props => props.theme.space[4]};
`;

export const AuthButton = styled(Button).attrs({
    mode: "contained",
})`
    background-color: ${props => props.theme.colors.brand.primary}
`;

export const AuthInput = styled(TextInput).attrs({

})`
    width: 300px;
`;

export const Title = styled(Text)`
    font-size: 30px
`;

export const AnimationWrapper = styled.View`
    width: 100%;
    height: 40%
    position: absolute;
    top: 30px;
    padding: ${props => props.theme.space[2]}
`;