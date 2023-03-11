import React from "react";
import styles from './Button.module.scss';

type OwnProps = {
    title?: string,
    onClick: () => void,
    text: string,
    icon?: string,
    type: 'primary' | 'secondary' | 'contrast'
}

const Button: React.FC<OwnProps> = (props) => {


    const handleOnClick = () => {

    };


    const getClassName = () => {
        let className = '';
        switch (props.type) {
            case 'primary':
                className = styles.primary;
                break;
            case 'secondary':
                className = styles.secondary;
                break;
            case 'contrast':
                className = styles.contrast;
        }

        return className;
    };


    const buttonClassName = getClassName();

    console.log(buttonClassName)

    return <button
        onClick={handleOnClick}
        title={props.title}
        className={buttonClassName}>
        {props.icon && <img src={props.icon} />}
        {props.text}
    </button>
}


export default Button