import { View, StyleSheet, Dimensions } from "react-native";
import AppNavigation from "./Navigation/Navigation";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const maxWidth = 430;

  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          {
            height: height,
            width: width > maxWidth ? maxWidth : width, // nhỏ hơn hoặc bằng 430
          },
        ]}
      >
        <AppNavigation />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5, // shadow Android
    shadowColor: "#000", // shadow iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
