import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";


function App() {
  return (
    <div>
      <Router>  
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
