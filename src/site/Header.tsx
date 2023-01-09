import React, {FC} from 'react';

type HeaderPropsType = {
    titleForHeader: string
}

export const Header:FC<HeaderPropsType> = (props) => {
    return (
        <div>{props.titleForHeader}</div>
    );
};

