import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Sidebar } from "./components/Sidebar";
import { TopBar } from "./components/Topbar";

import { HomePage } from "./pages/HomePage";
import { DocumentUploadPage } from "./pages/DocumentUploadPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <Sidebar />
        </div>

        <div className="right-side">
          <header className="topbar">
            <TopBar />
          </header>

          <main className="main-content">
            <Routes>
              <Route path="/investment-summary-generator" element={<HomePage />} />
              <Route path="/investment-summary-generator/upload" element={<DocumentUploadPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}


export default App;
