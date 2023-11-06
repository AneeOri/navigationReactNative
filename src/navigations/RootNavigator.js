import { NavigationContainer } from "@react-navigation/native";
import MyStack from "./MyStack";
import MyButtonTab from "./ButtonTab";

export default function RootNavigator () {
 return(
    <NavigationContainer>
       <MyStack/> 
    </NavigationContainer>
 );
}