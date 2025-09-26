import { View, StyleSheet, Dimensions, PixelRatio } from "react-native";
import AppNavigation from "./Navigation/Navigation";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const pixelRatio = PixelRatio.get();

  // chuyển px thật sang dp
  const widthDp = width / pixelRatio;
  const heightDp = height / pixelRatio;

  // baseline Android: 360dp
  const minWidthDp = 360;

  // tính scale để ép về 360dp
  const scaleFactor = widthDp < minWidthDp ? 1 : widthDp / minWidthDp;

  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          {
            height: height / scaleFactor,
            width: width / scaleFactor,
            transform: [{ scale: scaleFactor }],
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
    backgroundColor: "#000", // nền ngoài đen cho giống giả lập mobile
    justifyContent: "center",
    alignItems: "center",
  },
  inner: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
  },
});
