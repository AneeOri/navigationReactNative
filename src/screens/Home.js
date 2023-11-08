
/*We can access to the navigation property because our father here is RootNavigator 
  through the Stack*/
  
/**Another way is adding the useNavigation Hook from react-navigation/native*/

import React from 'react';
import { View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/global';
import { useNavigation } from '@react-navigation/native';

export default function Home () 
{
  const navigation = useNavigation();
  
  return (
    <View style={globalStyles.screenContainer}>
        
    </View>
  )
}
