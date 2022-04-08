import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

import {useState, useEffect} from 'react';
import { WidthAndHeight } from '../../shared/Dimension';
import { theme } from '../../shared/theme';

export default function Resume({route, navigation}) {
  const [title, setTitle] = useState("");
  
  useEffect(() => {
    setTitle(route.params.name);
    console.log(title);
  }, [title])

  const Submit = () => {
    Alert.alert('알림', '제출하시겠어요?', [
      {
        text: '제출할래요!',
        onPress: () => navigation.navigate('구인상세'),
        
      },
      {
        text: '제출하지 않을래요',
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
    <Text style  = {{fontSize : 15, fontFamily : 'IBMMe', marginLeft : '10%'}}>{title}에 지원하고 계십니다.</Text>
    <Text style = {{fontSize : 20, fontFamily : 'IBMMe', marginLeft : '10%'}}>
      OO님의 이력서
    </Text>
    <View style = {{
      marginLeft : '10%',
      width : WidthAndHeight.windowWidth*0.8,
      height : WidthAndHeight.windowHeight*0.5, 
      borderRadius :5, 
      backgroundColor : '#EFF1F7',
    
      justifyContent : 'center'
      }}>
      <View style ={{marginLeft : '10%'}}>
        <View style = {{flexDirection : 'row', }}>
          <View style = {{flexDirection : 'column'}}>
          <Text style = {{fontSize : 16, color : 'black', }}>
          이름 : 이OO
        </Text>
        <Text style = {{fontSize : 16, color : 'black', }}>
          생년월일 : 1953/01/01
        </Text>
        <Text style = {{fontSize : 16, color : 'black', }}>
        성별 : 여
        </Text>
          </View>
        
          <Image
          style = {{...styles.stretch, borderWidth : 2, borderRadius : 5, marginLeft : '5%', top : -10}}
          source = {{uri : 'https://image.kmib.co.kr/online_image/2020/0122/202001220402_11170924119205_1.jpg'}}></Image>
        </View>
      <View style = {{
        width : WidthAndHeight.windowWidth*0.65,
        borderWidth : 3,
        borderColor : '#EFF1F7',
        borderBottomColor : 'white'}}></View>


        <Text style = {{fontSize : 15, color : 'black', marginTop : '5%'}}>
        휴대폰 번호 : 010-1234-5678
        </Text>
        <Text style = {{fontSize : 15, color : 'black', }}>
        학력 : 고등학교 졸
        </Text>
        <Text style = {{fontSize : 15, color : 'black', }}>
        관심 분야 : 사무직/운전/교육
        </Text>
        <Text style = {{fontSize : 15, color : 'black', }}>
        운전 가능 여부 : O
        </Text>
        <Text style = {{fontSize : 15, color : 'black', }}>
        보유 자격증 :  xx 활용 기사
        </Text>
        <Text style = {{fontSize : 15, color : 'black', }}>
        직무 경험 :  도서관 사서, 선생님
        </Text>
      </View>
  
    </View>
    <TouchableOpacity style = {{
    justifyContent : 'center',
     alignSelf : 'center', 
     marginTop : '3%'}}
     onPress = {() => Submit()}
     >
       <View 
       style= 
       {{borderWidth : 1,
        borderRadius : 4,
        borderColor : theme.mColor,
        padding : 15,
        }}
        
        >
       <Text style = {{fontFamily : 'IBMMe', fontSize : 25}}>이력서 제출</Text>
       </View>
      
     </TouchableOpacity>
      <StatusBar style="auto" />
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
});
