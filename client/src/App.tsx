import { useStore } from 'effector-react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthPage } from './components/AuthPage/AuthPage';
import { RegPage } from './components/AuthPage/RegPage';
import { Header } from './components/Header/Header';
import { $auth } from './context/auth'

function App() {
  const isLoggedIn = useStore($auth);

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path='/' element={isLoggedIn ? <Navigate to='/coast' /> : <Navigate to='/login' />} />
          <Route path='/registration' element={isLoggedIn ? <Navigate to='/coast' /> : <RegPage type='registration' />} />
          <Route path='/login' element={isLoggedIn ? <Navigate to='/coast' /> : <AuthPage type='login' />} />
          <Route path='/coast' element={isLoggedIn ? <h1>Coast</h1> : <Navigate to='/login' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
