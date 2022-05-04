import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Alert } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState, useEffect} from 'react';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import { WidthAndHeight } from '../../../shared/Dimension';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Arrow from '../../../shared/Arrow';
const windowWidth = WidthAndHeight.windowWidth;
const windowHeight = WidthAndHeight.windowHeight;
export default function Page5({navigation}) {
  const [userAddress, setAddress] = useState("");
  const navi = useNavigation();
  var pageNum = 5;
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

  const getAddress = () => {
    let address =  "";
    AsyncStorage.getItem('su_address', (err, result) => { //user_id에 담긴 아이디 불러오기
      console.log(result); // result에 담김 //불러온거 출력
      setAddress(result);
    });
    return userAddress;
  }

  return (
    <View style = {styles.container}>
          <Header str = '회원가입' width = '150'></Header>

          <View style  = {{left : '10%', marginBottom : '5%'}}>
            <View style = {{flexDirection : 'row'}}>
            <TouchableOpacity  >
                <MaterialCommunityIcons onPress = {() => numberSetter(1)} name="numeric-1-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
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
            <MaterialCommunityIcons  onPress = {() => numberSetter(5)} name="numeric-5-circle-outline" size={45} />
          </TouchableOpacity>
          <TouchableOpacity >
            <MaterialCommunityIcons  onPress = {() => numberSetter(6)} name="numeric-6-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
          </TouchableOpacity>
        </View>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>5단계 - 주소 입력</Text>
        <View>
        <Text style = {{fontSize : 22, fontFamily : 'IBMMe'}}>거주하시는 주소를 알려주세요.</Text>
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>(고용 목적 가입의 경우, 기업 주소를 적어주세요.)</Text>
        </View>
  
        <TouchableOpacity style= {{justifyContent : 'center'}} onPress = {() => navi.navigate('주소찾기')}>
        <Text style = {{
          marginVertical : 10, 
          fontSize : 30, 
          fontFamily : 'IBMMe', 
          borderRadius : 7, 
          width : WidthAndHeight.windowWidth*0.6,
          textAlign : 'center', paddingTop : 10, borderWidth :4,  borderColor : theme.mColor,
          }}>
            주소 등록하기</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress = {() => Alert.alert('아래 등록한 주소로 바뀌지 않았으면, \n몇 초 뒤 다시 눌러주세요', getAddress(), [
           {
            text: '확인',
            onPress: () => console.log('확인 완료'),
          },
        ])}>
          <View>
            <Text style = {{fontSize : 20, fontFamily :'IBMMe',}}>
              눌러서 주소확인
            </Text>
          </View>
        </TouchableOpacity>
        <Text style = {{fontSize :20, marginLeft : '10%'}}>
          
        </Text>  
        
    </View>
    <View style = {{bottom : -10}}><Arrow leftArrow = {() => numberSetter(4)} rightArrow = {() =>numberSetter(6)}></Arrow></View>
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
