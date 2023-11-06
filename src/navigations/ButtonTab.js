import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "../constants/colors";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
    return(
        <MyTab.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: Colors.secondary,
          }}
        >
            <MyTab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({color}) => (<FontAwesome5 name="home" size={25} color={color} />),
              }}
            />
             <MyTab.Screen
              name="Profile"
              component={Profile}
              options={{
                tabBarIcon: ({color}) => (<FontAwesome5 name="user" size={24} color={color} />),
              }}
            />
        </MyTab.Navigator>
    );
}