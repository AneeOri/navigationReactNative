import { View } from "react-native";
import { Colors , Text} from "../constants/colors";

export default function CustomHeader ({title}) {
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
}