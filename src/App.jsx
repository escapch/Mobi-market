import './styles/global.scss';
import Main from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Favorit from './pages/Favorit';
import UserProduct from './pages/UserProduct';
import { Route, Routes } from 'react-router';
import NotFound from './pages/NotFound';
import MyProduct from './pages/MyProduct';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/userproduct" element={<UserProduct />} />
        <Route path="/favorit" element={<Favorit />} />
        <Route path="/myProduct" element={<MyProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
