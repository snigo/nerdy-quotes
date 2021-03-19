import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import formatMessage from '../lib/format';
import { fetchQuote, type } from '../store/actions';
import { AppState } from '../store/const';

const Index = () => {
  const dispatch = useDispatch();
  const { current, busy } = useSelector((state: AppState) => state);
  const [message, setMessage] = useState<string>(current.quote);
  useEffect(() => {
    const formattedMessage = formatMessage(current);
    setMessage('');
    dispatch(type(formattedMessage, setMessage));
  }, [current]);

  const handleClick = () => {
    if (!busy) {
      dispatch(fetchQuote());
    }
  };

  return (
    <main>
      <h1>ℵ℮ґⅾ¥ ℚυ◎тℯ$!</h1>
      <div className="box-border">
        <div className="overlay" />
        <div className="box">
          <div className="code">
            <p className="code-line">
              <span>{ message }</span>
              <span className="cursor-blink">▋</span>
            </p>
          </div>
        </div>
        <button type="button" className="kbd-btn" onClick={handleClick}>NEXT</button>
      </div>
    </main>
  );
};

export default Index;
