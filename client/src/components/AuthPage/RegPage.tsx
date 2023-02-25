import { MutableRefObject, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthClient } from '../../api/authClient';
import { Spinner } from '../Spinner/Spinner';
import { setAlert } from '../../context/alert';
import './styles.css'

export const RegPage = ({ type }: {type: 'login' | 'registration' }) => {
    const [spiner, setSpinner] = useState(false);
    const emailRef = useRef() as MutableRefObject<HTMLInputElement>;
    const last_nameRef = useRef() as MutableRefObject<HTMLInputElement>;
    const first_nameRef = useRef() as MutableRefObject<HTMLInputElement>;
    const patronymicRef = useRef() as MutableRefObject<HTMLInputElement>;
    const phoneRef = useRef() as MutableRefObject<HTMLInputElement>;
    const passwordRef = useRef() as MutableRefObject<HTMLInputElement>;
    const navigate = useNavigate();
    const currentAuthTitle = 'Регистрация';

    const handleRegistration = async (email: string, password: string, last_name: string, first_name: string, patronymic: string | null, phone: string) => {
        if (!email || !password) {
            return;
        }

        if (password.length < 8) {
            return;
        }

        const result = await AuthClient.registration(email, password, last_name, first_name, patronymic, phone);

        if(!result) {
            setSpinner(false);
            return;
        }

        setSpinner(false);
        navigate('/login');
        setAlert({ alertText: 'Регистрация выполнена', alertStatus: 'success'});
    }

    const handleAuth = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSpinner(true);

        switch (type) {
            case 'registration':
                handleRegistration(
                    emailRef.current.value, 
                    passwordRef.current.value, 
                    last_nameRef.current.value, 
                    first_nameRef.current.value, 
                    patronymicRef.current.value, 
                    phoneRef.current.value
                )
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
                    Введите Фамилию
                    <input ref={last_nameRef} type="text" className="form-control" />
                </label>
                <label className="auth-label">
                    Введите Имя
                    <input ref={first_nameRef} type="text" className="form-control" />
                </label>
                <label className="auth-label">
                    Введите Отчество (Не обязательно)
                    <input ref={patronymicRef} type="text" className="form-control" />
                </label>
                <label className="auth-label">
                    Введите номер мобильного телефона
                    <input ref={phoneRef} type="text" className="form-control" />
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