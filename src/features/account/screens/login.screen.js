import { StyleSheet, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import { AccountBackground, AccountContainer, AccountCover, AnimationWrapper, AuthButton, AuthInput, Title } from '../components/account.styles';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { ActivityIndicator } from 'react-native-paper';
import LottieView from "lottie-react-native";

export const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, isLoading, error } = useContext(AuthenticationContext);
    return (
        <AccountBackground>
            <AccountCover />
            <AnimationWrapper>
                <LottieView
                    autoPlay
                    loop
                    resizeMode="cover"
                    key={"animation"}
                    source={require("../../../../assets/watermelon.json")}
                />
            </AnimationWrapper>
            <Title>Meals to go</Title>
            <AccountContainer>
                <AuthInput
                    label={'E-mail'}
                    value={email}
                    textContentType="emailAddress"
                    keyboardType='email-address'
                    autoCapitalize='none'
                    onChangeText={setEmail}
                />
                <Spacer />
                <AuthInput
                    label={'Password'}
                    value={password}
                    textContentType="password"
                    secureTextEntry
                    autoCapitalize='none'
                    onChangeText={setPassword}
                />
                <Spacer>

                </Spacer>
                {
                    error &&
                    <Text variant={'error'}>{error}</Text>
                }
                <Spacer>
                    {!isLoading ?
                        <AuthButton
                            icon="lock-open-outline"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </AuthButton> :
                        <ActivityIndicator size={"small"} />}
                </Spacer>
            </AccountContainer>
        </AccountBackground>
    )
}