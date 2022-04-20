import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, } from 'react-native';
import { MaterialIcons,  MaterialCommunityIcons,  FontAwesome, Ionicons } from '@expo/vector-icons'; 
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import MyPageIconHeader from '../../../shared/MyPageIconHeader';
import { theme } from '../../../shared/theme';
import { WidthAndHeight } from '../../../shared/Dimension';
import { useState, useEffect } from 'react';

const windowHeight = WidthAndHeight.windowHeight;
const windowWidth = WidthAndHeight.windowWidth;
export default function InstDetail({route, navigation}) {
  const [title, setTitle] = useState();
  const [lati, setLatitude] = useState(0);
  const [longi, setLongitude] = useState(0);
  const [location, setLocation] = useState(null);
  const [ok, setOK] = useState(true);

  useEffect(() => {
    setTitle(route.params.name);
    console.log(title);
    (async () => {
        const permission = await Location.requestForegroundPermissionsAsync();
        console.log(permission.granted);
        if(!permission.granted)
        {
          setOK(false);
        }
        else
        {
          setOK(true);
        }
        
        getLocation();
        
        setLocation(location);
      })();
  }, [title])

  const getLocation = async() => {
    const {coords : {latitude, longitude},} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps :false });
    console.log(location[0].region);
    console.log(latitude + " " + longitude);
    setLatitude(latitude);
    setLongitude(longitude);
  }

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
            <Text style ={{marginTop : 5, }}>요양 병원</Text>
        </View>

        <View style ={{borderWidth : 3,  borderColor : theme.mColor}}></View>
        

        <View style = {{left : '10%'}}>
        <View style = {{...styles.locaInfo}}>
            <View style = {styles.infoBox}>
                <FontAwesome name="phone" size={45} color="black" />

                <Text style = {{alignSelf : 'center',
                 position: 'absolute',
                 left : '20%', 
                 fontFamily : 'IBMMe',
                 fontSize : 20
                 }}>
                    032 435 1950
                </Text>

                <TouchableOpacity style = {{
                backgroundColor : theme.mColor,
                position: 'absolute',
                right : '1%',
                borderRadius :10,
                height : 50,
                justifyContent : 'center',
                alignItems :'center',
                marginTop : 10,
                width : 70
                }}
                onPress = {() => navigation.navigate('이력서', {'name' : '숭의도서관 관리직 모집'})}
                >

                <Text style = {{fontSize : 15, color : 'white', fontSize : 16, fontFamily : 'IBMMe'}}>
                  전화
                </Text>
                
                </TouchableOpacity>

            </View>
            <View style = {styles.infoBox}>
            <FontAwesome name="map-marker" size={45} color="black" />
                <Text style = {{alignSelf : 'center',
                 position: 'absolute',
                 left : '20%',
                 fontFamily : 'IBMMe',
                 fontSize : 20
                 }}>
                    인천 강화군 강화로 51번길 1
                </Text>
            </View>
            <View style ={styles.infoBox}>
            <FontAwesome name="bus" size={45} color="black" />
                <Text style = {{alignSelf : 'center',
                 position: 'absolute',
                 left : '20%',
                 fontFamily : 'IBMMe',
                 fontSize : 20
                 }}>
                    강화 210번 정류장 주변
                </Text>
            </View>
            <View style = {styles.infoBox}>
            <FontAwesome name="clock-o" size={45} color="black" />
                <Text style = {{alignSelf : 'center',
                 position: 'absolute',
                 left : '20%',
                 fontFamily : 'IBMMe',
                 fontSize : 20
                 }}>
                    오후 14 : 00 까지 영업
                </Text>
            </View>
            
        </View>
        
      </View>
    
      <View style = {{borderWidth : 3, 
        borderRadius : 5,
        borderColor : theme.mColor,
        alignSelf : 'center',
        width: windowWidth*0.7,
        height: windowHeight*0.25,
        position: 'absolute',
        bottom : '2%',
        }}
        >
      <MapView
        initialRegion={{
          latitude : 37.532600,
          longitude : 127.024612,
          latitudeDelta : 0.7,
          longitudeDelta : 0.7,
        }}
        region = {{
          latitude : lati,
          longitude : longi, 
          latitudeDelta : 0.3, 
          longitudeDelta : 0.3
        }}
        style={[styles.map]}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        
        <Marker
          coordinate={{latitude : 37.465, longitude : 126.67}}
          title= "강화 노인 병원"
          description="도서관 관리직"
          
          onPress={() => {console.log('1번 체크 확인')}}
        />
      </MapView>
            
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
  locaInfo : {
      marginVertical : '5%',
      height : windowHeight*0.5,
  },
  infoBox : {
    flexDirection : 'row', 
    paddingVertical : 10,
    borderWidth : 2,
    borderColor : 'white',
    borderBottomColor : theme.mColor,
    width : windowWidth*0.8
  },
  map: {
    width: windowWidth*0.685,
    height: windowHeight*0.242
  },
});
