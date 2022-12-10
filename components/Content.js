import { useState, useEffect } from 'react';

const Content = () => {
  const [rn, SetRn] = useState('');
  const [showHome, setShowHome] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      let h = new Date().getHours();
      let m = new Date().getMinutes();
      let s = new Date().getSeconds();
      h = h < 10 ? '0' + h : h;
      m = m < 10 ? '0' + m : m;
      s = s < 10 ? '0' + s : s;
      let time = `${h}:${m}:${s}`;
      console.log('time', time);
      SetRn(time);
      if (m >= 30) {
        console.log('uwu');
        clearInterval(timer);
        setShowHome(true);
      }
    }, 1000);
  }, []);

  return (
    <main>
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">我為什麼去法國上哲學課？</h1>
        </div>
      </div>
      {showHome ? (
        <>
          <nav className="menu">
            <div className="menu__item">
              <a className="menu__item-link">人生是什麼</a>
              <div className="marquee">
                <div className="marquee__inner reversed" aria-hidden="true">
                  <span>人生是什麼</span>
                  <span>人生是什麼</span>
                  <span>人生是什麼</span>
                  <span>人生是什麼</span>
                </div>
              </div>
            </div>
            <div className="menu__item">
              <a className="menu__item-link">Life is a piece of shit</a>
              <div className="marquee">
                <div className="marquee__inner reverseded" aria-hidden="true">
                  <span>Life is a piece of shit</span>
                  <span>Life is a piece of shit</span>
                  <span>Life is a piece of shit</span>
                  <span>Life is a piece of shit</span>
                </div>
              </div>
            </div>
          </nav>
          <div className="do_test-link">
            <span>→ Let' GO!!!!</span>
            <img src="/code.svg" alt="" />
          </div>
        </>
      ) : (
        <p className="time_count">{rn}</p>
      )}
    </main>
  );
};

export default Content;
