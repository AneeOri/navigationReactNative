import { Button, ScrollView,View, Text, StyleSheet, Image,Pressable } from "react-native";

export default function ContactList({contacts, onChangeContact, onDeleteContact}){
return(
    <ScrollView>
        {contacts.map((contact, index) => (
            <Contact 
               key={index} 
               contact={contact.name}
               onChange={onChangeContact}
               onDelete={onDeleteContact}
            />
        ))}
    </ScrollView>
);
}

function Contact ({contact}){
    return(
        <View>
         <Text>{contact}</Text>
        </View>
    );
}