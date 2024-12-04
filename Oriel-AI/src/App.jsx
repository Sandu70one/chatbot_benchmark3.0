import "./App.css";
import LaunchingScreen from "./pages/launchingScreen/launchingScreen";
import ChattingScreen from "./pages/chattingScreen/chattingScreen.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaunchingScreen />} />
          <Route path="/chatting" element={<ChattingScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
