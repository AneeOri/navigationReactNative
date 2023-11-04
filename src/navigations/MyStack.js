/** El stack se pone dentro de un root navigator para que pueda acceder a nuestra stack */
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Settings from "../screens/Settings";

const HomeStack = createStackNavigator();

export default function MyStack (){
    return (
        /**ScreenOoptions takes global updates and options is for customize every screen independently */
      <HomeStack.Navigator
        initialRouteName="Home"
        screenOptions={{
            headerShown:true,
            title: 'something',
        }}
      >
        <HomeStack.Screen name="Home" component={Home}/>
        <HomeStack.Screen 
           name="Settings" 
           component={Settings}
           options={{title: 'settings'}}
        />
      </HomeStack.Navigator>
    );
}