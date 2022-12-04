import { useState } from 'react';
import { qus } from '../data/qus.js';
import Marquee from '../components/Marquee';

const Ques = () => {
  const [userName, setUserName] = useState('');
  const [startTest, setStartTest] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [datas, setDatas] = useState(qus);
  const [current, setCurrent] = useState(0);
  const [sum, setSum] = useState(0);

  const startGame = () => {
    if (userName !== '') setStartTest(!startTest);
  };

  const nextTest = (e) => {
    if (e.target.dataset.score !== undefined) {
      let score = parseInt(e.target.dataset.score);
      setSum(sum + score);
      setCurrent(current + 1);
    }
    if (current === 10) {
      setShowResult(true);
    }
  };

  let element;
  let resultImg = '';
  if (showResult === true) {
    console.log('sum', sum);
    switch (true) {
      case sum < 30:
        resultImg = 'R1';
        element = (
          <>
            很抱歉，你是沒在動腦的人。你想事情的时候或許總是引經據典，認為古人或是名人說的話就是有道理，但是你從來沒有想為什麼。請你千萬不要去法國，因為你絕對沒有辦法從當地高中畢業，在當地生活也會跟當地人格格不入。或許這是你放下手機，
            開始讀點書的時候了。
            <br />
            (ง๑ •̀_•́)ง
          </>
        );
        break;
      case 31 < sum && sum < 60:
        resultImg = 'R2';
        element = (
          <>
            你是一個想很多，但是不會想的人，你的腦袋時常短路，過熱冒煙，自己也受不了自己。你有自己的想法，不過還要好好加強，因為你時常還是思緒混亂。如果你在法國念高中，應該會因為哲學這科一直留級，但還是有畢業的希望，因為每年都有七、
            八十歲的老先生、老太太也參加高中會考。這本書應該會帶給你很的幫助。
            <br />
            (๑•̀ㅂ•́)و✧
          </>
        );
        break;
      case 61 < sum && sum < 89:
        resultImg = 'R3';
        element = (
          <>
            恭喜你，你是一個很會想的人。如果在法國念書，可以順利從高中畢業，但是要順利面對成年人的生活，還是有點困難。你很謙虚，對自己不確實知道的事情抱持謙卑，同時你有很強的求知慾，也願意學習，如果學習思考的話，會讓人生開啟一扇全新的窗。這本書應該會帶給你很大的幫助。
            <br />
            d(`･∀･)b
          </>
        );
        break;
      case sum > 89:
        resultImg = 'R4';
        element = (
          <>
            太強了,你是一個很會想的人,這本書對你來說太容易了!沒有去念哲學,或是當哲學家，實在太可惜了！你可能就是下一個尼采！
            <br />
            ε٩(๑＞ ₃ ＜)۶з
          </>
        );
        break;

      default:
        break;
    }
  }

  return (
    <div className="ques_wrap">
      {!startTest && (
        <>
          <div className="ques-group">
            <div className="quesSub ques01">歡迎進入</div>
            <div className="quesSub ques02">哲學練習測驗</div>
          </div>
          <div className="name_wrap">
            <div className="name">
              <h3>你ㄉ名字是？</h3>
              <input
                type="text"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <button onClick={() => startGame()}>START</button>
          </div>
        </>
      )}
      {startTest && !showResult && (
        <>
          {datas?.testDatas.map((test, idx) => (
            <div key={idx + 1}>
              {current === idx && (
                <div className={`test_wrap ${current === idx && 'fade-in'}`}>
                  <div className="test_img">
                    <img src={`/${test.qusNum}.png`} alt="" />
                  </div>
                  <div className="test_item">
                    <div className="item_num">{test.qusNum}</div>
                    <h3>{test.qa}</h3>
                    <div className="ans_group" onClick={nextTest}>
                      {test?.ans.map((btn, i) => (
                        <button data-score={btn.score} key={btn.a1}>
                          {btn.a1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </>
      )}
      {showResult && (
        <>
          <div className="test_wrap fade-in">
            <div className="test_img">
              <img src={`/${resultImg}.png`} alt="" />
            </div>
            <div className="test_item">
              <h4>
                {userName}
                <br />
                YOU ARE ...
              </h4>
              <p className="result">{element}</p>
            </div>
          </div>
        </>
      )}
      <Marquee />
    </div>
  );
};

export default Ques;
