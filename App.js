import { StyleSheet, Text, View } from "react-native";
import Button from "./src/components/Button/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>count: 0</Text>
      <Button text={"increment"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
