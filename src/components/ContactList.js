import { useState } from "react";
import { Button, ScrollView,View, Text, StyleSheet, Image,Pressable } from "react-native";
import MyInput from "./MyInput";

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
                <Text>{contact.name}</Text>
            </View>
        );
    }

    return(
        <View>
         <Text>{contactContainer}</Text>
        </View>
    );
}