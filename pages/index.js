import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import MyLineChart from './components/MyLineChart';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React PWA Boilerplate</title>
        <meta
          name='description'
          content='A PWA boilerplate/reference application in React'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='manifest' href='/manifest.json' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className={styles.header}>
        <Image
          src='/images/logo.png'
          alt='Logo Yoda Coin Farm'
          width={64} // Substitua pelos tamanhos corretos
          height={64} // Substitua pelos tamanhos corretos
          className={styles.logo}
        />
        <p className={styles.title}>Yoda Coin Farm</p>
      </div>

      <div className={styles.graphic}>
        <p className={styles.title}>Last Days:</p>
        <div>
          <MyLineChart />
        </div>
      </div>

      <div className={styles.graphic}>
        <p className={styles.title}>All trades:</p>
        <TradeComponent />
      </div>
    </div>
  );
}

const TradeComponent = () => (
  Array(6).fill().map((_, index) => (
    <div className={styles.trade} key={index}>
      <Image
        src='/images/btc.png'
        alt='Imagem de Bitcoin'
        width={64} // Substitua pelos tamanhos corretos
        height={64} // Substitua pelos tamanhos corretos
        className={styles.coin}
      />
      <p className={styles.value}>R$ 1294,30</p>
    </div>
  ))
);

// Verificando se 'serviceWorker' é suportado
if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Registro foi bem sucedido
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registro falhou :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

if (typeof window !== 'undefined') {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
        // Registro foi bem sucedido
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registro falhou :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    console.log('👍', 'beforeinstallprompt', event);
    // Salve o evento para que possamos chamar o método prompt() mais tarde.
    window.deferredPrompt = event;
  });
}

