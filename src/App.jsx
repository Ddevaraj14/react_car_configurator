import { Canvas } from "@react-three/fiber";
import "./App.css";
import Staging from "./components/Staging";

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach="background" args={["#1e1e1e"]} />

        <Staging />
      </Canvas>
    </div>
  );
}

export default App;
