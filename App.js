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
          height: "100%",             // cao = full màn
          width: "min(100%, 430px)",  // tối đa 430px
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
