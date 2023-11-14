import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../styles/global';
import AddContact from '../components/AddContact';

export default function Contacts (){
  const [contacts, setContacts] = useState(initialContacts);

  return (
    <View style={globalStyles.simpleContainer}>
      <AddContact/>
    </View>
  )
}

const initialContacts = [
  {id:0, name:'Sara Lee'},
  {id:1, name:'Kike Spe'},
  {id:2, name:'Vero Espa'},
]