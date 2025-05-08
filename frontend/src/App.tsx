import "./App.css";
import Nav from "./Components/Nav/Nav";
import Edit from "./Views/Accounts/Edit/Edit";
import Main from "./Views/Main/Main";

import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation().pathname;

  return (
    <main className="flex flex-col items-center">
      {location === "/" && <Nav />}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/accounts/edit" element={<Edit />} />
      </Routes>
    </main>
  );
}

export default App;
