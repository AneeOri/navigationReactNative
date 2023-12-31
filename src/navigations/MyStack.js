/** El stack se pone dentro de un root navigator para que pueda acceder a nuestra stack */
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import { Colors } from "../constants/colors";
import Settings from "../screens/Settings";
import CustomHeader from "./CustomHeader";
import { useNavigation } from "@react-navigation/native";
import MyButtonTab from "./ButtonTab";

const HomeStack = createStackNavigator();

/*function CustomHeader ({title , navigator}) {
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
  }*/
  

export default function MyStack (){

    const navigator = useNavigation();
    return (
        /**ScreenOoptions takes global updates and options is for customize every screen independently */
      <HomeStack.Navigator
        initialRouteName="Home"
        component={CustomHeader}
        screenOptions={{
          //  headerShown:false,
          //  title: 'something',
           headerTitleAlign: "center",
           presentation:'transparentModal',
           gestureEnabled: true,
           /*header:({ route}) => 
             (<CustomHeader title={route.name}/>),*/
        }}
      >
        <HomeStack.Screen name="Root" component={MyButtonTab}/>
        <HomeStack.Screen 
           name="Settings" 
           component={Settings}
           //options={{title: 'settings'}}
        />
      </HomeStack.Navigator>
    );
}