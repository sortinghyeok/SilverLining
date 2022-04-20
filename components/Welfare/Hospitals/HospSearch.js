import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';
import { Entypo } from '@expo/vector-icons'; 
import MyPageIconHeader from '../../../shared/MyPageIconHeader';
import { theme } from '../../../shared/theme';
import { WidthAndHeight } from '../../../shared/Dimension';

export default function HospSearch({navigation}) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [ok, setOK] = useState(true);
  const [markerData, setMarkerData] = useState("");
  const [initialRegion, setInitialRegion] = useState(null);
  const [lati, setLatitude] = useState(0);
  const [longi, setLongitude] = useState(0);
  
  const [idx, setidx] = useState(0);
  const [title, setTitle] = useState('');

  const getLocation = async() => {
    const {coords : {latitude, longitude},} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude, longitude}, {useGoogleMaps :false });
    console.log(location[0].region);
    console.log(latitude + " " + longitude);
    setLatitude(latitude);
    setLongitude(longitude);
  }

  useEffect(() => {
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
      setInitialRegion(location);
    })();
  }, []);

  const titleJumper = (str, name)=>{
    setTitle(str);
    console.log(title);
    navigation.navigate('병원상세', {'name' : name})
  }
  const callPage = (param) => { //추후 매개변수에 idx 추가할 것
    return (
      <Text>
        <JobInfo title = {param}></JobInfo>
      </Text>
    )
  }
  return (
    <View style={styles.container}>
      <View style = {{top : '7%'}}>
      <View style = {{position : 'absolute', right : '5%',}}><MyPageIconHeader /></View>
      <View style = {{flexDirection : 'row'}}>
        <Text style = {{fontFamily : 'IBMMe',  alignSelf : 'center', fontSize : 20, top : '2%'}}>
          맞춤 병원 찾기</Text>
      </View>
 
      <View style = {{borderWidth : 3, 
        borderRadius : 5,
        borderColor : theme.mColor,
        width : WidthAndHeight.windowWidth*0.9, 
        height : WidthAndHeight.windowHeight*0.53,
        top : '3%' }}>
      <MapView
        initialRegion={{
          latitude : 37.532600,
          longitude : 	127.024612,
          latitudeDelta : 0.7,
          longitudeDelta : 0.7,
        }}
        region = {{
          latitude : lati,
          longitude : longi, 
          latitudeDelta : 0.3, 
          longitudeDelta :0.3}}
        style={[styles.map]}
        loadingEnabled={true}
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
      >
        
        <Marker
          coordinate={{latitude : 37.485, longitude : 126.57}}
          title= "강화 노인병원"
          description="노인병원"
          onPress={() => {console.log('1번 체크 확인')}}
        />
        <Marker
        
        coordinate={{latitude : 37.475, longitude : 126.70}}
        title= "예시2타이틀"
        description="예시2디스크립션"
      />
      <Marker
        
        coordinate={{latitude : 37.465, longitude : 126.77}}
        title= "예시3타이틀"
        description="예시3디스크립션"
     
      />
       <Marker
        
        coordinate={{latitude : 37.465, longitude : 126.77}}
        title= "예시3타이틀"
        description="예시3디스크립션"
     
      />
        
      </MapView>


      </View>
     
      
      <StatusBar style="auto" />
    </View>
    <TouchableOpacity style = {{position : 'absolute', bottom : '5%',}}
    onPress = {() => titleJumper('병원상세', '강화 노인 병원')}
    >
    <View style = {styles.grid} >

        <Text style = {{fontSize : 15, fontFamily : 'IBMMe' }}>
          인천시 강화도
        </Text>
        <Text style = {{fontSize : 20, fontFamily : 'IBMMe' }}>
          강화 노인병원
        </Text>
        
        <View style= {styles.flexRow}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text> 
          종류 : 노인 요양병원
        </Text>
        </View>
        <View style= {styles.flexRow}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text> 
          전화번호 : 032-333-3332
        </Text>
        </View>
        <View style= {styles.flexRow}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text> 
          주소 : 인천광역시 강화군 광화리 53-2
        </Text>
        </View>
        <View style= {styles.flexRow}>
        <Entypo name="dot-single" size={24} color="black" />
        <Text> 
          개장 시간 : 09:00 ~ 18:00
        </Text>
        </View>
        
     
    </View>
    </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  map: {
    width: Dimensions.get('window').width*0.88,
    height: Dimensions.get('window').height*0.52,
  },
  grid : {
    width: Dimensions.get('window').width*0.9,
    height: Dimensions.get('window').height*0.25,
    borderWidth : 2,
    borderColor : 'white',
    borderTopColor : theme.mColor,
    
  },
  flexRow : {
    flexDirection : 'row',
    alignContent : 'center'
  }
});