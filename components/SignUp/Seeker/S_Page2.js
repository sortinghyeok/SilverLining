import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';
import { theme } from '../../../shared/theme';
import Arrow from '../../../shared/Arrow';
import Header from '../../../shared/header';
import React, {useState} from 'react';
import { WidthAndHeight } from '../../../shared/Dimension';

export default function S_Page2({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  const leftButton = () => {
    navigation.pop();
  }
  const rightButton = () => {
    navigation.navigate('회원가입완료');
  }
  return (
    <View style = {styles.container}>
        <Header str = "회원가입" width = "132"></Header>
      <View style = {{left : '10%'}}>

        <Text style  = {{fontSize : 20,}}>7단계 - (선택)보호자 정보 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 28}}>선생님의 보호자님의</Text>
        <Text style = {{fontSize : 28}}>전화번호를 알려주세요.</Text>
        <Text>{"\n"}</Text>
        </View>
  
        <TextInput style = {{borderWidth : 1, width : WidthAndHeight.windowWidth*0.7, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "(선택)보호자 전화번호 입력"
        keyboardType='numeric'
        >
        </TextInput>
        <View style = {{width : WidthAndHeight.windowWidth*0.9, padding : 15}}> 
          <Text style = {{fontSize : 20}}>해당 정보 입력은 필수가 아닙니다.</Text>
        </View>
  
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
});
