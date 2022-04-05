import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
import { theme } from '../../shared/theme'
import Header from '../../shared/header';
import { SimpleLineIcons, AntDesign, MaterialIcons,} from '@expo/vector-icons';
export default function Login({navigation}) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>

      <Header str = "로그인" width = "100"></Header>

      <View style = {{alignItems : "center", marginTop : "20%"}}>
        <View style = {{alignSelf : 'flex-start', flexDirection : 'row', marginLeft :'15%'}}>
          <AntDesign name="idcard" size={24} color="black" style = {{alignSelf : 'center'}}/>
          <Text style = {styles.buttonName}>아이디</Text>
        </View>
      
        <TextInput  style = {styles.input}
        placeholder='ID 입력 (이메일 형태로 부탁드릴게요)'
        onChangeText={setId}
        keyboardType = 'email-address'
        maxLength={25}
        value = {id}
        ></TextInput>

        <View style = {{alignSelf : 'flex-start', flexDirection : 'row', marginLeft :'15%'}}>
          <AntDesign name="lock1" size={24} color="black" style = {{alignSelf : 'center'}} />
          <Text style = {styles.buttonName}>비밀번호</Text>
        </View>
        <TextInput  style = {styles.input}
        placeholder='비밀번호 입력'
        onChangeText={setId}
        keyboardType = 'email-address'
        maxLength={25}
        value = {id}
        ></TextInput>
      </View>

      <View style = {{...styles.buttonPos, flexDirection :'row'}}>
            <View style = {{alignSelf : 'center', marginRight : 10}}> 
            <SimpleLineIcons name = "login" size = {40} color = 'black' />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('메인')}>
                <Text style = {styles.button}>로그인</Text>
            </TouchableOpacity>
            
        </View>
        <View style = {{...styles.buttonPos, flexDirection :'row'}}>
            <View style = {{alignSelf : 'center', marginRight : 10}}> 
            <MaterialIcons name="accessibility-new" size={40} color="black" />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('회원가입')}>
                    <Text style = {styles.button}>회원 가입</Text>
            </TouchableOpacity>
        </View>
        <View>
          <Text style = {styles.welcome}>
            어서오세요. 선생님.
          </Text>
          <Text style = {{fontSize : 20, textAlign : 'center'}}>
            좋은 하루 되시길 바랍니다.
          </Text>
        </View>
      <StatusBar style="auto" />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  banner : {
    marginTop : "20%",
  },
  bannerText : {
    marginLeft : "10%",
  },
  input : {
    borderWidth : 1,
    borderColor :"white",
    borderBottomColor : theme.mColor,
    width : "75%",
    fontSize : 18,
    height : 30,
    marginVertical : 10,
    marginBottom : 20,
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
  buttonPos : {
    marginLeft : '20%',
  },
  buttonName : {
    alignSelf : 'flex-start', marginLeft : 5, fontSize : 20
  },
  welcome : {
    marginTop : 35,
    fontSize : 20,
    textAlign : 'center'
  }, 
});
