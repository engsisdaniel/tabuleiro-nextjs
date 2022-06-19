import Board from "../components/Board";

export default function index() {
  return (
    <main style={{
      backgroundColor: "#444",
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Board />
    </main>
  )
}