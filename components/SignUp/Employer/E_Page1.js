import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, SafeAreaView } from 'react-native';
import { theme } from '../../../shared/theme';
import { WidthAndHeight } from '../../../shared/Dimension';
import Header from '../../../shared/header';
import Arrow from '../../../shared/Arrow';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
export default function E_Page1({navigation}) {
  const leftButton = () => {
    navigation.pop();
  }
  const rightButton = () => {
    navigation.navigate('회원가입완료');
  }
  return (
    
    <View style = {styles.container}>
        <Header str = "회원가입" width = "132"></Header>
        <View style = {{left : '10%', width : WidthAndHeight.windowWidth*0.8 }}>
          <Text style  = {{fontSize : 20,}}>6단계 - 상세정보 입력 {"\n"}</Text>
          <View>
          <Text style = {{fontSize : 25}}>몸 담고 계신 업종/기업은 어떻게 되시나요? </Text>
          <Text></Text>
          </View>
        </View>
        
    
    <View style = {{alignSelf : 'center', height : WidthAndHeight.windowHeight*0.4}}>
    <SafeAreaView>
    <ScrollView style = {{height : WidthAndHeight.windowHeight*0.43, padding : 10, borderWidth : 1, borderColor : theme.mColor, width : WidthAndHeight.windowWidth*0.8}}>
          <View style = {styles.jobs}>
            <Button title = "자영업" color = {theme.mColor}></Button><Text>{"\t"}</Text>
            <Button title = "의료" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
            <Button title = "공기관" color = {theme.mColor}></Button><Text>{"\t"}</Text>
            <Button title = "방송" color = {theme.mColor}></Button><Text>{"\t"}</Text>
            <Button title = "제조업" color = {theme.mColor}></Button>
          </View>
          <View style = {styles.jobs}>
            <Button title = "IT" color = {theme.mColor}></Button><Text>{"\t"}</Text>
            <Button title = "행정직" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
            <Button title = "기술직" color = {theme.mColor}></Button><Text>{"\t"}</Text>
            <Button title = "추후 추가" color = {theme.mColor}></Button>
          </View>
           

        </ScrollView>
        </SafeAreaView>
    </View>
        
    <View style = {{position : 'absolute', alignSelf : 'center', bottom : '3%' }}>
      <Arrow leftArrow = {leftButton} rightArrow = {rightButton}></Arrow>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  jobs : {
    flexDirection : 'row', 
    marginVertical : 5
  }
});
