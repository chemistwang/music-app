import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DashboardPage from "./pages/DashboardPage";
import ChatPage from "./pages/ChatPage";
import NewChatPage from "./pages/NewChatPage";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/new-chat" element={<NewChatPage />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
