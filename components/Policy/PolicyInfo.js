import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView,TouchableOpacity } from 'react-native';
import { MaterialIcons,  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import MyPageIconHeader from '../../shared/MyPageIconHeader';
import { theme } from '../../shared/theme';
import { WidthAndHeight } from '../../shared/Dimension';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons';


export default function PolicyInfo({route, navigation}) {
  const [title, setTitle] = useState();
  useEffect(() => {
    setTitle(route.params.title);
    console.log(title);
  }, [])

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
          <ScrollView style = {{height : WidthAndHeight.windowHeight*0.4,}}>
          <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>신청 대상</Text>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
              소득수준과 상관없이 노인장기요양보험 가입자(국민건강보험 가입자와 동일)와 그 피부양자
              </Text>
            </View>
            <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
              의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성 질병이 있는 자
              </Text>
            </View>
       
        </View>

        <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>급여 대상</Text>
          <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
              65세 이상 노인 또는 치매, 중풍, 파킨스병 등 노인성 질병을 앓고 있는 65세 미만인 자 중 6개월 이상의 기간 동안 일상생활을 수행하기 어려워 장기요양서비스가 필요하다고 인정되는 자
              </Text>
            </View>           
        </View>
        
        <View style  = {{marginVertical : '3%', marginLeft : '7%'}}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>장기요양인정 및 서비스 이용절차</Text>
          <View style= {{flexDirection : 'row'}}>
              <Entypo name="dot-single" size={24} color="black" />
              <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
              ① (공단 각 지사별 장기요양센터) 신청 → ② (공단직원) 방문조사 → ③ (등급판정위원회) 장기요양 인정 및 등급판정 → ④ (장기요양센터) 장기요양인정서 및 표준장기요양이용계획서 통보 → ⑤ (장기요양기관) 서비스 이용
              </Text>
            </View>           
        </View>


          </ScrollView>
        </SafeAreaView>
        <View style = {{borderWidth : 2, borderColor : theme.mColor, marginVertical : 5}}></View>
        <SafeAreaView>
            <ScrollView style = {{borderWidth : 3, 
                alignSelf :'center',
                width : WidthAndHeight.windowWidth*0.9,
                height : WidthAndHeight.windowHeight*0.17, 
                marginBottom : 5,
                borderColor : theme.mColor
                }}>

                <View>
                    <Text style = {{fontSize : 16, fontFamily : 'IBMMe', marginLeft : 20}}>선생님의 해당 사항은 다음과 같아요!</Text>
                    <View style= {{flexDirection : 'row'}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
                        65세 이상
                        </Text>
                    </View>   
                    <View style= {{flexDirection : 'row'}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
                        노인성 질병을 앓고 있는 자
                        </Text>
                    </View>
                    <View style= {{flexDirection : 'row'}}>
                        <Entypo name="dot-single" size={24} color="black" />
                        <Text style = {{width : WidthAndHeight.windowWidth*0.8}}> 
                        노인장기요양보험에 가입된 자
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
                  신청 전화하기
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
