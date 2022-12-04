const Home = ({ start }) => {
  console.log('start', start);
  return (
    <div className="home_wrap">
      <div className="sub-group">
        <div className="sub sub01">拆穿自我的誠實之旅！</div>
        <div className="sub sub02">擺脫思考同溫層，</div>
      </div>
      <h2>INTRO</h2>
      <p>「思考不需要是天賦！只要透過學習，任何人都可以變得會思考」</p>
      <p>
        以下有十一個簡短的哲學問題，不妨可以測驗看看讚幾到底是「很會想」「想很多」，還是根本「沒在想」的人，每一題請選出一個答案。
      </p>
      <a href="#StartGame"> → LET’S GO!!!</a>
    </div>
  );
};

export default Home;
