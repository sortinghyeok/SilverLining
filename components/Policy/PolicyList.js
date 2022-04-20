import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity, ScrollView} from 'react-native';
import Header from '../../shared/header';
import { theme } from '../../shared/theme';
import { WidthAndHeight } from '../../shared/Dimension';
import {useState} from 'react';
const windowHeight = WidthAndHeight.windowHeight;
const windowWidth = WidthAndHeight.windowWidth;

export default function PolicyList({navigation}) {
    const [contents, setContents] = useState([]);
    const [titles, setTitles] = useState([]);
  return (
    <View style={styles.container}>
    <View style = {{left : '10%'}}>
    <Text style = {{...styles.bannerText, 
        fontSize : 30, 
        fontFamily : 'Sans',
        marginVertical : 10
        }}>SilverLining</Text>
    </View>
    <Text style = {{left : '10%', fontFamily : 'IBMMe'}}>당신의 홀로 서기를 돕습니다.</Text>
    
    <View style = {{borderWidth : 1, width : windowWidth*0.8, left :'10%', marginBottom : 10, borderColor : theme.mColor}}></View>
    <Text style = {{left : '10%', fontFamily : 'IBMMe', fontSize : 18}}>나에게 적합한 경제 지원 정책</Text>
        <SafeAreaView>
            <ScrollView style = {styles.gathering}> 
                <TouchableOpacity style = {{marginTop : 10}} onPress = {() => navigation.navigate('정책정보', {'title' : '노인장기요양 보험제도 1'})}>  
                    <View>
                        <View style = {{ width : windowWidth*0.75, borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor,}}>
                            <Text style = {{fontSize : 17, fontFamily : 'IBMMe'}}>노인장기요양 보험제도 1</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 신체 활동 및 일상생활 지원</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 노인장기요양보험 가입자</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성 질병이 있는 자</Text>  
                        </View>
                    </View>                                           
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop : 10}}>  
                    <View>
                        <View style = {{ width : windowWidth*0.75, borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor,}}>
                            <Text style = {{fontSize : 17, fontFamily : 'IBMMe'}}>노인장기요양 보험제도 2</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 신체 활동 및 일상생활 지원</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 노인장기요양보험 가입자</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성 질병이 있는 자</Text>  
                        </View>
                        
                    </View>                                           
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop : 10}}>  
                    <View>
                        <View style = {{ width : windowWidth*0.75, borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor,}}>
                            <Text style = {{fontSize : 17, fontFamily : 'IBMMe'}}>노인장기요양 보험제도 3</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 신체 활동 및 일상생활 지원</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 노인장기요양보험 가입자</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성 질병이 있는 자</Text>  
                        </View>
                        
                    </View>                                           
                </TouchableOpacity>
                <TouchableOpacity style = {{marginTop : 10}}>  
                    <View>
                        <View style = {{ width : windowWidth*0.75, borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor,}}>
                            <Text style = {{fontSize : 17, fontFamily : 'IBMMe'}}>노인장기요양 보험제도 4</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 신체 활동 및 일상생활 지원</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 노인장기요양보험 가입자</Text>
                            <Text style = {{fontSize : 13, fontFamily : 'IBMMe'}}>- 의료급여수급권자로서 65세 이상 노인과 65세 미만의 노인성 질병이 있는 자</Text>  
                        </View>
                    </View>                                           
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  gathering : {
    borderWidth : 3,
    borderColor : theme.mColor,
    width : windowWidth*0.85,
    height: windowHeight*0.73,
    alignSelf : 'center',
    paddingLeft : '3%',
    borderRadius : 5,
  }
});
