import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Profile from "../screens/Profile";
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from "../constants/colors";
import MyTopTab from "./TopTab";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MyTab = createBottomTabNavigator();

export default function MyButtonTab() {
  const navigation = useNavigation();
    return(
        <MyTab.Navigator
          initialRouteName="TopTab"
          screenOptions={{
            headerTitleAlign: 'center',
            tabBarActiveTintColor: Colors.secondary,
          }}
        >
            <MyTab.Screen
              name="TopTab"
              component={MyTopTab}
              options={{
                headerRight: () => (
                  <Pressable onPress={() => navigation.navigate('Settings')}>
                    <FontAwesome5
                     name="cog"
                     style={{marginRight :15}}
                     size={28}
                     color={Colors.secondary}
                    />
                  </Pressable>
                ),
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