import { Route, Routes } from "react-router-dom";
import Header from "./components/Header"
import FindIdPage from "./Page/FindIdPage";
import FindPwPage from "./Page/FindPwPage";
import ListPage from "./Page/ListPage";
import LoginPage from "./Page/LoginPage";
import Mypage from "./Page/Mypage";
import SignupPage from "./Page/SignupPage";
import ViewerPage from "./Page/ViewerPage";
import ViewerAll from "./Page/ViewerAll";


function App() {
  return (
    <div className="App pretendard" >
      <Header />
      <main className="h-main bg-100">
        <Routes>
          <Route path="/" element={<ViewerPage />}/>
          <Route path="/viewer_all" element={<ViewerAll />}/>
          <Route path="/list" element={<ListPage />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/signup" element={<SignupPage />}/>
          <Route path="/find_id" element={<FindIdPage />}/>
          <Route path="/find_password" element={<FindPwPage />}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;