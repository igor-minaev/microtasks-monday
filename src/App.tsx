import React, {MouseEvent} from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {
    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }
    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const StupidButtonFoo = () => {
        console.log('Im stupid button!')
    }
    return (
        <div className="App">
            {/*  <button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>*/}
            <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')}/>
            <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan', 23)}/>
            <Button name={'StupidButton'} callBack={StupidButtonFoo}/>
        </div>
    );
}

export default App;
