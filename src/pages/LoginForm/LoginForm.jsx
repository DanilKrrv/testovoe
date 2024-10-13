import { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const LoginForm = ({ onClose, setAuthorized, setUser }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const findUser = (users, username, password) => {
    for (let i = 0; i < users.length; i++) {
      const u = users[i];
      if (u.login == username && u.password == password) {
        return u;
      }
    }
    return null;
  };

  const navigate = useNavigate();
  const toAccount = () => {
    navigate('/Account');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    if (password.length < 8) {
      alert("Пароль должен быть 8 символов или больше")
    }
    const users = JSON.parse(localStorage.getItem('users'));
    const foundUser = findUser(users, username, password);
    if (foundUser != null) {
      setAuthorized(true);
      setUser(foundUser.login);
      toAccount();
    } else {
      alert("Пользователя не существует")
    }
    onClose();
  };

  return (
    <div className='modal-wrap'>
      <dialog className='modal' aria-labelledby="authorization" id='myDialog'>
        <h2 id='authorization'>Авторизация</h2>
        <form className='authorization-form' onSubmit={handleSubmit} method="dialog">
          <div className='align-center'>
            <label>
              <p>Логин:</p>
              <input
                type="text"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='align-center'>
            <label>
              <p>Пароль:</p>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          <div className='btn-form-wrap'>
            <button type="submit">Войти</button>
            <button type="button" onClick={onClose}>Закрыть</button>
          </div>

        </form>
      </dialog>
    </div>


  )
}

export default LoginForm;