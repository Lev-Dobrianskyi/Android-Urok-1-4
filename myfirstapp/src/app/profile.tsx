import {useState} from "react";
import {StyleSheet, View, Image, Text, Button} from "react-native";

export default function profileScreen() {
  const [IsOnline, setIsOnline] = useState<boolean>(true);
  return (
        <View style={styles.container}>
            <Image source={{uri: ''}} style = {styles.avatar}/>
            <Text style={styles.name}>Lev Dobr</Text>
            <Text style={styles.email}>lev.dobr@example.com</Text>
            <Text>{IsOnline ? "Online" : "Offline"}</Text>
            <Button title={IsOnline ? "Set Offline" : "Set Online"} onPress={() => setIsOnline(!IsOnline)}/>
        </View>
  )
}
const styles = StyleSheet.create({
  container : {},
  avatar: {},
  name: {},
  email: {},
  button: {}
})