import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./Drawer";
import AuthStack from "./AuthStack/AuthStack";

export default function RootNavigator () {
  const user=false;
 return(
    <NavigationContainer>
      {user ? <MyDrawer/> : <AuthStack/>}
    </NavigationContainer>
 );
}