import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import Header from '../../shared/header';
import { theme } from '../../shared/theme';
import { WidthAndHeight } from '../../shared/Dimension';
import MyPageIconHeader from '../../shared/MyPageIconHeader';
import { MaterialIcons,  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
const windowWidth = WidthAndHeight.windowWidth;
const windowHeight = WidthAndHeight.windowHeight;
export default function JobSearch({navigation}) {
  return (
    <View style={styles.container}>
      <View style = {{position : 'absolute', top : '8%', right : '10%'}}>
      <MyPageIconHeader></MyPageIconHeader>
      </View>
      <Header str = '구인 정보 등록'  width = '240'>
        
      </Header>
      <View style = {{flexDirection : 'row', alignSelf : 'center'}}>

      <TouchableOpacity onPress = {() => navigation.navigate('구인지도')}>
      <View style  = {{...styles.gridBox, }}>
          <View style = {{flexDirection : 'row'}}>
              <MaterialCommunityIcons name="shopping-search" size={45} color={theme.mColor} /><Text style  = {styles.textStyle}>구직자용</Text>
          </View>
          
          <Text style = {{fontSize : 20, marginVertical : 15, fontFamily : 'IBMMe'}}>
              구인글 등록
          </Text>
          <Text style  = {{fontSize : 17, marginTop : 5, fontFamily : 'IBMMe'}}>
          나에게 꼭 맞는{'\n'}맞춤형 구인정보
          </Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity onPress = {() => navigation.navigate('공고등록')}>
      <View style  = {{...styles.gridBox}} >
          <View style = {{flexDirection : 'row'}}>
              <MaterialIcons name="person-search" size={45} color={theme.mColor} /><Text style  = {styles.textStyle}>기업용</Text>
          </View>

          <Text style = {{fontSize : 20, marginVertical : 15, fontFamily : 'IBMMe'}}>
              내가 쓴 구인글
          </Text>
          <Text style  = {{fontSize : 17, marginVertical : 5, fontFamily : 'IBMMe'}}>
          내 구인글 확인{'\n'}지원자 조회
          </Text>
      </View>
      </TouchableOpacity>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  gridBox : {
    borderWidth : 3,
    borderColor : theme.mColor,
    borderRadius : 10,
    backgroundColor : 'white',
    width : windowWidth/2.7,
    height : windowHeight / 3,
    margin : 8,
    padding : 7
  },
});
