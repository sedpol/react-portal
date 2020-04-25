import React, { useState } from 'react';
import { Portal } from '../Portal/Portal';


export const FirstPage = () => {

    const [value, setValue] = useState(null);

    return (
        <div>
            <input onChange={e => {
                setValue(e.target.value)

            }} value={value} />

            <Portal>
                <span>{value}</span>
            </Portal>
        </div>);
};