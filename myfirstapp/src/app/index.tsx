import { router } from "expo-router";
import {Text, View, StyleSheet, Button} from "react-native";
export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Open profile" onPress={() => {router.push("/profile")}}/>
      <Button title="Open places" onPress={() => {router.push("/places")}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
})