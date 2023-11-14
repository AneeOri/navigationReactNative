import { useState } from "react";
import { View, Button , StyleSheet } from "react-native";
import MyInput from "./MyInput";

export default function AddContact(){
    const [name, setName] = useState('');

    return(
       <View>
         <MyInput/>
       </View>
    );
}

const styles = StyleSheet.create({
  container:{

  },
});