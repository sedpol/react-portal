import React, { useState } from 'react';
import { Portal } from '../Portal/Portal';


export const FirstPage = () => {

    const [value, setValue] = useState(null);

    return (
        <div id='parent'>
            <input onChange={e => {
                setValue(e.target.value)

            }} value={value} />

            <Portal>
                <span id='child'>{value}</span>
            </Portal>
        </div>);
};