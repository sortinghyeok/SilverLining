import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { theme } from '../../shared/theme';
import Header from '../../shared/header';
import { WidthAndHeight } from '../../shared/Dimension';
import { MaterialIcons,  MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'; 
import MyPageIconHeader from '../../shared/MyPageIconHeader';
const windowWidth = WidthAndHeight.windowWidth;
const windowHeight = WidthAndHeight.windowHeight;
export default function JobMain({navigation}) {
  return (
    <View style={styles.container}>
    <View style = {{position : 'absolute', top : '8%', right : '10%'}}>
    <MyPageIconHeader></MyPageIconHeader>
    </View>
        
      <Header str = "구인구직 플랫폼" width = "240"></Header>
      <StatusBar style="auto" />
      <View style = {{flexDirection : 'row', alignSelf : 'center'}}>

        <TouchableOpacity onPress = {() => navigation.navigate('구인지도')}>
        <View style  = {{...styles.gridBox, }}>
            <View style = {{flexDirection : 'row'}}>
                <MaterialCommunityIcons name="shopping-search" size={45} color={theme.mColor} /><Text style  = {styles.textStyle}>구직자용</Text>
            </View>
            
            <Text style = {{fontSize : 20, marginVertical : 15, fontFamily : 'IBMMe'}}>
                구직정보 찾기
            </Text>
            <Text style  = {{fontSize : 17, marginTop : 5, fontFamily : 'IBMMe'}}>
            나에게 꼭 맞는{'\n'}맞춤형 구인정보
            </Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style  = {{...styles.gridBox}} onPress = {() => {navigation.navigate('')}}>
            <View style = {{flexDirection : 'row'}}>
                <MaterialIcons name="person-search" size={45} color={theme.mColor} /><Text style  = {styles.textStyle}>기업용</Text>
            </View>

            <Text style = {{fontSize : 20, marginVertical : 15, fontFamily : 'IBMMe'}}>
                구직정보 등록
            </Text>
            <Text style  = {{fontSize : 17, marginVertical : 5, fontFamily : 'IBMMe'}}>
            시니어 구인용{'\n'}구직정보 등록
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
  textStyle : {
      fontSize : 18,
      marginLeft : 3,
      marginVertical : '7%'
  }
});
