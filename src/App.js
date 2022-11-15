import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import File from "./Components/Files/file";
import Header from "./Components/Header/header";
import Login from "./Components/Login/login";
import Message from "./Components/Messages/message";

function App() {
  return (
    <div>
      
      {<Header />}
      <Router>  
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/message" element={<Message />} />
          <Route path="/file" element={<File />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
