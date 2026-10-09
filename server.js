const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');

const port = Number(process.env.PORT) || 3000;
const imagePath = path.join(__dirname, 'src', 'assets', 'hero.jpg');
const imageData = fs.existsSync(imagePath) ? fs.readFileSync(imagePath).toString('base64') : '';
const page = `<!doctype html>
<html lang="tr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#090909" />
    <meta name="description" content="Istanbul Beauty Broker — güzelliğin yeni adresi çok yakında." />
    <title>Istanbul Beauty Broker — Coming Soon</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Playfair+Display:ital,wght@0,500;0,600;1,500;1,600&display=swap" rel="stylesheet" />
    <style>
      :root {
        color-scheme: dark;
        --ink: #f4f0ea;
        --muted: #b7b0a8;
        --line: rgba(244, 240, 234, .24);
        --accent: #d7a984;
        --bg: #090909;
      }

      * { box-sizing: border-box; }
      html { min-height: 100%; background: var(--bg); }
      body {
        min-height: 100vh;
        margin: 0;
        background: var(--bg);
        color: var(--ink);
        font-family: 'DM Sans', sans-serif;
        overflow-x: hidden;
      }
      body::before {
        content: '';
        position: fixed;
        inset: 0;
        z-index: 0;
        background: linear-gradient(105deg, rgba(9,9,9,.98) 0%, rgba(9,9,9,.82) 37%, rgba(9,9,9,.25) 100%), url('data:image/jpeg;base64,${imageData}') center / cover;
        filter: saturate(.72);
        opacity: .7;
      }
      body::after {
        content: '';
        position: fixed;
        inset: 0;
        z-index: 1;
        pointer-events: none;
        opacity: .13;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.22'/%3E%3C/svg%3E");
        mix-blend-mode: soft-light;
      }
      .shell {
        min-height: 100vh;
        width: min(100%, 1440px);
        margin: 0 auto;
        padding: 28px 22px 24px;
        display: flex;
        flex-direction: column;
        position: relative;
        z-index: 2;
      }
      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 20px;
        animation: rise .8s ease both;
      }
      .brand {
        color: var(--ink);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: .25em;
        line-height: 1.45;
        text-transform: uppercase;
      }
      .mark {
        width: 31px;
        height: 31px;
        border: 1px solid var(--line);
        border-radius: 50%;
        display: grid;
        place-items: center;
        color: var(--accent);
        font-family: 'Playfair Display', Georgia, serif;
        font-style: italic;
        font-size: 17px;
      }
      .contact-top {
        color: var(--ink);
        font-size: 11px;
        letter-spacing: .13em;
        text-decoration: none;
        text-transform: uppercase;
        transition: color .25s ease;
      }
      .contact-top:hover { color: var(--accent); }
      main {
        flex: 1;
        display: flex;
        align-items: center;
        padding: 76px 0 58px;
      }
      .content { max-width: 620px; }
      .eyebrow {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--accent);
        font-size: 10px;
        font-weight: 600;
        letter-spacing: .28em;
        text-transform: uppercase;
        animation: rise .8s .1s ease both;
      }
      .eyebrow::before { content: ''; width: 30px; height: 1px; background: var(--accent); }
      h1 {
        margin: 22px 0 16px;
        max-width: 580px;
        font-family: 'Playfair Display', Georgia, serif;
        font-size: clamp(4rem, 16vw, 8.6rem);
        font-weight: 500;
        letter-spacing: -.07em;
        line-height: .84;
        animation: rise .9s .18s ease both;
      }
      h1 em { color: var(--accent); font-style: italic; font-weight: 500; }
      .intro {
        max-width: 395px;
        margin: 0;
        color: var(--muted);
        font-size: 14px;
        line-height: 1.75;
        animation: rise .9s .3s ease both;
      }
      .contact-card {
        width: min(100%, 370px);
        margin-top: 38px;
        padding: 18px 0 17px;
        border-top: 1px solid var(--line);
        border-bottom: 1px solid var(--line);
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
        animation: rise .9s .42s ease both;
      }
      .contact-label { color: var(--muted); font-size: 11px; letter-spacing: .08em; text-transform: uppercase; }
      .email { color: var(--ink); font-size: 13px; text-decoration: none; white-space: nowrap; }
      .email:hover { color: var(--accent); }
      footer {
        display: flex;
        justify-content: space-between;
        align-items: end;
        gap: 20px;
        color: var(--muted);
        font-size: 10px;
        letter-spacing: .12em;
        text-transform: uppercase;
        animation: rise .8s .5s ease both;
      }
      .location { display: flex; align-items: center; gap: 9px; }
      .location::before { content: ''; width: 5px; height: 5px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 0 5px rgba(215,169,132,.12); }
      .year { opacity: .75; }
      @keyframes rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      @media (min-width: 700px) {
        .shell { padding: 40px 7vw 34px; }
        main { padding: 70px 0 80px; }
        footer { font-size: 11px; }
      }
      @media (min-width: 1050px) {
        body::before { background-position: 71% center; opacity: .84; }
        main { align-items: center; }
        .content { margin-left: 5vw; }
        h1 { font-size: clamp(6.5rem, 11vw, 10.5rem); }
      }
      @media (max-width: 420px) {
        .contact-card { align-items: flex-start; flex-direction: column; gap: 8px; }
        footer { align-items: flex-start; flex-direction: column; }
      }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
      }
    </style>
  </head>
  <body>
    <div class="shell">
      <header>
        <div class="mark" aria-hidden="true">I</div>
        <div class="brand">Istanbul<br />Beauty Broker</div>
        <a class="contact-top" href="mailto:hello@istanbulbeautybroker.com">İletişim ↗</a>
      </header>
      <main>
        <section class="content" aria-labelledby="title">
          <div class="eyebrow">Yeni bir güzellik standardı</div>
          <h1 id="title">Coming<br /><em>soon.</em></h1>
          <p class="intro">İstanbul’un güzellik dünyasını seçkin bir bakışla yeniden keşfetmeye hazırlanıyoruz.</p>
          <div class="contact-card">
            <span class="contact-label">Bizimle iletişime geçin</span>
            <a class="email" href="mailto:hello@istanbulbeautybroker.com">hello@istanbulbeautybroker.com ↗</a>
          </div>
        </section>
      </main>
      <footer>
        <span class="location">Istanbul, Türkiye</span>
        <span class="year">© 2026 IBB</span>
      </footer>
    </div>
  </body>
</html>`;

const server = http.createServer((req, res) => {
  const requestPath = new URL(req.url, `http://${req.headers.host || 'localhost'}`).pathname;
  if (requestPath === '/assets/hero.jpg' || requestPath === '/hero.jpg') {
    fs.readFile(imagePath, (error, data) => {
      if (error) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Görsel bulunamadı');
      }
      res.writeHead(200, {
        'Content-Type': 'image/jpeg',
        'Content-Length': data.length,
        'Cache-Control': 'public, max-age=31536000, immutable'
      });
      res.end(data);
    });
    return;
  }

  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(page);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Istanbul Beauty Broker listening on port ${port}`);
});
