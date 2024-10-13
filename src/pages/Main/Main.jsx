import { Link } from 'react-router-dom';
import LoginForm from '../LoginForm/LoginForm';
import Header from '../../Components/Header/Header';
import './Main.css';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Main = ({ handleOpenLogin, handleCloseLogin, authorized, setAuthorized, setUser }) => {
    const navigate = useNavigate();
    const exit = () => {
        navigate('/Main');
        setAuthorized(false);
    };

    return (
        <>
            <Header
                handleOpenLogin={handleOpenLogin}
                authorized={authorized}
                setAuthorized={setAuthorized}
            />
            <div className='main-wrapper'>
                <div className='main-container'>
                    <h1 className='main-title'>Место для получения медицинской помощи</h1>
                    <div className='main-btn-wrap'>
                        <button className='in-btn' onClick={!authorized ? handleOpenLogin : exit}>{!authorized ? `Войти` : `Выйти`}</button>
                        <Link className='btn-to-contact' to="/Contact">Контакты</Link>
                    </div>
                </div>
                <div className='wrapper-content'>
                    <div className='item'>
                        <div className='item-wrap'>
                            <img src='./src/assets/circle sec-.png' alt='image' />
                            <h5>Онлайн прием</h5>
                            <div className="red-bar"></div>
                            <p>Рыба текст</p>
                        </div>

                    </div>
                    <div className='item'>
                        <div className='item-wrap'>
                            <img src='./src/assets/circle sec- (1).png' alt='image' />
                            <h5>Экстренный случай</h5>
                            <div className="red-bar"></div>
                            <p>Рыба текст</p>
                        </div>

                    </div>
                    <div className='item'>
                        <div className='item-wrap'>
                            <img src='./src/assets/circle sec- (2).png' alt='image' />
                            <h5>Лечение рака</h5>
                            <div className="red-bar"></div>
                            <p>Рыба текст</p>
                        </div>

                    </div>
                </div>
            </div>

            <LoginForm onClose={handleCloseLogin} setAuthorized={setAuthorized} setUser={setUser} />
        </>
    )
}

export default Main;