import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import List from "./Page/List";
import Login from "./Page/Login";
import Mypage from "./Page/Mypage";
import Signup from "./Page/Signup";
import Viewer from "./Page/Viewer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Viewer />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/mypage" element={<Mypage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;