import { Text, View } from "react-native";
import InputField from '../components/InputField'
import StoringData from '../components/StoringData'
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor:'#424242'
      }}
    >
    <InputField></InputField>
    <StoringData></StoringData>
    </View>
  );
}
