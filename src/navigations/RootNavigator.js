import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyDrawer from "./Drawer";
import AuthStack from "./AuthStack/AuthStack";
import { useSelector , useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { restoreToken } from "../features/auth/auth";
import Splash from "../screens/Splash";

export default function RootNavigator () {
  const {userToken, isLoading} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
     getValue();
  },[])

  async function getValue () {
    try {
        const value = await AsyncStorage.getItem("@token");
        if(value !== null){
          console.log('data restored!' , value);
          dispatch(restoreToken(value));
        }else{
          console.log('no data!', userToken);
          dispatch(restoreToken(null));
        }
    } catch (error) {
       console.log(error);
    }
 }

 if(isLoading) return <Splash/>;

 return(
    <NavigationContainer>
      {userToken ? <MyDrawer/> : <AuthStack/>}
    </NavigationContainer>
 );
}