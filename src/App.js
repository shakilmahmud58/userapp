import './App.css';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import UserList from './components/userlist';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/profile/:id" element={<Profile />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
