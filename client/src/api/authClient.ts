import { setAuth } from '../context/auth';
import api from './axiosClient';

export class AuthClient {
    static async login(email: string, password: string) {
        try {
            const result = await api.post('/auth/signIn', {email, password});

            if (result.status === 200) {
                setAuth(true);
                localStorage.setItem('auth', JSON.stringify(result.data));
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }

    static async registration(email: string, password: string, last_name: string, first_name: string, patronymic: string | null, phone: string) {
        try {
            const profil = {last_name, first_name, patronymic, phone};
            const result = await api.post('/user/create', {email, password, profil});

            if (result.status === 201) {
                setAuth(false);
                localStorage.setItem('auth', JSON.stringify(result.data));
                return true;
            }
            return false;
        } catch (error) {
            console.log(error);
        }
    }
}