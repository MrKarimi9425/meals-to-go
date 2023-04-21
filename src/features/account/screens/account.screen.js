import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AccountBackground, AccountContainer, AccountCover, AnimationWrapper, AuthButton, Title } from '../components/account.styles'
import LottieView from "lottie-react-native"
import { Spacer } from '../../../components/spacer/spacer.component';

export const AccountScreen = ({ navigation }) => {
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
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          onPress={() => navigation.navigate('login')}>
          Login
        </AuthButton>
        <Spacer />
        <AuthButton
          icon="email"
          onPress={() => navigation.navigate('register')}>
          Register
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  )
}