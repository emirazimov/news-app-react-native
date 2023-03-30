import { StatusBar } from "expo-status-bar"
import { View } from "react-native"
import { FullPostScreen } from "./screens/FullPost"
import { HomeScreen } from "./screens/Home"

export default function App() {
  return (
    <View>
      {/* <HomeScreen /> */}
      <FullPostScreen />
      <StatusBar theme="auto" />
    </View>
  )
}
