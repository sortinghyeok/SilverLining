import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity, Dimensions } from 'react-native';
import Header from '../../shared/header'
import Arrow from '../../shared/Arrow'
import { theme } from '../../shared/theme';
import { Entypo, FontAwesome5, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const chartWidth = Dimensions.get('window').width;

export default function WelfareMain({navigation}) {
  const naviLeft = () => {
    navigation.pop();
  }
  const naviRight = () => {
    
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header str = "시설 찾기" width = "316" style = {{fontSize : 30}}></Header>

      <Text style = {{marginLeft : '10%', fontFamily : 'IBMMe', borderWidth : 2, borderColor :'white', borderTopColor : theme.mColor
    , width :  chartWidth*0.8}}>
          당신의 복지를 지원합니다.
        </Text>

      <View style = {{marginTop : 15, alignItems : 'center'}}>

        <View style = {{flexDirection : 'row'}}>
        <TouchableOpacity onPress = {() => navigation.navigate('병원찾기')}>
          <View style = {styles.gridBox}>
            <Text style = {{fontSize : 23, fontFamily : 'IBMMe'}}>나의 맞춤 병원 찾기</Text>
           
            <FontAwesome5 name="hospital" size={75} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        </View>
       
        <View style = {{flexDirection : 'row'}}>
        <TouchableOpacity onPress = {() => navigation.navigate('복지찾기')}>
          <View style = {styles.gridBox}>
            <Text style = {{fontSize : 23, fontFamily : 'IBMMe'}}>나의 맞춤형 복지시설</Text>
          
            <FontAwesome5 name="hands" size={70} color="black" style = {styles.iconPos}/>
          </View>
        </TouchableOpacity>
        </View>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent : 'center'
  },
  gridBox : {
    borderWidth : 4,
    borderColor : theme.mColor,
    borderRadius : 10,
    backgroundColor : 'white',
    width : chartWidth/1.5,
    height : chartWidth/2.4,
    margin : 8,
    paddingLeft : 15,
    paddingTop : 5
  },
  iconPos : {
    alignSelf : 'center',
    marginTop : 10,
  }
});
