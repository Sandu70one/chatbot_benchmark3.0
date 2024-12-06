import "./App.css";
import LaunchingScreen from "./pages/launchingScreen/launchingScreen";
import ChattingScreen from "./pages/chattingScreen/chattingScreen.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/chat.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaunchingScreen />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
