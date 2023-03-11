import React, { ChangeEvent, useEffect, useState } from "react";
import InputText from "../../widgets/InputText/InputText";
import styles from './Auth.module.scss';
import UserIcon from '../../common/assets/custom-icons/user.svg'
import LockIcon from '../../common/assets/custom-icons/lock.svg'
import RoleIcon from '../../common/assets/custom-icons/role.svg'
import MailIcon from '../../common/assets/custom-icons/mail.svg'
import Button from "../../widgets/Button/Button";


interface Login {
    email: string,
    password: string
}

interface Register {
    username: string,
    email: string,
    password: string,
    role: string
}

const Auth: React.FC = () => {

    const [loginSearchInput, setLoginSerchInputValue] = useState<Login>({ email: '', password: '' });
    const [registerSearchInput, setRegisterSerchInputValue] = useState<Register>({ username: '', password: '', email: '', role: '' });

    const [isLogin, setIslogin] = useState<boolean>(false)

    const handleOnChangeForLogin = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setLoginSerchInputValue({ ...loginSearchInput, [name]: value });
    }

    const handleOnChangeForRegister = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setRegisterSerchInputValue({ ...registerSearchInput, [name]: value });
    }

    const handleRegisterSubmit = () => {

    };


    const handleLoginSubmit = () => {

    }

    return <div className={styles.authContainer}>

        <div className={styles.brandHolder}>LAB MODULES</div>
        {isLogin ?
            <div className={styles.inputContainer}>
                <h4>Log In</h4>
                <span>Please enter your details to process further.</span>

                <div className={styles.inputSegments}>
                    <span>Email</span>
                    <InputText
                        icon={UserIcon}
                        value={registerSearchInput.username}
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        onChange={e => handleOnChangeForLogin(e)}
                    />
                </div>

                <div className={styles.inputSegments}>
                    <span>Password</span>
                    <InputText
                        icon={LockIcon}
                        value={registerSearchInput.password}
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        onChange={e => handleOnChangeForLogin(e)}
                    />

                </div>

                <Button onClick={handleLoginSubmit} text="LOGIN" type='contrast' />

                <div className={styles.loginText}>
                    Don't have an account ? <span onClick={() => setIslogin(!isLogin)}>Register.</span>
                </div>
            </div>
            :
            <div className={styles.inputContainer}>
                <h4>Register</h4>
                <span>Please enter your details to process further.</span>

                <div className={styles.inputSegments}>
                    <span>Username</span>
                    <InputText
                        icon={UserIcon}
                        value={registerSearchInput.username}
                        type='text'
                        name='username'
                        placeholder='Enter Username'
                        onChange={e => handleOnChangeForRegister(e)}
                    />
                </div>
                <div className={styles.inputSegments}>
                    <span>Email</span>
                    <InputText
                        icon={MailIcon}
                        value={registerSearchInput.email}
                        type='text'
                        name='email'
                        placeholder='Enter Email'
                        onChange={e => handleOnChangeForRegister(e)}
                    />
                </div>

                <div className={styles.inputSegments}>
                    <span>Password</span>
                    <InputText
                        icon={LockIcon}
                        value={registerSearchInput.password}
                        type='password'
                        name='password'
                        placeholder='Enter Password'
                        onChange={e => handleOnChangeForRegister(e)}
                    />

                </div>

                <div className={styles.inputSegments}>
                    <span>Role</span>
                    <InputText
                        icon={RoleIcon}
                        value={registerSearchInput.role}
                        type='text'
                        name='role'
                        placeholder='Enter Email'
                        onChange={e => handleOnChangeForRegister(e)}
                    />
                </div>

                <Button onClick={handleRegisterSubmit} text="REGISTER" type='contrast' />

                <div className={styles.loginText}>
                    Already have an account ? <span onClick={() => setIslogin(!isLogin)}>Login In.</span>
                </div>
            </div>}

    </div>
};

export default Auth;
