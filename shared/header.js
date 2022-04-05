import { StyleSheet, Text, View } from 'react-native';
import { theme } from './theme';
import React from 'react';
export default function Header(props){
    return (
        <View style = {styles.banner}>
        <Text style = {{...styles.bannerText, fontSize : 20}}>SilverLining</Text>
        <Text style = {{
          ...styles.bannerText, marginTop : 5, fontSize : 33, fontWeight :"500", color: 'black',
          borderWidth : 1, borderColor :'white', borderBottomColor : theme.mColor, width : parseInt(props.width),
          }}>{props.str}</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    title : {
      marginTop : '20%',
      marginLeft : '10%',
    },
    banner : {
      marginTop : "20%",
    },
    bannerText : {
      marginLeft : "10%",
    },
  });
  