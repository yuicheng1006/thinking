import Head from 'next/head';
import { useState } from 'react';
import Layout from '../../components/Layout';
import Home from '../../components/Home';
import Marquee from '../../components/Marquee';
import Ques from '../../components/Ques';

export default function Test() {
  const [start, setStart] = useState(true);

  return (
    <div>
      <Head>
        <title>欸我跟你說</title>
      </Head>
      <Layout>
        {start ? (
          <>
            <Home />
            <Marquee color={'green'} />
            <div id="StartGame" className="start-btn">
              <button onClick={() => setStart(!start)}>
                <img src="/go.svg" alt="" />
              </button>
            </div>
          </>
        ) : (
          <Ques />
        )}
      </Layout>
    </div>
  );
}
