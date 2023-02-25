import { MutableRefObject, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthClient } from '../../api/authClient';
import { Spinner } from '../Spinner/Spinner';
import { setAlert } from '../../context/alert';
import './styles.css'

export const AuthPage = ({ type }: {type: 'login' | 'registration' }) => {
    const [spiner, setSpinner] = useState(false);
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
    const navigate = useNavigate();
    const currentAuthTitle = type === 'login' ? 'Войти' : 'Регистрация';

    const handleLogin = async (email: string, password: string) => {
        if (!email || !password) {
            return;
        }

        const result = await AuthClient.login(email, password);

        if(!result) {
            setSpinner(false);
            return;
        }

        setSpinner(false);
        navigate('/coast');
        setAlert({ alertText: 'Вход выполнен', alertStatus: 'success'});
    }

    const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSpinner(true);

        switch (type) {
            case 'login':
                handleLogin(emailRef.current.value, passwordRef.current.value)
                break;
            default:
                break;
        }
    }

    return (
        <div className="container">
            <h1>{currentAuthTitle}</h1>
            <form onSubmit={handleAuth} className="form-group">
                <label className="auth-label">
                    Введите email
                    <input ref={emailRef} type="text" className="form-control" />
                </label>
                <label className="auth-label">
                    Введите пароль
                    <input ref={passwordRef} type="password" className="form-control" />
                </label>
                <button className="btn btn-primary auth-btn">
                    {spiner ? <Spinner top={5} left={10} /> : currentAuthTitle}
                </button>
            </form>
            {
                type === 'login'
                ? <div>
                    <span className='question_text'>
                        Ещё нет аккаунта?
                    </span>
                    <Link to={'/registration'}>
                        Зарегистрироваться
                    </Link>
                </div>
                : <div>
                    <span className='question_text'>
                        Ещё есть аккаунта?
                    </span>
                    <Link to={'/login'}>
                        Войти
                    </Link>
                </div>
            }
        </div>
    )
}