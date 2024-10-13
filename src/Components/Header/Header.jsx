import { Link } from 'react-router-dom'
import './Header.css'
import { useNavigate } from 'react-router-dom';
import logo from '/src/assets/logo.png'

// eslint-disable-next-line react/prop-types
const Header = ({ handleOpenLogin, authorized, setAuthorized }) => {
  const navigate = useNavigate();
  const toExit = () => {
    navigate('/Main');
    setAuthorized(false);
  };


  return (
    <div className='header'>
      <img className='logo' src={logo}></img>
      <div className='right-container'>
        <Link className='contact' to="/Contact">Контакты</Link>
        <button className='btn' onClick={!authorized ? handleOpenLogin : toExit}>{!authorized ? `Войти` : `Выйти`}</button>
      </div>
    </div>
  )
}

export default Header;