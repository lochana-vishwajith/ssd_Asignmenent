import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Message from "./Components/Messages/message";


function App() {
  return (
    <div>
      <Router>  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/message" element={<Message />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
