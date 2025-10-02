import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.content}>/index.tsx to edit this screen.</Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>
          Toggle Theme
        </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    fontSize: 22
  }
})