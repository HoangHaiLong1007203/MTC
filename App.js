import { View, StyleSheet, Dimensions } from "react-native";
import AppNavigation from "./Navigation/Navigation";

export default function App() {
  const { width, height } = Dimensions.get("window");

  // tỷ lệ màn hình mobile chuẩn 1080x2220
  const aspectRatio = 1080 / 2220; // ~0.486
  const targetWidth = height * aspectRatio;

  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          {
            height: height,
            width: width < targetWidth ? width : targetWidth,
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
    backgroundColor: "#000", // nền ngoài đen
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
});
