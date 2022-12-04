const Content = () => {
  return (
    <main>
      <div className="frame">
        <div className="frame__title-wrap">
          <h1 className="frame__title">我為什麼去法國上哲學課？</h1>
        </div>
      </div>
      <nav className="menu">
        {/* <div className="menu__item">
          <a className="menu__item-link">為什麼需要思考?</a>
          <div className="marquee">
            <div className="marquee__inner" aria-hidden="true">
              <span>為什麼需要思考?</span>
              <span>為什麼需要思考?</span>
              <span>為什麼需要思考?</span>
              <span>為什麼需要思考?</span>
            </div>
          </div>
        </div> */}
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
            <div className="marquee__inner" aria-hidden="true">
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
        <img src="/qrcode.svg" alt="" />
      </div>
    </main>
  );
};

export default Content;
