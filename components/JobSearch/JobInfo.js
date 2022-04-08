import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import { MaterialIcons,  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import MyPageIconHeader from '../../shared/MyPageIconHeader';
import { theme } from '../../shared/theme';
import { WidthAndHeight } from '../../shared/Dimension';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';

export default function JobInfo({route, navigation}) {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(route.params.name);
    console.log(title);
  }, [title])

  const leftArrow = () => {
    navigation.pop();
  }
  //props의 id와 title을 이용, 데이터를 불러옴, id부분은 데이터 베이스 연동이 안되어 아직 실행 못함
  return (
    <View style={styles.container}>
        <View style = {{top : '5%', marginBottom : 30, borderWidth : 1, borderColor :'white', borderBottomColor : theme.mColor, height : WidthAndHeight.windowHeight*0.08}}>
            <View style = {{position : 'absolute', right : '5%',}}><MyPageIconHeader /></View>
            <Text style = {{fontFamily : 'IBMMe', fontSize : 20, marginTop : '3%', paddingLeft : '5%'}}>상세 페이지</Text>
        </View>
        
        <View style = {{marginVertical : '3%', marginLeft : '7%'}}>
            <Text style = {{fontSize : 23, fontFamily : 'IBMMe'}}>{title}</Text>
            <Text style ={{marginTop : 5, }}>등록 일자 : 2022-03-14    모집 기한 : 2022-03-25</Text>
        </View>
        <View style ={{borderWidth : 3,  borderColor : theme.mColor}}></View>
      
        <SafeAreaView>
          <ScrollView style = {{height : WidthAndHeight.windowHeight*0.6,}}>
          <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>근무 조건</Text>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                근무 시간 : 09:00 - 18 : 00
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                근무 요일 : 주말 (토, 일)
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                급여 : 시급 8700원
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                근무 지역 : 성북구
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                업직종 : 공공기관/공기관/협회
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                고용형태 : 계약직
              </Text>
            </View>
       
        </View>

        <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>지원 조건</Text>
          <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                연령 : 만 55세 이상
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                성별 : 무관
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                학력 : 무관
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                우대조건 : 유사업무 경험
              </Text>
            </View>
        </View>

        <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>근무 조건</Text>
          <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                담당자 : 이xx
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                문의 방법 : 문자/전화
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text> 
                연락처 : 010-2188-8888
              </Text>
            </View>
        </View>
        
          </ScrollView>
        </SafeAreaView>
       <View style= {{ borderWidth : 3, borderColor : theme.mColor}}></View>
        
      <View style = {{flexDirection :'row',}}>
          <TouchableOpacity  style = {{marginTop : 10, marginLeft :'10%'}}>
        <Entypo name="arrow-with-circle-left" size={60} color={theme.mColor} onPress = {() => leftArrow()}/>
        </TouchableOpacity>

        <View style = {{
          width : WidthAndHeight.windowWidth*0.3,
          justifyContent :'center',
          marginLeft : '10%'
          }}>
            <TouchableOpacity style = {{
              backgroundColor : theme.mColor,
              borderRadius :4,
              alignItems : 'center',
              height : 40,
              justifyContent : 'center',
              marginTop : 5
              }}
             onPress = {() => navigation.navigate('이력서', {'name' : '숭의도서관 관리직 모집'})}
              >
                <Text style = {{fontSize : 15, color : 'white', fontSize : 16}}>
                  지원하기
                </Text>
            </TouchableOpacity>
        </View>
      
      </View>

       <Text style = {{marginTop : 15, textAlign :'center'}}>고객님의 정보를 소중히 생각합니다.</Text>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
