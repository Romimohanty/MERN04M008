import { Routes, Route, Navigate } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import DashBoard from './components/DashBoard'; // Aapki file ka B capital hai
import ProtectedRoute from './Routes/ProtectedRoute'; // Aapke folder ka R capital hai

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dash' element={
          <ProtectedRoute>
            <DashBoard />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
}

export default App;