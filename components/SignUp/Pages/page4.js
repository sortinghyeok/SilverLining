import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';
import Arrow from '../../../shared/Arrow';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons'; 
import { WidthAndHeight } from '../../../shared/Dimension';
export default function Page4({navigation}) {
  var pageNum = 4;
  const [phone, setPhone] = useState('');

  const su_phone = (val) => {
    setPhone(val);
    AsyncStorage.setItem('su_phone', val, () => {
      console.log('전화번호 실시간 변화 저장 : ' + val)
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
                <MaterialCommunityIcons onPress = {() => numberSetter(1)} name="numeric-1-circle-outline" size={45} color="black" style = {{opacity : 0.3}} />
          </TouchableOpacity>
          <TouchableOpacity  >
            <MaterialCommunityIcons onPress = {() => numberSetter(2)} name="numeric-2-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
          </TouchableOpacity>
          <TouchableOpacity   >
            <MaterialCommunityIcons onPress = {() => numberSetter(3)} name="numeric-3-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
          </TouchableOpacity>
          <TouchableOpacity  >
            <MaterialCommunityIcons onPress = {() => numberSetter(4)} name="numeric-4-circle-outline" size={45} color="black"/>
          </TouchableOpacity>
          <TouchableOpacity >
            <MaterialCommunityIcons  onPress = {() => numberSetter(5)} name="numeric-5-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <MaterialCommunityIcons  onPress = {() => numberSetter(6)} name="numeric-6-circle-outline" size={45} color="black" style = {{opacity : 0.3}}/>
          </TouchableOpacity>
        </View>
        
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>4단계 - 전화번호 입력{'\n'}</Text>
 
        <View>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>선생님이 사용하실</Text>
        <Text style = {{fontSize : 25, fontFamily : 'IBMMe',  marginBottom : '7%'}}>전화번호를 알려주세요.</Text>
        
        </View>
  
    <View style = {{flexDirection : 'row', width : WidthAndHeight.windowWidth*0.8, justifyContent : 'space-between' }}>
        <TextInput style = {{borderWidth : 1, borderColor : 'white', padding : 10, width : WidthAndHeight.windowWidth*0.75,
        paddingLeft : 15, fontSize : 20, borderBottomColor : theme.mColor, marginBottom : '5%'}} 
        placeholder = "전화번호 입력( '-' 없이)"
        keyboardType = 'numeric'
        onChangeText= {text  => su_phone(text)}
        >
        </TextInput>
       
        
        
    </View>
        
   
    <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>선생님의 전화번호를 소중히 보관합니다.</Text>

       
    </View>
      <View style = {{bottom : -10}}> 
        <Arrow leftArrow = {() => numberSetter(3)} rightArrow = {() =>numberSetter(5)}></Arrow>
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
