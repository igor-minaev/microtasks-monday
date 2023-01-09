import React, {FC} from 'react';
import Button from "./Button";
import {FilterType} from "./App";

type NewComponentPropsType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (filter: FilterType) => void

}
type MoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent: FC<NewComponentPropsType> = (props) => {
    return (
        <>

            <ul>
                {props.currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index + 1}>
                            <span>{objFromMoneyArr.banknots}</span>
                            <span>{objFromMoneyArr.value}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'All'} callBack={() => props.onClickFilterHandler("All")}/>
                <Button name={'RUBLS'} callBack={() => props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </>
    );
};

