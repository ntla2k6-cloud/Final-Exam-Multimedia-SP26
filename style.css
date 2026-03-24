:root {
  --bg: #0a0c10;
  --surface: #111420;
  --surface2: #181d2e;
  --border: #1e2438;
  --border2: #252d45;
  --accent: #4f8ef7;
  --accent2: #7c5af0;
  --green: #1fd67a;
  --red: #f75f5f;
  --yellow: #f7c948;
  --orange: #f79348;
  --cyan: #2dd4f7;
  --text: #e2e6f3;
  --muted: #5a6380;
  --muted2: #8591b3;
  --font: 'Be Vietnam Pro', sans-serif;
  --mono: 'Space Mono', monospace;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font);
  min-height: 100vh;
}

/* NAV */
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(10,12,16,0.92);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
  padding: 0 20px;
  display: flex;
  align-items: center;
  overflow-x: auto;
  scrollbar-width: none;
}
.nav::-webkit-scrollbar { display: none; }
.nav-brand {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--accent);
  white-space: nowrap;
  padding: 16px 20px 16px 0;
  border-right: 1px solid var(--border2);
  margin-right: 12px;
  letter-spacing: 1px;
}
.tab-btn {
  background: none;
  border: none;
  color: var(--muted);
  font-family: var(--font);
  font-size: 12px;
  font-weight: 600;
  padding: 16px 14px;
  cursor: pointer;
  white-space: nowrap;
  border-bottom: 2px solid transparent;
  transition: color 0.2s, border-color 0.2s;
  letter-spacing: 0.3px;
}
.tab-btn:hover { color: var(--text); }
.tab-btn.active { color: var(--accent); border-bottom-color: var(--accent); }
.tab-btn .count {
  display: inline-block;
  background: var(--border2);
  color: var(--muted2);
  font-family: var(--mono);
  font-size: 10px;
  padding: 1px 6px;
  border-radius: 10px;
  margin-left: 5px;
}
.tab-btn.active .count { background: rgba(79,142,247,0.15); color: var(--accent); }

/* MAIN */
.main { max-width: 780px; margin: 0 auto; padding: 32px 16px 80px; }

/* TOPIC PAGE */
.topic-page { display: none; }
.topic-page.active { display: block; }

/* TOPIC HEADER */
.topic-header {
  margin-bottom: 28px;
  padding: 24px 28px;
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 18px;
  display: flex;
  align-items: center;
  gap: 20px;
}
.topic-icon {
  width: 52px; height: 52px;
  border-radius: 14px;
  display: flex; align-items: center; justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.topic-info h2 { font-size: 18px; font-weight: 800; margin-bottom: 4px; }
.topic-info p { font-size: 12px; color: var(--muted); }
.topic-stats { margin-left: auto; text-align: right; flex-shrink: 0; }
.topic-score { font-family: var(--mono); font-size: 28px; font-weight: 700; line-height: 1; margin-bottom: 3px; }
.topic-score-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }

/* PROGRESS */
.progress-wrap { margin-bottom: 24px; }
.progress-info {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  color: var(--muted);
  font-family: var(--mono);
  margin-bottom: 6px;
}
.progress-track { height: 3px; background: var(--border2); border-radius: 3px; overflow: hidden; }
.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent), var(--accent2));
  border-radius: 3px;
  transition: width 0.5s cubic-bezier(.4,0,.2,1);
}

