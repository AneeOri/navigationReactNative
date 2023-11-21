import { useState } from "react";
import { View, Button , StyleSheet } from "react-native";
import MyInput from "./MyInput";
import { Colors } from "../constants/colors";

export default function AddContact({onAddContact}){
    const [name, setName] = useState('');
     
    function handleAdd(){
      setName('');
      onAddContact(name);
    }

    return(
       <View style={styles.container}>
         <View style={{width:'80%'}}>
            <MyInput label={'Add Contact'} value={name} onChangeText={setName}/>
         </View>
         <Button title="Add" color={Colors.primary} onPress={handleAdd}/>
       </View>
    );
}

const styles = StyleSheet.create({
  container:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      width:'100%',
      paddingVertical:'5%',
  },
});