// Library imports
import { FC } from "react";
import { Routes, Route } from "react-router-dom";

// Local imports
import { Home, CreateAccount, LogIn } from "./components";

const App: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAccount />} />
        <Route path="/login" element={<LogIn />} />
      </Routes>
      <a href="https://www.binzek.com/" target="_blank" className="watermark">
        &copy; 2025 - Abdul Wajid
      </a>
    </>
  );
};

export default App;
