import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
import { WidthAndHeight } from '../../../shared/Dimension';
import Arrow from '../../../shared/Arrow';
export default function Page1({navigation}) {
  /*
  useEffect(() => {
    AsyncStorage.removeItem('su_address');
    AsyncStorage.removeItem('su_id');
    AsyncStorage.removeItem('su_pw');
    AsyncStorage.removeItem('su_name');
    AsyncStorage.removeItem('su_birthday');
    AsyncStorage.removeItem('su_phone');
    AsyncStorage.removeItem('su_status');//구인자1, 구직자0
    AsyncStorage.removeItem('su_jobcate');
    AsyncStorage.removeItem('su_disease');
    
    AsyncStorage.removeItem('su_car');
    AsyncStorage.removeItem('su_lat');
    AsyncStorage.removeItem('su_lon');
    AsyncStorage.removeItem('su_sggNum');
    AsyncStorage.removeItem('su_streetNm');
    AsyncStorage.removeItem('su_detailNm');
    AsyncStorage.removeItem('su_ins');
    AsyncStorage.removeItem('su_guard');
    AsyncStorage.removeItem('su_guard');
  }, []);
  */
  //const [email, setEmail]= useState("");
  const su_email = (val) => {
    //setEmail(val);
    AsyncStorage.setItem('su_id', val, () => {
      console.log('이메일 실시간 변화 저장 : ' + val)
    })
  };
  
  const numberSetter = (val) => {
    switch (val)
    {
      case 1 :
        navigation.navigate('회원가입1');
        break;
        case 2 :
        navigation.navigate('회원가입2');
        break;
        case 3 :
        navigation.navigate('회원가입3');
        break;
        case 4 :
        navigation.navigate('회원가입4');
        break;
        case 5 :
        navigation.navigate('회원가입5');
        break;
        case 6 :
        navigation.navigate('회원가입6');
        break;
        default : 
        break;
    }
  }
  return (
    <View style = {styles.container}>
    <Header str = '회원가입' width = '150'></Header>

    <View style  = {{left : '10%', marginBottom : '5%'}}>
      <View style = {{flexDirection : 'row'}}>
      <TouchableOpacity  >
              <MaterialCommunityIcons onPress = {() => numberSetter(1)} name="numeric-1-circle-outline" size={45} color="black" />
        </TouchableOpacity>
        <TouchableOpacity  >
          <MaterialCommunityIcons onPress = {() => numberSetter(2)} name="numeric-2-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
        </TouchableOpacity>
        <TouchableOpacity   >
          <MaterialCommunityIcons onPress = {() => numberSetter(3)} name="numeric-3-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
        </TouchableOpacity>
        <TouchableOpacity  >
          <MaterialCommunityIcons onPress = {() => numberSetter(4)} name="numeric-4-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <MaterialCommunityIcons  onPress = {() => numberSetter(5)} name="numeric-5-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <MaterialCommunityIcons  onPress = {() => numberSetter(6)} name="numeric-6-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
        </TouchableOpacity>
      </View>
        
    <Text style  = {{fontSize : 20, fontFamily : 'IBMMe'}}>1단계 - 아이디 입력</Text>

      <Text style = {{fontSize : 25,  fontFamily : 'IBMMe', marginBottom : '5%'}}>사용하실 아이디를 입력하세요.</Text>
      <TextInput 
          onChangeText={text => su_email(text)}
          style = {{
          borderWidth : 1,
          borderColor : 'white',
          paddingLeft : 15, 
          fontSize : 20, 
          paddingBottom : 5,
          borderBottomColor : theme.mColor,
          width : WidthAndHeight.windowWidth*0.8
        }} 
          placeholder = "아이디 정보 입력(이메일 형식)"
          keyboardType='email-address'
          >
          </TextInput>
          
          <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>{'\n\t\t'}선생님의 정보를 소중히 보관합니다.</Text>
    </View>

    <View style = {{bottom : -10}}>
    <Arrow leftArrow = {() => navigation.navigate('로그인')} rightArrow = {() =>numberSetter(2)}></Arrow>
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
