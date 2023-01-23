import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (newTitle: string) => void

}

export const FullInput = (props: FullInputPropsType) => {
    const [title, setTitle] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)
    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }
    return (
        <div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    );
};

