import { useState } from "react";
import { Button, ScrollView,View, Text, StyleSheet, Image,Pressable } from "react-native";
import MyInput from "./MyInput";
import { getRandomPhoto } from "../utils/randomPhoto";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../constants/colors";

export default function ContactList({contacts, onChangeContact, onDeleteContact}){
return(
    <ScrollView>
        {contacts.map((contact, index) => (
            <Contact 
               key={index} 
               contact={contact}
               onChange={onChangeContact}
               onDelete={onDeleteContact}
            />
        ))}
    </ScrollView>
);
}

function Contact ({contact, onChange, onDelete}){
    const [isEditing, setIsEditing] = useState(false);
    let contactContainer;
    const memoPhoto = React.useMemo(() => getRandomPhoto(), []);
    if(isEditing){
        contactContainer=(
            <View>
                <MyInput
                  value={contact.name}
                  onChangeText={text => onChange({...contact,name:text})}
                />
            </View>
        );
    }else{
        contactContainer=(
            <View>
                <Text style={styles.name}>{contact.name}</Text>
            </View>
        );
    }

    return(
        <View style={styles.contactContainer}>
          <View style={styles.row}>
            <Image source={memoPhoto} style={styles.image}/>
            {contactContainer}
          </View>
          <View style={styles.row}>
            {
                isEditing ?(
                    <Button title='Save' onPress={() => setIsEditing(false)}/>
                ) : (
                    <Pressable onPress={() => setIsEditing(true)}>
                        <FontAwesome
                          name="edit"
                          size={24}
                          color={Colors.secondary}
                          style={{marginRight:15 , marginTop: 5}}
                        />
                    </Pressable>
                )
            }
            <Pressable onPress={() => onDelete(contact.id)}>
                <FontAwesome
                 name="trash"
                 size={24}
                 color={Colors.secondary}
                 style={{marginRight:15 , marginTop: 5}}
                />
            </Pressable>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contactContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderColor: Colors.gray,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 12,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    name: {
      fontSize: 17,
      fontWeight: 'bold',
      color: Colors.dark,
    },
  });