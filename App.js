import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from './components/Home';
import Login from './components/Login/Login';
import Title from './components/Title/Title';
import SignUp from './components/SignUp/SignUp';
import SignedUp from './components/SignUp/SignedUp';
import Main from './components/Main/Main';
import Page5 from './components/SignUp/Pages/page5';
import E_Page1 from './components/SignUp/Employer/E_Page1';
import S_Page1 from './components/SignUp/Seeker/S_Page1';
import S_Page2 from './components/SignUp/Seeker/S_Page2';
import JobMain from './components/JobSearch/JobMain';
import JobSearch from './components/JobSearch/JobSearch';
import JobRecruit from './components/JobSearch/JobRecruit';
import JobInfo from './components/JobSearch/JobInfo';
import Resume from './components/JobSearch/Resume';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'


const Stack = createNativeStackNavigator();

export default function App() {
  	
  const [isLoadingReady, setIsReady] = useState(false);
  const loadFont = async () => {
    await Font.loadAsync({
      Sans: require("./assets/fonts/Sansation_Light.ttf"),
      IBMEx : require("./assets/fonts/IBMPlexSansKR-ExtraLight.ttf"),
      IBMMe : require("./assets/fonts/IBMPlexSansKR-Medium.ttf"),
    });

    console.log("로딩 완료");
  }
  const onFinish = () => {
    setIsReady(true);
  }
  if(!isLoadingReady)
  {
    return (
      <AppLoading 
      startAsync = {loadFont}
      onError = {console.warn}
      onFinish = {onFinish}/>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Title">
        <Stack.Screen name = "Title" component={Title} options = {{title : '타이틀', headerShown : false}}></Stack.Screen>
        <Stack.Screen name = "홈" component={Home} options = {{title : '홈', headerShown : false }}></Stack.Screen>
        <Stack.Screen name = "로그인" component={Login} options = {{title : '로그인', headerShown : false }}></Stack.Screen>
        <Stack.Screen name = "회원가입" component={SignUp} options = {{title : 'SilverLining', headerShown : false}}></Stack.Screen>
        <Stack.Screen name = "회원가입완료" component={SignedUp} options = {{title : '회원가입 완료!', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = "메인" component={Main} options = {{title : '메인페이지', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '고용자가입' component={E_Page1} options = {{title : '고용자가입', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '일반이용자가입' component={S_Page1} options = {{title : '일반이용자 가입', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '가입선택지' component={Page5} options = {{title : '가입선택지', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '보호자번호' component={S_Page2} options = {{title : '보호자번호', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '구인메인' component={JobMain} options = {{title : '구인메인', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '구인지도' component={JobSearch} options = {{title : '구인지도', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '공고' component={JobMain} options = {{title : '구인메인', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '구인상세' component={JobInfo} options = {{title : '구인상세', headerShown : false}} ></Stack.Screen>
        <Stack.Screen name = '이력서' component={Resume} options = {{title : '이력서', headerShown : false}} ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
