import React, { useEffect, useState } from "react";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import * as ImagePicker from 'expo-image-picker';
import Screen from "./app/components/Screen";
import { Button, Image } from "react-native";
import ImageInput from "./app/components/ImageInput";
export default function App() {
  const [imageUri,setImageUri] = useState([]);
  const requestPermission = async ()=>{
    const {granted} = await ImagePicker.getCameraPermissionsAsync();
    if(!granted) alert('you need to enable permission to access your camera')
  }
  useEffect(()=>{
    requestPermission()
  },[])

  const selectImage = async ()=>{
    try{
      const result = await ImagePicker.launchImageLibraryAsync()
      const newValue = result.assets[0].uri
      if(!result.canceled) setImageUri(prevValues => [...prevValues,newValue])
    }catch(err){
      console.log("error reading an image",err)
    }
  }
  return (
    <Screen>
      <ImageInput  onChangeImage={selectImage} imageUri={imageUri}/>
    </Screen>
    
  )
}
