import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState, useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import axios from 'axios';
import Arrow from '../../../shared/Arrow';
import { WidthAndHeight } from '../../../shared/Dimension';
export default function Page6({navigation}) {
  useEffect(() => {
    AsyncStorage.getItem('address', (err, result) => { //user_id에 담긴 아이디 불러오기
      console.log(result); // result에 담김 //불러온거 출력
      setAddress(result);
    })
    
    console.log(userAddress);

    var url = 'https://dapi.kakao.com/v2/local/search/address.json?query=' + userAddress;
    axios.get(url,{headers: {'Authorization': 'KakaoAK 141867002e51d852da990f34ec2d53ac'}},)
    .then(function(response) { 
    console.log(JSON.stringify(response.data));
    console.log(response.data.documents[0].x);
    console.log(response.data.documents[0].y);
    })
  }, [])
  const navi = useNavigation();
 
  const [userAddress, setAddress] = useState("");
  var pageNum = 6;

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
  

  const setJumper = (val) => {

    AsyncStorage.setItem('su_status', val.toString(), () => {
      console.log('usertype : ' + val);
    });   // 저장하는 법

    console.log(val);
    if(val == 0)
    {
      navi.navigate('일반이용자가입')
    }
    else{
     navi.navigate('고용자가입')
    }
  }
  return (
        <View style = {styles.container}>
        <Header str = '회원가입' width = '150'></Header>

        <View style  = {{left : '10%', marginBottom : '5%'}}>
          <View style = {{flexDirection : 'row'}}>
          <TouchableOpacity  >
              <MaterialCommunityIcons onPress = {() => numberSetter(1)} name="numeric-1-circle-outline" size={45} color="black"  style = {{opacity : 0.3}}/>
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
          <MaterialCommunityIcons  onPress = {() => numberSetter(6)} name="numeric-6-circle-outline" size={45} color="black"/>
        </TouchableOpacity>
        </View>
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>6단계 - 사용자 분류 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 28,fontFamily : 'IBMMe'}}>어떤 목적으로 오셨어요?</Text>
        </View>
  
    <View style = {{  }}>   
        <TouchableOpacity style = {{marginVertical : 5}} onPress = {() => setJumper(0)}>
          <View style = {{borderWidth : 4, borderColor : theme.mColor, borderRadius : 5,  width :  WidthAndHeight.windowWidth*0.8}}>
          <Text style = {{fontSize : 20, padding : 5, fontFamily : 'IBMMe'}}>
            저는 서비스를 이용하려고 해요.
          </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style = {{marginVertical : 5}} onPress = {() => setJumper(1)}>
        <View style = {{borderWidth : 4, borderColor : theme.mColor, borderRadius : 5,  width :  WidthAndHeight.windowWidth*0.8}}>
        <Text style = {{fontSize : 20, padding : 5, fontFamily : 'IBMMe'}}>
            저는 직원을 뽑고 싶어요.
          </Text>
          </View>
        </TouchableOpacity>
    </View>
        
        <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>{'\n\t\t'}선생님의 방문 목적을 알려주세요.</Text>
        <Text>
          {'\n'}
        </Text> 
        
    </View>
    <View style = {{bottom : -10}}><Arrow leftArrow = {() => numberSetter(5)} rightArrow = {() =>numberSetter(6)}></Arrow></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

  },
});
