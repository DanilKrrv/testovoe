import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.css';
import Main from './pages/Main/Main';
import Account from './pages/Account/Account';
import Contact from './pages/Contact/Contact';
import LoginForm from './pages/LoginForm/LoginForm';

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [user, setUser] = useState(null);

  const handleOpenLogin = () => {
    window.myDialog.showModal();
  };

  const handleCloseLogin = () => {
    window.myDialog.close();
  };

  useEffect(() => {
    fetch('../../users.json')
      .then(response => response.json())
      .then(data => {
        const users = data;
        localStorage.setItem('users', JSON.stringify(users));
      })
      .catch(err => console.error('Ошибка: ', err));
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='*'
          element={<Main
            handleOpenLogin={handleOpenLogin}
            handleCloseLogin={handleCloseLogin}
            authorized={authorized}
            setAuthorized={setAuthorized}
            setUser={setUser}
          />} />
        <Route
          path='Account'
          element={<Account
            handleOpenLogin={handleOpenLogin}
            handleCloseLogin={handleCloseLogin}
            authorized={authorized}
            setAuthorized={setAuthorized}
            user={user}
            setUser={setUser}
          />} />
        <Route
          path='Contact'
          element={<Contact
            handleOpenLogin={handleOpenLogin}
            handleCloseLogin={handleCloseLogin}
            authorized={authorized}
            setAuthorized={setAuthorized}
            setUser={setUser}
          />} />
        <Route
          path='signIn'
          element={<LoginForm
            onClose={handleCloseLogin}
            setAuthorized={setAuthorized}
            setUser={setUser}
          />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App;
