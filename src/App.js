import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import {Home} from "./pages/home";
import {Auth} from "./pages/auth";
import { Navbar } from './components/navbar';
import { UserDetail } from "./pages/userdetail";
import {AuthLogin} from "./pages/authlogin";
import {AuthRegister} from "./pages/authregister";
import { LandingPage } from './pages/landingPage';
function App() {
  return (
    <div className="App">
         <Router>
          <Navbar/>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/authLogin" element={<AuthLogin />} />
            <Route path="/authRegister" element={<AuthRegister/>}/>
            <Route path="/userdetail" element={<UserDetail/>}  />
            <Route path="/landingPage" element={<LandingPage/>} />
          </Routes>
         </Router>
    </div>
  );
}

export default App;

