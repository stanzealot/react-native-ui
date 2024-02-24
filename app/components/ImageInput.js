import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ImageInput({imageUri,onChangeImage}) {
   
  return (
    <View style={styles.container}>
        <View style={styles.imageContent}>
            {
                imageUri &&

                imageUri.map((item,index)=>(

                    <Image source={{uri:item}} style={{width:80,height:80}} />
                ))
            } 
        </View>
        <TouchableOpacity style={styles.imageContainer} onPress={onChangeImage}>
            <MaterialCommunityIcons name="camera" color={colors.medium} size={100 * 0.5} />
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    gap:20

  },
  imageContainer:{
    width:80,
    height:80,
    backgroundColor:colors.light,
    borderRadius:20,
    alignItems:"center",
    justifyContent:"center"
  },
  imageContent:{
    flexDirection:"row",
    gap:3
  }

});

export default ImageInput;