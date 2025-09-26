import AppNavigation from "./Navigation/Navigation";

export default function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          maxWidth: "430px",      // để không vượt quá khổ mobile
          aspectRatio: "9/16",    // giữ đứng khi ở màn to
          background: "#fff",
          boxShadow: "0 0 20px rgba(0,0,0,0.3)",
          borderRadius: "12px",
          overflow: "hidden",
        }}
      >
        <AppNavigation />
      </div>
    </div>
  );
}
