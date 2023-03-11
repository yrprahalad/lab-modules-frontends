import React, { ChangeEvent, useState, FocusEvent } from "react";
import styles from './InputText.module.scss'
import PasswordOnIcon from '../../common/assets/action-icons/password-on.svg'
import PasswordOffIcon from '../../common/assets/action-icons/password-off.svg'

type OwnProps = {
    title?: string,
    value: string,
    default?: string,
    placeholder?: string,
    icon?: string,
    type: string,
    isDisabled?: boolean,
    name?: string,

    min?: number,
    max?: number,

    onClick?: () => void,
    onChange: (changedValue: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    onEnterPress?: () => void,
    onFocus?: () => void,
}

const InputText: React.FC<OwnProps> = (props) => {

    const [togglePassword, setTogglePassword] = useState<boolean>(false);
    const [enablePasswordBtn, setEnablePasswordBtn] = useState<boolean>(false);

    const handleOnChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        props.onChange(e);
    }

    const handleOnClick = () => {

    }

    return <div className={styles.inputHolder}>
        {props.icon && <img src={props.icon} />}
        <input
            name={props.name}
            type={props.type === 'password' && togglePassword ? 'text' : props.type}
            onChange={handleOnChange}
            onClick={handleOnClick}
            defaultValue={props.default}
            value={props.value}
            placeholder={props.placeholder}>
        </input>

        {props.type === 'password' && props.value.length > 0 && togglePassword && <img className={styles.passwordImg} src={PasswordOnIcon} onClick={() => setTogglePassword(!togglePassword)} />}
        {props.type === 'password' && props.value.length > 0 &&  !togglePassword && <img className={styles.passwordImg} src={PasswordOffIcon} onClick={() => setTogglePassword(!togglePassword)} />}

    </div>

};


export default InputText;