import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/FullInput";
import {Input} from "./components/Input";
import {Button} from "./components/Button";

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])


     const addMessage = (newTitle: string) => {
         setMessage([{message: newTitle}, ...message])
     }

    const [title, setTitle] = useState('')

    const callBackHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <div>
                <Input setTitle={setTitle} title={title}/>
                <Button name={'+'} callBack={callBackHandler}/>
            </div>
            {/* <FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

export default App;
