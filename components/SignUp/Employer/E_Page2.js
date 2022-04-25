import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { theme } from '../../../shared/theme';
import Arrow from '../../../shared/Arrow';
import Header from '../../../shared/header';
import React, {useState, useEffect} from 'react';
import { WidthAndHeight } from '../../../shared/Dimension';
import AsyncStorage from '@react-native-async-storage/async-storage'
import SaveButton from '../../../shared/SaveButton';
import axios from 'axios';

export default function E_Page2({navigation}) {

  const [su_id, setID] = useState('');
  const [su_name, setName] = useState('');
  const [su_birthday, setBirth] = useState(null);
  const [su_phone, setPhone] = useState('');
  const [su_gender, setGender] = useState(0);
  const [su_pw, setPassword] = useState(0);

  const [su_status, setStatus] = useState(0);
  const [su_jobcate, setJobcate] = useState([]);

  useEffect(() => {
    AsyncStorage.getItem('su_id', (err, result) => { //user_id에 담긴 아이디 불러오기
      setID(result);
      console.log(su_id)
    });
    AsyncStorage.getItem('su_name', (err, result) => { 
      setName(result);
      console.log(su_name)
    });
    AsyncStorage.getItem('su_birth', (err, result) => { 
      if(result!=null)
      {
        let year = parseInt(result.substring(0, 4));
        console.log('년 : ' + year )
        let month = parseInt(result.substring(5, 6));
        console.log('달 : ' + month )
        let day = parseInt(result.substring(7, 8));
        console.log('일 : ' + day)
        let birthday = year + '-' + month + '-' +day;

        setBirth(birthday)
        console.log(su_birthday)
      }
     
    });
    AsyncStorage.getItem('su_phone', (err, result) => { 
      setPhone(result);
      console.log(su_phone)
    });
    AsyncStorage.getItem('su_gender', (err, result) => { 
      setGender(parseInt(result));
      console.log(su_gender)
    });
    AsyncStorage.getItem('su_pw', (err, result) => {
      setPassword(result);
      console.log(su_pw)
    });
    AsyncStorage.getItem('su_status', (err, result) => { //구인
      setStatus(parseInt(result));
      console.log(su_status)
    });

    AsyncStorage.getItem('su_jobcate', (err, result) => { //구인
      if(result == undefined || result == '' || result == null)
      {
        console.log('아직 정의되지 않음'); 
      }
      else
      {
        console.log(result + '으로 정의됨')
      }

      let diList = result != null ? result.split(' ') : null;
   
      setJobcate(diList);
      console.log(su_jobcate)
    });
  }, [su_id])
  
  const leftButton = () => {
    //navigation.pop();
  }
  const infoSet = (val) =>{
    setInfo(val)
    console.log(su_info);
  }


  const getFullInfo = () => {
    let str = "아이디 : " + su_id + '\n성함 : ' + su_name +  '\n성별 : ' + (su_gender == 1 ? '남자' : '여자')
    + '\n생년월일 : ' + su_birthday + '\n전화번호: ' + su_phone;
    console.log(str);
    return str;
  }

  return (
    <View style = {styles.container}>
        <Header str = "회원가입" width = "136"></Header>
      <View style = {{left : '10%'}}>

        <Text style  = {{fontSize : 20,fontFamily : 'IBMMe'}}>마지막 단계 - 추가 정보 입력</Text>
        <View>
        <Text style = {{fontSize : 23, fontFamily : 'IBMMe', marginTop : '15%'}}>본인 소개를 짧게 적어주세요.</Text>
        </View>
  
        <TextInput style = {{borderWidth : 1, width : WidthAndHeight.windowWidth*0.8, borderColor : 'white', 
    
        padding : 4, paddingLeft : 15, fontSize : 15, borderBottomColor : theme.mColor}} 
        placeholder = "자기소개"
        keyboardType='default'
        onChangeText={text => infoSet(text)}
        >
        </TextInput>
        <Text>{'\n'}</Text>
        
      
        
        <View style = {{width : WidthAndHeight.windowWidth*0.9, marginTop : 10}}> 
          <Text style = {{fontSize : 15, fontFamily : 'IBMMe'}}>해당 정보 입력은 필수가 아닙니다.</Text>
        </View>
  
      </View>

      <View style = {{alignSelf : 'center', bottom : '-5%' }}>
        <TouchableOpacity onPress= {() => Alert.alert('아래 등록한 주소로 바뀌지 않았으면, \n몇 초 뒤 다시 눌러주세요', getFullInfo(), [
            {
             text: '취소',
             onPress: () => console.log('확인 완료'),
           },
           { text: '가입할래요!', onPress: () => 
            {
             
              axios({
                url : 'https://prod.asherchiv.shop/app/users',
                method : 'get'
              })
              .then(function (response)
              {
                console.log(response)
              })
              .catch(function (error) {
                console.log(error)
              })
             
              

              axios({
                url : 'https://prod.asherchiv.shop/app/users',
                method : 'post',
                data : {
                  'user_id' : su_id,
                  'user_pw' : su_pw,
                  'user_name' : su_name,
                  'user_birth' : su_birthday,
                  'user_gender' : su_gender,
                  'user_phone' : su_phone,
                  'user_company_status' : su_status,
                  'user_experience' : su_info,
                  'user_drive_status' : su_car,
                  'user_siNm' : su_address,
                  'user_sggNm' : '',
                  'user_emdNm' : '',
                  'user_streetNm' : '',
                  'user_detailNm' : '',
                  'user_lat' : su_lat,
                  'user_lng' : su_lon,
                  'user_insurance_status' : su_ins,
                  'user_medium_income' : 0,
                  'user_guardian_phone' : su_guard,
                  'user_profile_img' : null,
                  'user_job_cate_list' : su_jobcate,
                  'user_disease_list' : su_disease
                }
              })
              .then(function (response)
              {
                console.log(response);
              })
              .catch(function (error)
              {
                console.log(error);
              })

            } },
         ])

          }>
          <View style = {{ borderWidth : 3, borderColor : theme.mColor, width : 200,
          borderRadius : 7, }} >
            <Text style = {{fontSize : 20, textAlign : 'center', paddingVertical : 10}}>회원가입</Text>
          </View>
        </TouchableOpacity>
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
