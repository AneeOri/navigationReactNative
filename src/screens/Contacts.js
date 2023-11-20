import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';
import AddContact from '../components/AddContact';
import ContactList from '../components/ContactList';

export default function Contacts (){
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <View style={globalStyles.simpleContainer}>
      <AddContact/>
      <ContactList contacts={contacts}/>
    </View>
  )
}

const initialContacts = [
  {id:0, name:'Sara Lee'},
  {id:1, name:'Kike Spe'},
  {id:2, name:'Vero Espa'},
]