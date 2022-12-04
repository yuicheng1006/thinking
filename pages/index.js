import Head from 'next/head';
import Content from '../components/Content';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,800;1,900&display=swap"
          rel="stylesheet"
        /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Work+Sans:wght@900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Content />
    </div>
  );
}
