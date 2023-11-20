import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';

export default function Contacts (){
  const [contacts, setContacts] = useState(initialContacts);

  function handleAddContact(name){
    setContacts([...contacts,{id:nextId++, name}]);
  }
  function handleDeleteContact(id){
    setContacts(contacts.filter(contact => contact.id !== id));
  }
  function handleChangeContact(contact){
    setContacts(contacts.map( c => (c.id === contact.id ? contact : c)));
  }

  return (
    <View style={globalStyles.simpleContainer}>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </View>
  )
}

let nextId = 3;
const initialContacts = [
  {id:0, name:'Sara Lee'},
  {id:1, name:'Kike Spe'},
  {id:2, name:'Vero Espa'},
]