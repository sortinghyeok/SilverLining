import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Alert } from 'react-native';
import {useState, useEffect} from 'react';
import { WidthAndHeight } from '../../shared/Dimension';
import { theme } from '../../shared/theme';
const windowWidth = WidthAndHeight.windowWidth;
const windowHeight =WidthAndHeight.windowHeight;

export default function FindEmpDetail({navigation}) {
  const [workTime, setWorkTime] = useState(0);
  const [workDay, setWorkDay] = useState("");
  const Submit = () => {
    Alert.alert('알림', '이대로 등록할까요?', [
      {
        text: '공고 등록!',
        onPress: () => navigation.navigate('공고등록'),
        
      },
      {
        text: '취소',
        onPress: () => console.log('제출했음'),
      },
    ]);
    //navigation.navigation('구인상세');
  }

  return (
    <View style={styles.container}>
     
     <Text style = {{fontFamily : 'Sans', fontSize : 28, marginLeft : '10%'}}>
       Silverlining
     </Text>
     <Text style  = {{
         fontSize : 15, 
         fontFamily : 'IBMMe', 
         marginLeft : '10%', 
         borderWidth : 1, 
         borderColor : 'white', 
         borderBottomColor : theme.mColor,
         width : windowWidth*0.75
         }}>구인 글 등록</Text>
     <Text style = {{fontSize : 23, fontFamily : 'IBMMe', marginLeft : '10%'}}>
       공고 상세
     </Text>
     
 
     <SafeAreaView style = {{height : windowHeight*0.6, borderWidth : 3, borderColor : theme.mColor, paddingTop : 5, paddingBottom : 10}}>
         <ScrollView>
             <Text style = {styles.workCondition}>근무 조건</Text>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>근무 시간</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>근무 요일</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>급여</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>근무 지역</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>업직종</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>고용 형태</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             
             <Text style = {styles.workCondition}>지원 조건</Text>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>연령</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>성별</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>학력</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>우대 조건</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{...styles.workCondition, width :  110}}>담당자 정보</Text>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>담당자</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>문의 방법</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

             <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>연락처</Text>
             <KeyboardAvoidingView style = {{...styles.textInput, marginVertical : 5}}>
                 <TextInput>
                 </TextInput>
             </KeyboardAvoidingView>

         </ScrollView>
     </SafeAreaView>
 
    <TouchableOpacity style = {{
    justifyContent : 'center',
    alignSelf : 'center', 
    marginTop : '3%'}}
    onPress = {() => Submit()}
      >
        <View 
        style= 
        {{borderWidth : 3,
         borderRadius : 4,
         borderColor : theme.mColor,
         padding : 15,
         }}
         
         >
        <Text style = {{fontFamily : 'IBMMe', fontSize : 20,}}>공고 등록</Text>
        </View>
       
      </TouchableOpacity>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center',
  },
  stretch: {
    width: 100,
    height: 100,
    resizeMode: 'stretch',
  },
  workCondition : {
    marginLeft : '10%',
    fontFamily : 'IBMMe',
    fontSize : 20,
    marginVertical : 5,
    borderWidth : 2,
    borderColor : 'white',
    borderBottomColor : theme.mColor,
    width :  90
  },
  textInput : {
    backgroundColor : theme.mColor, 
    left : '10%', 
    width : 200,
    borderWidth : 2, 
    borderColor : theme.mColor, 
    borderRadius : 5,
    paddingLeft : 10
  }
});
