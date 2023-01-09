import React, {FC} from 'react';
import {isEditable} from "@testing-library/user-event/dist/utils";

type NewComponentPropsType = {
    students: Array<StudentType>
}

export type StudentType = {
    id: number
    name: string
    age: number
}
export const NewComponent: FC<NewComponentPropsType> = (props) => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <ul>
                {props.students.map(student => <li key={student.id}><span>{student.name}</span>
                    <span>{student.age}</span></li>)}
            </ul>
            <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
                {topCars.map((car,index)=>{
                    return (
                        <tr key={index}>
                            <td>{car.manufacturer}</td>
                            <td>{car.model}</td>
                        </tr>
                    )
                })}
            </table>
        </>
    );
};

