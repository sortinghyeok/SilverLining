import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text,  } from 'react-native';
import Postcode from 'react-native-daum-postcode';
import { WidthAndHeight } from '../../shared/Dimension';
import { theme } from '../../shared/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeData, getData } from '../../shared/AsyncStorage';


const api_key = "141867002e51d852da990f34ec2d53ac"
const windowHeight = WidthAndHeight.windowHeight;
const windowWidth = WidthAndHeight.windowWidth;


export default function FindAddress({navigation})  {
  const [postcode, setPostcode] = useState(null);
  const [addr, setAddr] = useState('');
  const [extraAddr, setExtraAddr] = useState('');

  return (
    <View style={{ flex: 1, top : '5%', alignItems: 'center', justifyContent: 'center', height : windowHeight*0.6, backgroundColor : 'white' }}>
      <Text style = {{fontSize : 25, marginVertical : 10, marginHorizontal :10, fontFamily : 'IBMMe'}}>주소 입력</Text>
      <View style = {{borderWidth : 1, width : windowWidth, borderColor : theme.mColor,}}>
      </View>
      
      <Postcode
        style={{ width: 400, height: 200 }}
        jsOptions={{ animated: true }}
        onSelected={(data) => {
          setAddr('');
          setExtraAddr('');
          setPostcode(data.zonecode);
          if (data.userSelectedType === 'R') {
            // 사용자가 도로명 주소를 선택했을 경우
        
            AsyncStorage.setItem('address', data.roadAddress, () => {
              console.log(data.roadAddress + "가 저장되었습니다!");
            });   // 저장하는 법
              
            navigation.pop();
            // 법정동명이 있을 경우 추가한다. (법정리는 제외)
            // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
            /*if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
              setExtraAddr(data.bname);
             
              if (data.buildingName !== '' && data.apartment === 'Y') {
                setExtraAddr((prev) => {
                  return prev !== '' ? `${prev}, ${data.buildingName}` : `${data.buildingName}`;
                });
              }
            } else {
              setExtraAddr('');
            }*/
          } else {
            // 사용자가 지번 주소를 선택했을 경우(J)
            setExtraAddr(data.jibunAddress);
            AsyncStorage.setItem('address', data.jibunAddress, () => {
              console.log(data.jibunAddress + "가 저장되었습니다!");
            });  
            navigation.pop();
          }
        }}
      />
      <Text>우편번호:{postcode}</Text>
      <Text>
        도로명/지번 :{addr} ({extraAddr})
      </Text>
    </View>
  );
};
