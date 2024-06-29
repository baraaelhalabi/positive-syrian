import hero from './hero.svg';
import frame from './frame.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import FlipCounter from './components/Counter';
import QuotePanel from './components/QuotePanel';
import { useEffect, useState } from 'react';

function App() {
  const apiUrl = 'https://positive-syrian-backend.vercel.app/api';

  let [count, setCount] = useState(0);
  useEffect(() => {
    fetch(`${apiUrl}/count`).then(res => {
      if(res.status === 200)
        res.json().then(result => {
          setCount(result.count);
      }).catch(err => {
        console.err(err);
      });
    }).catch(err => {
      console.error(err);
    });
  }, []);

  const handleSubmit = (e) => {
    setCount(++count);
    e.preventDefault();

    fetch(`${apiUrl}/increase-count`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => {
      console.log(res);
      if(res.status === 200) {
        setCount(++count);
      }
    }).catch(err => {
      console.error(err);
    });
  }

  return (
    <div className='wrapper'>
      <h1 className='title'><span className='dash'></span>Positive Syrian Official Web Page الموقع الرسمي لحملة سوري ايجابي<span className='dash'></span></h1>
      <div className='panel'>
        <QuotePanel />
        {/* <p>[GIF PANEL]</p> */}
      </div>
      <FlipCounter count={count} />
      <div className='container'>
        <div className='form'>
          <img src={frame} />
          <form onSubmit={handleSubmit}>
            <h2>I'm Positive Syrian</h2>
            <h2>انا سوري ايجابي</h2>
            <div className='input'>
              <p>Name:</p>
              <input required type='text' />
              <p>:اسمي</p>
            </div>
            <button></button>
          </form>
        </div>
        <div className='hero'>
          <img src={hero} />
        </div>
      </div>
      <footer>
        <div className='socials'>
          <a href='https://www.facebook.com/profile.php?id=61561103955785'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='https://www.instagram.com/positivesyrian/'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://api.whatsapp.com/send?phone=963996000282'>
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
        </div>
        <p>© 2024 Positive Syrian. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
