import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TextInput, ScrollView, Button, Dimensions, ActivityIndicator, SafeAreaView  } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';


export default function Page7({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  
  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>7단계 - 상세정보 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>혹시 평소 앓고 계신 </Text>
        <Text style = {{fontSize : 25,fontFamily : 'IBMMe', borderWidth : 1, borderColor : 'white', borderBottomColor : 'black'}}>질환이 있으세요?  </Text>
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>그러시다면, 밑의 선택지를 체크해주세요!  </Text>
        <Text>{"\n"}</Text>
        </View>
       
        <View style = {{flexDirection : 'row'}}>
          <Button title = "고혈압" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "류마티스/관절염" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "폐질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "신장질환" color = {theme.mColor}></Button>
        </View>
        <Text></Text>
        <View style = {{flexDirection : 'row'}}>
          <Button title = "간질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "당뇨병" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "노안/백내장" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "소화기 질환" color = {theme.mColor}></Button>
        </View>
        <Text></Text>
        <View style = {{flexDirection : 'row'}}>
          <Button title = "난청" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "보행장애" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "암" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "치매/알츠하이머" color = {theme.mColor}></Button>
        </View>
       
         
           
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  }, scrollView: {
    backgroundColor: 'orange',
    marginHorizontal: 20,
  },
});
