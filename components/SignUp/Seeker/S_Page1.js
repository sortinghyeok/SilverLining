import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { theme } from '../../../shared/theme';
import Header from '../../../shared/header';
import React, {useState} from 'react';
import { Entypo } from '@expo/vector-icons'; 
import Arrow from '../../../shared/Arrow';
import { useNavigation } from '@react-navigation/native';
import { WidthAndHeight } from '../../../shared/Dimension';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function S_Page1({navigation}) {
  const [pageNum, setPageNum] = useState(1);

  const leftButton = () => {
    navigation.pop();
  }
  const rightButton = () => {
    navigation.navigate('보호자번호');
  }
  return (
    <View style = {styles.container}>
      <Header str = "회원가입" width = "132"></Header>
      <View style = {{left : '10%'}}>
      <Text style  = {{fontSize : 20, marginBottom : 10}}>6단계 - 일반이용자 정보입력</Text>

        <View style = {{ width : windowWidth*0.82, borderWidth : 1, borderColor : 'white', borderBottomColor : 'black'}}>
          <Text style = {{fontSize : 20}}>혹시 평소 앓고 계신 질환이 있으세요?</Text>
        </View>
        <Text style = {{fontSize : 15}}>그러시다면, 밑의 선택지를 체크해주세요!</Text>
        <Text style = {{fontSize : 15}}>원하시지 않으신다면 넘어가셔도 좋지만, </Text>
        <Text style = {{fontSize : 15}}>많이 고르실 수록 더 맞춤 정보를 얻을 수 있어요. </Text>
      </View>

    <View style = {{alignSelf : 'center', height : WidthAndHeight.windowHeight*0.4, marginTop : 15}}>
    <SafeAreaView>
        <ScrollView style = {{height : WidthAndHeight.windowHeight*0.43, padding : 10, borderWidth : 1, borderColor : theme.mColor, width : WidthAndHeight.windowWidth*0.8}}>
        <View style = {styles.gridMargin}>
          <Button title = "고혈압" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "류마티스/관절염" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "폐질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "신장질환" color = {theme.mColor}></Button>
          </View>
          <View style = {styles.gridMargin}>
          <Button title = "간질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "당뇨병" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "노안/백내장" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "소화기 질환" color = {theme.mColor}></Button>
          </View>
          <View style = {styles.gridMargin}>
          <Button title = "난청" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "보행장애" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "암" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "치매/알츠하이머" color = {theme.mColor}></Button>
        </View>

        <View style = {styles.gridMargin}>
          <Button title = "고혈압" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "류마티스/관절염" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "폐질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "신장질환" color = {theme.mColor}></Button>
          </View>

          <View style = {styles.gridMargin}>
          <Button title = "간질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "당뇨병" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "노안/백내장" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "소화기 질환" color = {theme.mColor}></Button>
          </View>

          <View style = {styles.gridMargin}>
          <Button title = "난청" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "보행장애" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "암" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "치매/알츠하이머" color = {theme.mColor}></Button>
        </View>
        <View style = {styles.gridMargin}>
          <Button title = "고혈압" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "류마티스/관절염" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "폐질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "신장질환" color = {theme.mColor}></Button>
          </View>

          <View style = {styles.gridMargin}>
          <Button title = "간질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "당뇨병" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "노안/백내장" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "소화기 질환" color = {theme.mColor}></Button>
          </View>

          <View style = {styles.gridMargin}>
          <Button title = "난청" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "보행장애" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "암" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "치매/알츠하이머" color = {theme.mColor}></Button>
        </View>
        <View style = {styles.gridMargin}>
          <Button title = "고혈압" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "류마티스/관절염" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "폐질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "신장질환" color = {theme.mColor}></Button>
          </View>
      
          <View style = {styles.gridMargin}>
          <Button title = "간질환" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "당뇨병" color = {theme.mColor}> </Button><Text>{"\t"}</Text>
          <Button title = "노안/백내장" color = {theme.mColor}></Button><Text>{"\t"}</Text>
          <Button title = "소화기 질환" color = {theme.mColor}></Button>
          </View>
           

        </ScrollView>
        </SafeAreaView>
    </View>
      

      <View style = {{alignSelf : 'center', position : 'absolute', bottom : '1.5%'}}>
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
  gridMargin : {
    flexDirection : 'row', 
    marginVertical : 5
  }
});
