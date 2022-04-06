import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../shared/header'
import Arrow from '../../shared/Arrow'
import { theme } from '../../shared/theme';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const chartHeight = Dimensions.get('window').height;
const chartWidth = Dimensions.get('window').width;

export default function Home({navigation}) {
  const naviLeft = () => {
    navigation.pop();
  }
  const naviRight = () => {
    
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header str = "서비스를 선택해주세요" width = "316" style = {{fontSize : 30}}></Header>
      <Text style = {{marginLeft : '10%', fontFamily : 'IBMMe'}}>당신의 자립을 돕습니다.</Text>

      <View style = {{marginTop : 15, alignItems : 'center'}}>
        <View style = {{flexDirection : 'row'}}>
        <TouchableOpacity onPress = {() => navigation.navigate('구인메인')}>
          <View style = {styles.gridBox}>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>구인구직</Text>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>플랫폼</Text>
            <Entypo name="briefcase" size={45} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.gridBox}>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>주변 병원 &</Text>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>복지시설 찾기</Text>
            <FontAwesome5 name="hospital-user" size={45} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        </View>
       
        <View style = {{flexDirection : 'row'}}>
        <TouchableOpacity>
          <View style = {styles.gridBox}>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>맞춤형 정책 &</Text>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>지원사업</Text>
            <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>알리미</Text>
            <MaterialIcons name="policy" size={45} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style = {styles.gridBox}>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>주변 친구와</Text>
          <Text style = {{fontSize : 18, fontFamily : 'IBMMe'}}>알림 주고 받기</Text>
          <MaterialCommunityIcons name="phone-message" size={45} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        </View>
      </View>

      <View style = {{alignSelf : 'center', position : 'absolute', bottom : '5%'}}>
      <Arrow leftArrow = {naviLeft} rightArrow = {naviRight}></Arrow>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  gridBox : {
    borderWidth : 2,
    borderColor : theme.mColor,
    borderRadius : 10,
    backgroundColor : 'white',
    width : chartWidth/2.7,
    height : chartWidth/2.7,
    margin : 8,
    padding : 7
  },
  iconPos : {
    alignSelf : 'flex-end', 
    position : 'absolute', 
    bottom : '5%', 
    right : '5%'
  }
});
