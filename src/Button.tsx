import React, {FC} from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}

const Button: FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default Button;