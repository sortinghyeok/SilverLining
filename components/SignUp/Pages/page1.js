import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
export default function Page1({navigation}) {
  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20,}}>1단계 - 아이디 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 28}}>선생님이 사용하실</Text>
        <Text style = {{fontSize : 28}}>아이디를 입력해주세요.</Text>
        <Text>{"\n"}</Text>
        </View>
  
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "아이디 정보 입력(이메일 형식)"
        keyboardType='email-address'
        >
        </TextInput>
        <Text style = {{fontSize : 15}}>{'\n\t\t'}선생님의 정보를 소중히 보관합니다.</Text>
        <Text>
          {'\n'}
        </Text>   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
