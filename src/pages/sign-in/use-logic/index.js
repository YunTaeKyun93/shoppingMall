import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import useLogin from '../../../services/login';
import UserNotFoundByEmailError from '../../../errors/user-not-found-by-email';
import IncorrectPasswordError from '../../../errors/incorrect-password';



const useLogic = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const loginService = useLogin();

    const login = () => {
        try {
            loginService({email, password});
        } catch (error) {
            if (error instanceof UserNotFoundByEmailError) {
                alert('유저를 찾을 수 없습니다');
                return;
            }
            
            if (error instanceof IncorrectPasswordError) {
                alert('비밀번호가 일치하지 않습니다');
                return;
            }

            alert('알 수 없는 에러가 발생하였습니다');
            console.error(error);

            // if(error == userNotFound){
            //     alert('일치하는 유저가 없습니다')
            // }else if(error == passwordNotMatch){
            //     alert('비번이 일치하지 않습니다')
            // }
            // alert(error.message);
            // alert('로그인에 실패했습니다.');
            return;
        }

        navigate('/');
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        login,
    };
};

export default useLogic;