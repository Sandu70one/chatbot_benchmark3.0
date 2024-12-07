import "./App.css";
import LaunchingScreen from "./pages/launchingScreen/launchingScreen";
import ChattingScreen from "./pages/chattingScreen/chattingScreen.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/chat.jsx";
import Profile from "./components/profile/profile.jsx";
import Chatting from "./pages/chattingScreen/chattingScreen.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LaunchingScreen />} />
          <Route path="/chat" element={<Chat />} />

          <Route path="/chatting" element={<Chatting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
