import { Platform, StyleSheet, Text, View, Dimensions, StatusBar } from "react-native";
import BottomTab from './src/Navigation/BottomTab';

export default function App() {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
