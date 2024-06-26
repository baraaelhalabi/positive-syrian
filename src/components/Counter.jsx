import style from './Counter.module.css';
import { useEffect, useState } from 'react';

const FlipCounter = ({ count }) => {
    // useEffect(() => {}, [countProp])

    // let [count, setCount] = useState(0);
    const getDigit = (index) => {
        const stringNumber = count.toString();
        let number = '0'.repeat(6 - stringNumber.length).concat(stringNumber);
        return number[index];
    }

    return (
        <div className={style.container} onClick={() => ++count}>
            <div className={style.card}>
                <span></span>
                {getDigit(0)}
            </div>
            <div className={style.card}>
                <span></span>
                {getDigit(1)}
            </div>
            <div className={style.card}>
                <span></span>
                {getDigit(2)}
            </div>
            <div className={style.card}>
                <span></span>
                {getDigit(3)}
            </div>
            <div className={style.card}>
                <span></span>
                {getDigit(4)}
            </div>
            <div className={style.card}>
                <span></span>
                {getDigit(5)}
            </div>
        </div>
    );
}

export default FlipCounter;