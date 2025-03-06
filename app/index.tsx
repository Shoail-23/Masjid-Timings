import LoginScreen from "@/components/screen/loginScreen";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginScreen/>
      {/* <Text>Edit app/index.tsx to edit this screen.</Text> */}
    </View>
  );
}
