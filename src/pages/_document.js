import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style dangerouslySetInnerHTML={{ __html: `
          .loading-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000000;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 0.5s ease;
          }
          .lyrics {
            color: white;
            font-family: sans-serif;
            font-size: 24px;
            font-weight: 300;
            letter-spacing: 0.05em;
            opacity: 0;
            animation: fadeInOut 3s forwards;
          }
          @keyframes fadeInOut {
            0% { opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { opacity: 0; }
          }
        `}} />
      </Head>
      <body>
        <div id="loading-overlay" className="loading-overlay">
          <div className="lyrics">「ワタリドリの様に今 旅に発つよ」</div>
        </div>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{ __html: `
          setTimeout(() => {
            const overlay = document.getElementById('loading-overlay');
            if (overlay) {
              overlay.style.opacity = '0';
              setTimeout(() => {
                overlay.style.display = 'none';
              }, 500);
            }
          }, 3500);
        `}} />
      </body>
    </Html>
  );
}
