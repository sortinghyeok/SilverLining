import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';


export default function Page2({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  
  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20, fontFamily : 'IBMMe'}}>2단계 - 비밀번호 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>선생님이 사용하실</Text>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>비밀번호를 입력해주세요.</Text>
        <Text>{"\n"}</Text>
        </View>
  
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "비밀번호 정보 입력"
        keyboardType='default'
        >
        </TextInput>
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>{'\n\t\t'}선생님의 정보를 소중히 보관합니다.</Text>
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
