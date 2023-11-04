/** El stack se pone dentro de un root navigator para que pueda acceder a nuestra stack */
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import { Colors } from "../constants/colors";
import Home from "../screens/Home";
import Settings from "../screens/Settings";
//import CustomHeader from "./CustomHeader";

const HomeStack = createStackNavigator();

function CustomHeader ({title}) {
    return(
     <View
     style={{
        height: 80,
        width: '100%',
        backgroundColor: Colors.secondary,
        padding:10,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}
     >
        <Text
          style={{
              fontSize:20,
              fontWeight:'bold',
              color: Colors.ligth,
          }}
        >
        {title}
        </Text>
     </View>
    );
  }
  

export default function MyStack (){
    return (
        /**ScreenOoptions takes global updates and options is for customize every screen independently */
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown:true,
           // title: 'something',
           headerTitleAlign: "center",
           presentation:'transparentModal',
           gestureEnabled: true,
           header:({ route}) => 
             (<CustomHeader title={route.name}/>),
        }}
      >
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen 
           name="Settings" 
           component={Settings}
           //options={{title: 'settings'}}
        />
      </HomeStack.Navigator>
    );
}