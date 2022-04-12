import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState, useEffect} from 'react';
import { WidthAndHeight } from '../../../shared/Dimension';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

const windowWidth = WidthAndHeight.windowWidth;
const windowHeight = WidthAndHeight.windowHeight;
export default function Page5({navigation}) {
  const [pageNum, setPageNum] = useState(false);
  const [userAddress, setAddress] = useState("");
  const navi = useNavigation();


  const getAddress = () => {
    let address =  "";
    AsyncStorage.getItem('address', (err, result) => { //user_id에 담긴 아이디 불러오기
      console.log(result); // result에 담김 //불러온거 출력
      setAddress(result);
    });
    return userAddress;
  }

  return (
    <View style = {styles.container}>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>5단계 - 주소 입력 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>선생님이 거주하시는</Text>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>주소를 알려주세요.</Text>
        </View>
  
        <TouchableOpacity style= {{justifyContent : 'center'}} onPress = {() => navi.navigate('주소찾기')}>
        <Text style = {{fontSize : 30, fontFamily : 'IBMMe', borderWidth :4, borderColor : 'white', borderBottomColor : theme.mColor}}>
            {'\n\t\t'}주소 등록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => Alert.alert('등록한 주소로 바뀌지 않았으면, \n몇 초 뒤 다시 눌러주세요', getAddress(), [
           {
            text: '확인',
            onPress: () => console.log('확인 완료'),
          },
        ])}>
          <View style = {{left : '10%',}}>
            <Text style = {{fontSize : 20, fontFamily :'IBMMe'}}>
              등록된 주소 확인
            </Text>
          </View>
        </TouchableOpacity>
        <Text style = {{fontSize :20, marginLeft : '10%'}}>
          
        </Text>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  gridBox : {
    borderWidth : 3,
    borderColor : theme.mColor,
    borderRadius : 10,
    backgroundColor : 'white',
    width : windowWidth/2.7,
    height : windowHeight / 2,
    margin : 8,
    padding : 7
  },
});
