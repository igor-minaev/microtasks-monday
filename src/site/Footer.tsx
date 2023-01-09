import React, {FC} from 'react';

type FooterPropsType = {
    titleForFooter: string
}

export const Footer: FC<FooterPropsType> = (props) => {
    return (
        <div>{props.titleForFooter}</div>
    );
};

