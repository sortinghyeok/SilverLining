import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';


export default function Page4({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  
  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>4단계 - 전화번호 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>선생님이 사용하실</Text>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>전화번호를 알려주세요.</Text>
        <Text style = {{fontSize : 15, color : '#B5B5B5'}}>문자로 인증번호를 알려드릴게요.</Text>
        </View>
  
    <View style = {{flexDirection : 'row', justifyContent : 'space-between' }}>
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "전화번호 입력( '-' 없이)"
        keyboardType = 'numeric'
        >
        </TextInput>
       
        
        <View style = {{alignItems : 'center', alignSelf : 'center', justifyContent : 'center'}}>
          <Button title = "문자 전송" color = {theme.mColor}></Button>
        </View>
    </View>
        
    <View style = {{flexDirection : 'row', justifyContent : 'space-between' }}>
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "인증번호 입력"
        keyboardType = 'numeric'
        >
        </TextInput>
        <View style = {{alignItems : 'center', alignSelf : 'center', justifyContent : 'center'}}>
          <Button title = "인증 번호 입력" color = {theme.mColor}></Button>
        </View>
       

    </View>
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>{'\n\t\t'}선생님의 전화번호를 소중히 보관합니다.</Text>
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
