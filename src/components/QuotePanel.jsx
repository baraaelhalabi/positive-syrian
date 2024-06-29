import { useState, useEffect } from "react";
import style from './QuotePanel.module.css';

const QuotePanel = () => {
    let quoteIndex = 0;
    const quotes = ['الأمل موجود', 'أنا متفائل', 'الفرج قريب', 'معاً لواقع يستحقه السوريون', '+أنا سوري إيجابي'];
    const [quote, setQuote] = useState(quotes[quoteIndex]);
    const changeQuote = () => {
        quoteIndex ++;
        setQuote(quotes[quoteIndex % quotes.length]);
    }

    useEffect(() => {
        const intervalId = setInterval(changeQuote, 3000);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <p className={style.panel}>
            {quote}
        </p>
    )
}

export default QuotePanel;