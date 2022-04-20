import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView, SafeAreaView } from 'react-native';
import { theme } from '../../../shared/theme';
import { WidthAndHeight } from '../../../shared/Dimension';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../../shared/header';
import Arrow from '../../../shared/Arrow';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
export default function E_Page1({navigation}) {

  const [clicked, setClicked] = useState([false, false, false, false, false, 
    false, false, false, false, false, 
    false, false, false, false, false,
    false, false, false, false, false])
  
  const setJob = (idx) => {
    let copyArray = [...clicked];
    if(!copyArray[idx])
    {
      copyArray[idx] = true;
    }
    else{
      copyArray[idx] = false;
    }
    
    setClicked(copyArray);
    console.log(copyArray);
  }

  const uploadJob = () => {
    let data = "";
    console.log(data);
   
    for (var i = 1; i<clicked.length; i++)
    {
      if(clicked[i])
        data = data + i + " ";
    }
    
    console.log('합쳐진 데이터 : ' + data);

    AsyncStorage.setItem('su_jobcate', data, () => {
      console.log('질병 선택 상태 : ' + data + '\n\n');
    });   // 저장하는 법

  }
  const leftButton = () => {
    navigation.pop();
  }
  const rightButton = () => {
    navigation.navigate('회원가입완료');
  }
  return (
    
    <View style = {styles.container}>
        <Header str = "회원가입" width = "136"></Header>
        <View style = {{left : '10%', width : WidthAndHeight.windowWidth*0.8 }}>
          <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>7단계 - 상세정보 입력 {"\n"}</Text>
          <View>
          <Text style = {{fontSize : 25, fontFamily : 'IBMMe'}}>몸 담고 계신 업종/기업은 어떻게 되시나요? </Text>
          <Text></Text>
          </View>
        </View>
        
    
    <View style = {{alignSelf : 'center', height : WidthAndHeight.windowHeight*0.25,}}>
    <SafeAreaView>
    <ScrollView style = {{height : WidthAndHeight.windowHeight*0.43, padding : 10, borderWidth : 1, borderColor : theme.mColor, width : WidthAndHeight.windowWidth*0.8}}>
          <View style = {styles.jobs}>
            <Button title = "자영업" color = {clicked[1] ? 'gray' : theme.mColor} onPress = {() => setJob(1)}></Button><Text>{"\t"}</Text>
            <Button title = "의료" color = {clicked[2] ? 'gray' : theme.mColor} onPress = {() => setJob(2)}> </Button><Text>{"\t"}</Text>
            <Button title = "공기관" color = {clicked[3] ? 'gray' : theme.mColor} onPress = {() => setJob(3)}></Button><Text>{"\t"}</Text>
            <Button title = "방송" color = {clicked[4] ? 'gray' : theme.mColor} onPress = {() => setJob(4)}></Button><Text>{"\t"}</Text>
            <Button title = "제조업" color = {clicked[5] ? 'gray' : theme.mColor} onPress = {() => setJob(5)}></Button>
          </View>
          <View style = {styles.jobs}>
            <Button title = "IT" color = {clicked[6] ? 'gray' : theme.mColor} onPress = {() => setJob(6)}></Button><Text>{"\t"}</Text>
            <Button title = "행정직" color = {clicked[7] ? 'gray' : theme.mColor} onPress = {() => setJob(7)}> </Button><Text>{"\t"}</Text>
            <Button title = "기술직" color = {clicked[8] ? 'gray' : theme.mColor} onPress = {() => setJob(8)}></Button><Text>{"\t"}</Text>
            <Button title = "추후 추가" color = {clicked[9] ? 'gray' : theme.mColor} onPress = {() => setJob(9)}></Button>
          </View>
           

        </ScrollView>
        </SafeAreaView>
    </View>
    <TouchableOpacity title = '저장' onPress={() => uploadJob()} style = {{
        backgroundColor : theme.mColor, width : WidthAndHeight.windowWidth*0.3,
        height : WidthAndHeight.windowHeight*0.06, alignSelf : 'center', marginTop : '3%'
      , borderWidth : 1, borderColor :theme.mColor, borderRadius : 4}}>
        <Text style = {{fontFamily : 'IBMMe', fontSize : 20, textAlign : 'center', color : 'white'}}>저장</Text>
      </TouchableOpacity>
      <Text style = {{alignSelf : 'center', fontFamily : 'IBMMe'}}>저장 버튼을 잊지 마세요!</Text>
    <View style = {{position : 'absolute', alignSelf : 'center', bottom : '3%' }}>
      <Arrow leftArrow = {leftButton} rightArrow = {rightButton}></Arrow>
      </View>
    </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  jobs : {
    flexDirection : 'row', 
    marginVertical : 5
  }
});
