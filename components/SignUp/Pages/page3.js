import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';


export default function Page3({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  
  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>3단계 - 성함, 생년월일 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 25,fontFamily : 'IBMMe'}}>선생님의 성함과</Text>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>생년월일을 입력해주세요.</Text>
        </View>
  
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "성함 입력"
        keyboardType='default'
        >
        </TextInput>
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor}} 
        placeholder = "생년월일 입력(예 19550101)"
        keyboardType='number-pad'
        >
        </TextInput>
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>{'\n\t\t'}선생님의 정보는 외부에 유출되지 않습니다.</Text>
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
