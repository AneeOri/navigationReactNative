import { View, Text } from "react-native";
import { globalStyles } from "../../styles/global";
import MyInput from "../../components/MyInput";
import MyButton from "../../components/MyButton";

export default function Login({ navigation}){
    return(
        <View style={globalStyles.screenContainer}>
            <Text style={globalStyles.title}> Sign Up</Text>
            <MyInput label={'Email'}/>
            <MyInput label={'Password'} secureTextEntry/>
            <MyButton title={'Sign In'}/>
            <MyButton title={'Sign Up'} onPress={() => navigation.navigate('SignUp')}/>
        </View>
    );
}