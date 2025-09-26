import { View, StyleSheet, Dimensions, PixelRatio } from "react-native";
import AppNavigation from "./Navigation/Navigation";

export default function App() {
  const { width, height } = Dimensions.get("window");
  const pixelRatio = PixelRatio.get();

  // chuyển px sang dp
  const widthDp = width / pixelRatio;
  const heightDp = height / pixelRatio;

  const baselineWidthDp = 360; // Android baseline
  const baselineHeightDp = 640; // tương ứng tỉ lệ portrait ~9:16

  // Tính width để giữ tỷ lệ portrait dựa trên chiều cao
  let portraitWidth = height * (baselineWidthDp / baselineHeightDp);

  // Nếu màn hình quá nhỏ (mobile nhỏ hơn baseline), cho chiếm full chiều ngang
  if (portraitWidth > width) portraitWidth = width;

  return (
    <View style={styles.outer}>
      <View
        style={[
          styles.inner,
          {
            height: height,          // full chiều cao màn
            width: portraitWidth,    // giữ tỷ lệ portrait
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
  },
});
