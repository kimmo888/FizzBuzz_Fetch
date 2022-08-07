import React from 'react';
import { callFizzBuzz } from '../FizzBuzz/Function';

const FizzBuzz = () => {
    return (
        <div>
            <ul>
                {callFizzBuzz(30)}
            </ul>
        </div>
    )
}

export default FizzBuzz;