import Header from '../../Components/Header/Header';
import LoginForm from '../LoginForm/LoginForm';
import './Account.css';
import { Link, useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Account = ({ handleOpenLogin, handleCloseLogin, authorized, setAuthorized, user, setUser }) => {
    const navigate = useNavigate();
    const toExit = () => {
        navigate('/Main');
        setAuthorized(false);
        setUser(null);
    };

    return (
        <>
            <Header
                handleOpenLogin={handleOpenLogin}
                authorized={authorized}
                setAuthorized={setAuthorized}
            />
            <div className='account-wrapper'>
                <div className='account-container'>
                    <h1 className='account-title'>Привет, {user}</h1>
                    <div className='account-btn-wrap'>
                        <button className='exit-btn' onClick={toExit}>{`Выйти`}</button>
                        <Link className='btn-to-contact pad-norm' to="/Contact">Перейти в контакты</Link>
                    </div>
                </div>
            </div>
            <LoginForm onClose={handleCloseLogin} setAuthorized={setAuthorized} setUser={setUser} />
        </>
    )
}

export default Account