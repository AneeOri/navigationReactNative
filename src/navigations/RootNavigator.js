import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./Drawer";

export default function RootNavigator () {
 return(
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
 );
}