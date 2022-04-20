import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../../shared/theme';
import { SimpleLineIcons, AntDesign, MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';
export default function Title({navigation}) {
  return (
    <View style = {{...styles.container, paddingBottom : '10%'}}>
        <View style = {{...styles.title, alignSelf : 'center',}} >
            <Text style = {{fontSize:50, color : "black", fontFamily : 'Sans'}}>SilverLining</Text>
            <Text style = {{fontFamily : 'IBMMe', fontSize : 14, color : 'black'}}>통합형 시니어 자립 케어 플랫폼</Text>
        </View>
       

        <View style = {{alignItems : 'flex-start', marginVertical : '10%', marginLeft :'20%'}}>
          <View style = {{flexDirection : 'row'}}>
          <AntDesign name="login" size={50} color="black" style = {{alignSelf : 'center'}}/>
            <TouchableOpacity style={{marginLeft : 5}} onPress={() => navigation.navigate('로그인')}>
                    <Text style = {{...styles.button, fontFamily : 'IBMMe'}}>로그인</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection : 'row'}}>
          <AntDesign name="solution1" size={50} color="black" style = {{alignSelf : 'center'}} />
            <TouchableOpacity style={{marginLeft : 5}} onPress={() => navigation.navigate('회원가입1')}>
                <Text style = {{...styles.button, fontFamily : 'IBMMe'}}>회원가입</Text>
            </TouchableOpacity>
          </View>
          <View style = {{flexDirection : 'row'}}>
          <MaterialCommunityIcons name="content-paste" size={50} color="black" style = {{alignSelf : 'center'}}/>
            <TouchableOpacity style={{marginLeft : 5}} onPress={() => navigation.navigate('메인')}>
                <Text style = {{...styles.button, fontFamily : 'IBMMe'}}>메인 페이지</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style  = {styles.description}>
            <Text style = {{fontFamily : 'IBMMe', fontSize : 14, color : 'black'}}>이종혁, 이지율, 임유한</Text>
            <Text style = {{fontFamily : 'IBMMe', fontSize : 14, color : 'black'}}>컴퓨터공학종합설계 001 / 1팀</Text>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex : 1,
      backgroundColor : 'white',
  },
  title : {
    borderWidth : 2,
    borderColor : "white",
    borderBottomColor : theme.mColor,
    marginTop : "45%",
    marginBottom : 5,
  },
  button : {
    textAlign : 'center',
    textAlignVertical : 'center',
    borderWidth : 3,
    borderRadius : 10,
    borderColor : theme.mColor,
    width : 150,
    height : 60,
    color: "black",
    fontSize : 20,
    marginVertical : 5,
  },
  description : {
      padding : 10,
      width : '80%',
      borderWidth : 1,
      borderColor : 'white',
      borderTopColor : theme.mColor,
      borderBottomColor : theme.mColor,
      alignItems : 'center',
      alignSelf : 'center',
  }
});