/* SCORE ROW */
.score-row { display: flex; gap: 10px; margin-bottom: 24px; }
.score-badge {
  flex: 1;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 12px;
  text-align: center;
}
.score-badge .num { font-family: var(--mono); font-size: 20px; font-weight: 700; margin-bottom: 2px; }
.score-badge .lbl { font-size: 10px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
.score-badge.sc .num { color: var(--green); }
.score-badge.sw .num { color: var(--red); }
.score-badge.sr .num { color: var(--accent); }

/* QUIZ CARD */
.quiz-card {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 20px;
  overflow: hidden;
  animation: cardIn 0.35s cubic-bezier(.4,0,.2,1);
}
@keyframes cardIn {
  from { opacity: 0; transform: translateY(14px); }
  to   { opacity: 1; transform: translateY(0); }
}
.card-top { padding: 28px 30px 0; }
.q-meta { display: flex; align-items: center; gap: 10px; margin-bottom: 18px; }
.q-num { font-family: var(--mono); font-size: 11px; color: var(--muted); letter-spacing: 2px; text-transform: uppercase; }
.q-tag { font-size: 10px; font-weight: 600; padding: 3px 8px; border-radius: 6px; letter-spacing: 0.5px; text-transform: uppercase; }
.q-en { font-size: 17px; font-weight: 700; color: var(--text); line-height: 1.55; margin-bottom: 10px; }
.q-vi { font-size: 14px; font-weight: 400; color: var(--muted2); line-height: 1.55; padding-bottom: 22px; border-bottom: 1px solid var(--border); }

/* OPTIONS */
.options { padding: 22px 30px 26px; display: flex; flex-direction: column; gap: 11px; }
.opt-btn {
  display: grid;
  grid-template-columns: 38px 1fr;
  gap: 12px;
  align-items: start;
  background: var(--surface2);
  border: 1.5px solid var(--border);
  border-radius: 12px;
  padding: 13px 16px 13px 13px;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.18s, background 0.18s, transform 0.12s;
  width: 100%;
}
.opt-btn:hover:not(:disabled) {
  border-color: rgba(79,142,247,0.5);
  background: rgba(79,142,247,0.04);
  transform: translateX(3px);
}
.opt-btn:disabled { cursor: default; }
.opt-key {
  width: 30px; height: 30px;
  border-radius: 8px;
  display: flex; align-items: center; justify-content: center;
  font-family: var(--mono); font-size: 12px; font-weight: 700;
  background: var(--border2); color: var(--muted);
  flex-shrink: 0;
  transition: background 0.2s, color 0.2s;
}
.opt-en { font-size: 14px; font-weight: 500; color: var(--text); line-height: 1.45; margin-bottom: 3px; }
.opt-vi { font-size: 12px; color: var(--muted); line-height: 1.45; }
.opt-btn.correct { border-color: var(--green); background: rgba(31,214,122,0.06); }
.opt-btn.correct .opt-key { background: var(--green); color: #0a0c10; }
.opt-btn.wrong { border-color: var(--red); background: rgba(247,95,95,0.06); }
.opt-btn.wrong .opt-key { background: var(--red); color: #fff; }
.opt-btn.dimmed { opacity: 0.3; }

/* RESULT BOX */
.result-box {
  margin: 0 30px 22px;
  border-radius: 12px;
  padding: 16px 18px;
  display: none;
  animation: fadeUp 0.3s ease;
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(6px); }
  to   { opacity: 1; transform: translateY(0); }
}
.result-box.show { display: block; }
.result-box.rb-correct { background: rgba(31,214,122,0.07); border: 1px solid rgba(31,214,122,0.2); }
.result-box.rb-wrong   { background: rgba(247,95,95,0.07);  border: 1px solid rgba(247,95,95,0.18); }
.rb-title {
  font-size: 12px; font-weight: 800;
  letter-spacing: 1px; text-transform: uppercase;
  margin-bottom: 8px;
  display: flex; align-items: center; gap: 7px;
}
.rb-correct .rb-title { color: var(--green); }
.rb-wrong   .rb-title { color: var(--red); }
.rb-explain { font-size: 13px; color: var(--text); line-height: 1.7; }
.rb-explain strong { color: var(--yellow); font-weight: 600; }

/* NEXT BTN */
.next-btn {
  display: none;
  margin: 0 30px 30px;
  width: calc(100% - 60px);
  padding: 13px;
  background: linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%);
  color: #fff;
  font-family: var(--font); font-size: 14px; font-weight: 700;
  border: none; border-radius: 11px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
  letter-spacing: 0.3px;
}
.next-btn:hover { opacity: 0.88; transform: translateY(-1px); }
.next-btn.show { display: block; }

/* FINAL SCREEN */
.final-screen { display: none; animation: cardIn 0.4s ease; }
.final-screen.show { display: block; }
.final-card {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
}
.final-grade {
  font-family: var(--mono); font-size: 72px; font-weight: 700;
  line-height: 1; margin-bottom: 6px;
}
.final-msg { font-size: 14px; color: var(--muted2); margin-bottom: 32px; }
.final-stats { display: flex; justify-content: center; gap: 40px; margin-bottom: 36px; }
.fs-item { text-align: center; }
.fs-item .n { font-family: var(--mono); font-size: 32px; font-weight: 700; margin-bottom: 4px; }
.fs-item .t { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: 1px; }
.fs-item.fg .n { color: var(--green); }
.fs-item.fr .n { color: var(--red); }
.restart-btn {
  padding: 14px 44px;
  background: linear-gradient(135deg, var(--accent), var(--accent2));
  color: #fff;
  font-family: var(--font); font-size: 14px; font-weight: 700;
  border: none; border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.1s;
}
.restart-btn:hover { opacity: 0.88; transform: translateY(-1px); }

/* OVERVIEW GRID */
.overview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 8px;
}
.ov-card {
  background: var(--surface);
  border: 1px solid var(--border2);
  border-radius: 14px;
  padding: 18px 20px;
  cursor: pointer;
  transition: border-color 0.2s, transform 0.15s;
}
.ov-card:hover { border-color: var(--accent); transform: translateY(-2px); }
.ov-icon { font-size: 28px; margin-bottom: 10px; }
.ov-name { font-size: 14px; font-weight: 700; margin-bottom: 4px; }
.ov-vi { font-size: 12px; color: var(--muted); margin-bottom: 12px; }
.ov-bar { height: 3px; background: var(--border2); border-radius: 3px; overflow: hidden; margin-bottom: 8px; }
.ov-fill { height: 100%; border-radius: 3px; transition: width 0.5s ease; }
.ov-stats { display: flex; justify-content: space-between; font-size: 11px; color: var(--muted); font-family: var(--mono); }
.ov-stats .done { color: var(--green); }

@media (max-width: 500px) {
  .card-top { padding: 22px 18px 0; }
  .options { padding: 18px 18px 20px; }
  .result-box { margin: 0 18px 18px; }
  .next-btn { margin: 0 18px 22px; width: calc(100% - 36px); }
  .topic-header { flex-wrap: wrap; }
  .topic-stats { margin-left: 0; text-align: left; }
}
