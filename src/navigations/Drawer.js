import { createDrawerNavigator } from "@react-navigation/drawer";
import Notifications from "../screens/Notifications";
import MyStack from "./MyStack";

const Drawer = createDrawerNavigator();

export default function MyDrawer(){
    return(
        <Drawer.Navigator
          screenOptions={{
            headerShown: true,
            headerTitle:false
          }}
        >
            <Drawer.Screen name="Stack" component={MyStack}/>
            <Drawer.Screen name = "Notifications" component={Notifications}/>
        </Drawer.Navigator>
    );
}