import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Page5({navigation}) {
  const navi = useNavigation();
  const [userType, setUserType] = useState(0);

  const setJumper = (val) => {
    setUserType(val);
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
        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>5단계 - 사용자 분류 {"\n"}</Text>
        <View>
        <Text style = {{fontSize : 28,fontFamily : 'IBMMe'}}>어떤 목적으로 오셨어요?</Text>
        </View>
  
    <View style = {{  }}>   
        <TouchableOpacity style = {{marginVertical : 5}} onPress = {() => navi.navigate('일반이용자가입')}>
          <View style = {{borderWidth : 4, borderColor : theme.mColor, borderRadius : 5}}>
          <Text style = {{fontSize : 20, padding : 5, fontFamily : 'IBMMe'}}>
            저는 서비스를 이용하려고 해요.
          </Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style = {{marginVertical : 5}} onPress = {() => navi.navigate('고용자가입')}>
        <View style = {{borderWidth : 4, borderColor : theme.mColor, borderRadius : 5}}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
