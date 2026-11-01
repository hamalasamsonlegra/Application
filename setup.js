const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const publicDir = path.join(projectRoot, 'public');

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const files = {
  'public/index.html': `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Application</title>
    <link rel="stylesheet" href="/styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header class="topbar">
        <div class="brand">
          <span class="brand-mark">A</span>
          <span>Application</span>
        </div>
        <nav>
          <a href="#overview">Overview</a>
          <a href="#features">Features</a>
          <a href="#status">Status</a>
        </nav>
      </header>

      <main>
        <section class="hero" id="overview">
          <div class="hero-copy">
            <p class="eyebrow">Ready-to-run starter</p>
            <h1>Build your next idea with a clean foundation.</h1>
            <p class="lead">
              This app gives you a lightweight, customisable web interface with a Node.js backend
              and a polished front-end starter.
            </p>
            <div class="cta-row">
              <a class="primary-btn" href="#features">Explore features</a>
              <button class="secondary-btn" id="refreshStatus">Refresh status</button>
            </div>
          </div>

          <div class="hero-panel">
            <div class="stat-card accent">
              <span class="label">Status</span>
              <strong id="serverStatus">Live</strong>
            </div>
            <div class="stat-card">
              <span class="label">Uptime</span>
              <strong id="uptimeValue">0s</strong>
            </div>
            <div class="stat-card">
              <span class="label">Last updated</span>
              <strong id="lastUpdated">Just now</strong>
            </div>
          </div>
        </section>

        <section class="features" id="features">
          <h2>What this starter includes</h2>
          <div class="feature-grid">
            <article>
              <h3>Simple server</h3>
              <p>Runs with a single Node.js process and serves static files instantly.</p>
            </article>
            <article>
              <h3>Modern layout</h3>
              <p>Responsive sections, clear hierarchy, and a clean visual style.</p>
            </article>
            <article>
              <h3>Customisable code</h3>
              <p>Easy to extend with dashboards, forms, APIs, or business logic.</p>
            </article>
          </div>
        </section>

        <section class="status-panel" id="status">
          <div>
            <p class="eyebrow muted">System check</p>
            <h2>Application health</h2>
          </div>
          <div class="status-list">
            <div><span>Backend</span><strong>Operational</strong></div>
            <div><span>Frontend</span><strong>Serving</strong></div>
            <div><span>Environment</span><strong>Local dev</strong></div>
          </div>
        </section>
      </main>
    </div>

    <script src="/app.js"></script>
  </body>
</html>
`,
  'public/styles.css': `:root {
  --bg: #0b1020;
  --panel: rgba(15, 23, 42, 0.82);
  --panel-alt: #111827;
  --card: #172033;
  --muted: #a8b3cf;
  --text: #edf3ff;
  --primary: #7c9cff;
  --primary-strong: #5a7cff;
  --accent: #8ef0c6;
  --border: rgba(255, 255, 255, 0.12);
  --shadow: 0 24px 70px rgba(15, 23, 42, 0.35);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, 'Segoe UI', sans-serif;
  background: radial-gradient(circle at top, rgba(124, 156, 255, 0.22), transparent 30%),
    linear-gradient(145deg, #0b1020 0%, #111827 100%);
  color: var(--text);
}

.page-shell {
  width: min(1100px, calc(100% - 32px));
  margin: 0 auto;
  padding: 24px 0 64px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 20px;
  border: 1px solid var(--border);
  border-radius: 18px;
  background: rgba(17, 24, 39, 0.7);
  backdrop-filter: blur(10px);
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 700;
  letter-spacing: 0.03em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #081120;
  font-weight: 800;
}

nav {
  display: flex;
  gap: 20px;
}

nav a {
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s ease;
}

nav a:hover {
  color: var(--text);
}

.hero {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 28px;
  align-items: center;
  padding: 64px 0 36px;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
}

.eyebrow.muted {
  color: var(--muted);
}

.hero-copy h1 {
  margin: 0 0 16px;
  font-size: clamp(2.4rem, 5vw, 4rem);
  line-height: 1.04;
  letter-spacing: -0.05em;
}

.lead {
  margin: 0;
  max-width: 42rem;
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 26px;
}

.primary-btn,
.secondary-btn {
  appearance: none;
  border: none;
  border-radius: 12px;
  padding: 12px 18px;
  font: inherit;
  cursor: pointer;
  transition: transforms 0.2s ease, opacity 0.2s ease;
}

.primary-btn {
  text-decoration: none;
  color: #081120;
  background: linear-gradient(135deg, var(--accent), #b0f7d8);
  font-weight: 700;
}

.secondary-btn {
  color: var(--text);
  background: rgba(148, 163, 184, 0.12);
  border: 1px solid var(--border);
}

.primary-btn:hover,
.secondary-btn:hover {
  transform: translateY(-1px);
}

.hero-panel {
  display: grid;
  gap: 18px;
}

.stat-card {
  padding: 22px 20px;
  border-radius: 20px;
  background: rgba(17, 24, 39, 0.8);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.stat-card.accent {
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.18), rgba(142, 240, 198, 0.18));
}

.label {
  display: block;
  margin-bottom: 10px;
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.stat-card strong {
  font-size: clamp(1.3rem, 3vw, 2rem);
}

.features,
.status-panel {
  margin-top: 26px;
  padding: 28px 24px;
  border: 1px solid var(--border);
  border-radius: 22px;
  background: rgba(15, 23, 42, 0.75);
  box-shadow: var(--shadow);
}

.features h2,
.status-panel h2 {
  margin: 0 0 20px;
  font-size: clamp(1.7rem, 3vw, 2.3rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.feature-grid article {
  padding: 22px 18px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.02);
}

.feature-grid h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.feature-grid p,
.status-list span {
  color: var(--muted);
  line-height: 1.7;
}

.status-list {
  display: grid;
  gap: 14px;
}

.status-list div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid var(--border);
}

.status-list div:last-child {
  border-bottom: none;
}

@media (max-width: 760px) {
  .topbar {
    flex-direction: column;
    gap: 14px;
  }

  nav {
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero,
  .feature-grid {
    grid-template-columns: 1fr;
  }
}
`,
  'public/app.js': `const serverStatus = document.getElementById('serverStatus');
const uptimeValue = document.getElementById('uptimeValue');
const lastUpdated = document.getElementById('lastUpdated');
const refreshStatus = document.getElementById('refreshStatus');

let startedAt = Date.now();

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}m ${seconds}s`;
}

function updateStatus() {
  const elapsed = Date.now() - startedAt;
  uptimeValue.textContent = formatTime(elapsed);
  lastUpdated.textContent = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  serverStatus.textContent = 'Live';
}

setInterval(updateStatus, 1000);
refreshStatus.addEventListener('click', updateStatus);
updateStatus();
`
};

for (const [filePath, content] of Object.entries(files)) {
  const fullPath = path.join(projectRoot, filePath);
  fs.writeFileSync(fullPath, content, 'utf8');
}

console.log('Project files created successfully.');
