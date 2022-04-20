import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import Header from '../../shared/header';
import { WidthAndHeight } from '../../shared/Dimension';
import { theme } from '../../shared/theme';
const windowHeight = WidthAndHeight.windowHeight;
const windowWidth = WidthAndHeight.windowWidth;

export default function Registered({navigation}) {
  return (
    <View style={styles.container}>
        <Header str = "나의 구인글 조회" width = '250'>
        </Header>

        <Text style = {{
                    left : '10%', 
                    fontFamily : 'IBMMe', 
                    fontSize : 20,
                    }}>모집 중</Text>
        <SafeAreaView>
            <ScrollView style = {styles.gathering}> 
                <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor,}}>
                            <Text>숭의도서관 관리직 / </Text><Text>2022-04-22</Text>
                        </View>
                    </View>                                           
                </TouchableOpacity>
                <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>미추홀구청 사무직 / </Text><Text>2022-04-01</Text>
                        </View>
                    </View>                                            
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>

        <Text style = {{
                    left : '10%', 
                    fontFamily : 'IBMMe', 
                    fontSize : 20,
                    }}>모집 완료</Text>
        <SafeAreaView>
            <ScrollView style = {styles.gathering}>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                <View>
                    <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                        <Text>강서구청 청소 / </Text><Text>2022-02-22</Text>
                </View>
                </View>                                            
            </TouchableOpacity>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>강서구청 아르바이트 / </Text><Text>2022-02-22</Text>
                        </View>
                    </View>                                            
            </TouchableOpacity>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>강서구청 인턴 / </Text><Text>2022-02-22</Text>
                        </View>
                    </View>                                            
            </TouchableOpacity>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>코로나 체온체크 / </Text><Text>2022-02-22</Text>
                        </View>
                    </View>                                            
            </TouchableOpacity>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>강서구청 청소 / </Text><Text>2022-02-22</Text>
                        </View>
                    </View>                                            
            </TouchableOpacity>
            <TouchableOpacity style = {{marginVertical : 10}}>  
                    <View>
                        <View style = {{flexDirection : 'row', borderWidth : 2, borderColor : 'white', borderBottomColor : theme.mColor, }}>
                            <Text>강서구청 관리직 / </Text><Text>2022-02-22</Text>
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
  },
  gathering : {
    borderWidth : 3,
    borderColor : theme.mColor,
    width : windowWidth*0.8,
    height: windowHeight*0.3,
    alignSelf : 'center',
    paddingLeft : '3%',
    borderRadius : 5,
  }
});
