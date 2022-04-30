import Landing from "./pages/landing";
import { Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
    </Routes>
  );
}

export default App;
