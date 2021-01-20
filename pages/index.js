import Head from 'next/head';
import Footer from '../lib/widgets/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Footer/>
      </main>
    </div>
  )
}
