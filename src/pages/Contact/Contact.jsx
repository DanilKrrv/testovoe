import Header from '../../Components/Header/Header'
import './Contact.css'
import LoginForm from '../LoginForm/LoginForm';

// eslint-disable-next-line react/prop-types
const Contact = ({ handleOpenLogin, handleCloseLogin, authorized, setAuthorized, setUser }) => {
    return (
        <>
            <Header
                handleOpenLogin={handleOpenLogin}
                authorized={authorized}
                setAuthorized={setAuthorized}
            />
            <div className='contact-wrapper'>
                <div className='contact-container'>
                    <h1 className='contact-title'>Контакты</h1>
                </div>
            </div>
            <LoginForm onClose={handleCloseLogin} setAuthorized={setAuthorized} setUser={setUser} />
        </>
    )
}

export default Contact;