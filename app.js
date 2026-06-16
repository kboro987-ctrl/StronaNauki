/* ============ INŻYNIERIA FINANSOWA — logika aplikacji ============ */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const store = {
  get: (k, d) => { try { return JSON.parse(localStorage.getItem("if_" + k)) ?? d; } catch { return d; } },
  set: (k, v) => localStorage.setItem("if_" + k, JSON.stringify(v))
};

/* ---------- Motyw ---------- */
function initTheme() {
  const t = store.get("theme", "dark");
  document.documentElement.setAttribute("data-theme", t);
  $("#themeBtn").textContent = t === "dark" ? "☀️" : "🌙";
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  store.set("theme", next);
  $("#themeBtn").textContent = next === "dark" ? "☀️" : "🌙";
}

/* ---------- Nawigacja widoków ---------- */
function showView(name) {
  $$(".view").forEach(v => v.classList.toggle("active", v.id === "view-" + name));
  $$("nav.mainnav button").forEach(b => b.classList.toggle("active", b.dataset.view === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ---------- Kompendium ---------- */
function buildCompendium() {
  const side = $("#compSidebar");
  const body = $("#compBody");
  side.innerHTML = "<h4>Spis treści</h4>";
  body.innerHTML = "";
  COMPENDIUM.forEach(m => {
    const a = document.createElement("a");
    a.textContent = m.title;
    a.dataset.target = m.id;
    a.onclick = () => {
      $("#mod-" + m.id).scrollIntoView({ behavior: "smooth", block: "start" });
    };
    side.appendChild(a);

    const art = document.createElement("article");
    art.className = "module";
    art.id = "mod-" + m.id;
    art.innerHTML = m.html;
    body.appendChild(art);
  });
  // podświetlanie aktywnej sekcji przy scrollu
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (en.isIntersecting) {
        const id = en.target.id.replace("mod-", "");
        $$("#compSidebar a").forEach(x => x.classList.toggle("active", x.dataset.target === id));
      }
    });
  }, { rootMargin: "-20% 0px -70% 0px" });
  $$("#compBody article").forEach(a => obs.observe(a));
}

/* ---------- Wzory ---------- */
function buildFormulas() {
  const wrap = $("#wzoryGrid");
  wrap.innerHTML = "";
  FORMULAS.forEach(f => {
    const d = document.createElement("div");
    d.className = "card";
    d.style.cursor = "default";
    d.innerHTML = `<h3>${f.t}</h3><div class="formula" style="margin:8px 0">${f.f}</div><p>${f.d}</p>`;
    wrap.appendChild(d);
  });
}

/* ---------- Testy: menu ---------- */
function buildQuizMenu() {
  const grid = $("#quizGrid");
  grid.innerHTML = "";
  const best = store.get("best", {});
  Object.entries(QUIZZES).forEach(([key, qz]) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    const b = best[key];
    if (qz.book) card.style.borderColor = "var(--warn)";
    card.innerHTML = `
      <span class="count">${qz.questions.length} pyt.</span>
      <div class="ic" style="font-size:1.7rem">${qz.icon}</div>
      <h3>${qz.title}</h3>
      <p>${qz.desc}</p>
      ${qz.book ? `<div class="best" style="color:var(--warn)">📕 Oryginalne pytania z książki GPW</div>` : ""}
      ${b != null ? `<div class="best">🏆 Najlepszy wynik: ${b}%</div>` : ""}`;
    card.onclick = () => startQuiz(key);
    grid.appendChild(card);
  });
  // egzamin mieszany
  const exam = document.createElement("div");
  exam.className = "quiz-card";
  exam.style.gridColumn = "1 / -1";
  exam.style.background = "linear-gradient(135deg, rgba(108,140,255,.18), rgba(63,198,168,.12))";
  const be = store.get("best", {}).__exam;
  exam.innerHTML = `
    <span class="count">20 pyt.</span>
    <div class="ic" style="font-size:1.7rem">🎓</div>
    <h3>Egzamin próbny (mieszany)</h3>
    <p>Losowe 20 pytań ze wszystkich działów — sprawdź się przed zaliczeniem.</p>
    ${be != null ? `<div class="best">🏆 Najlepszy wynik: ${be}%</div>` : ""}`;
  exam.onclick = () => startExam();
  grid.appendChild(exam);
}

/* ---------- Silnik quizu ---------- */
let RUN = null;
function shuffle(a){ a=[...a]; for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]];} return a; }

function startQuiz(key) {
  const qz = QUIZZES[key];
  RUN = { key, title: qz.title, qs: shuffle(qz.questions), i: 0, answers: [], correct: 0 };
  showView("runner");
  renderQuestion();
}
function startExam() {
  let pool = [];
  Object.values(QUIZZES).forEach(qz => qz.questions.forEach(q => pool.push(q)));
  RUN = { key: "__exam", title: "Egzamin próbny", qs: shuffle(pool).slice(0, 20), i: 0, answers: [], correct: 0 };
  showView("runner");
  renderQuestion();
}

function renderQuestion() {
  const r = $("#view-runner");
  const total = RUN.qs.length;
  const q = RUN.qs[RUN.i];
  const opts = q.o.map((opt, idx) => {
    const key = String.fromCharCode(65 + idx);
    return `<button class="opt" data-idx="${idx}"><span class="key">${key}</span><span>${opt}</span></button>`;
  }).join("");
  r.innerHTML = `
    <div class="runner">
      <div class="bar"><i style="width:${(RUN.i)/total*100}%"></i></div>
      <div class="progress-row"><span>${RUN.title}</span><span>Pytanie <b>${RUN.i+1}</b> / ${total} · Poprawne: ${RUN.correct}</span></div>
      <div class="qtext"><span class="num">${RUN.i+1}.</span> ${q.q}</div>
      <div class="opts">${opts}</div>
      <div class="explain" id="explain"></div>
      <div class="runner-foot">
        <button class="btn ghost" id="quitBtn">✕ Zakończ</button>
        <button class="btn" id="nextBtn" disabled>Dalej →</button>
      </div>
    </div>`;
  $$("#view-runner .opt").forEach(b => b.onclick = () => chooseAnswer(parseInt(b.dataset.idx)));
  $("#quitBtn").onclick = () => { if (confirm("Zakończyć test? Wynik nie zostanie zapisany.")) showView("testy"); };
  $("#nextBtn").onclick = nextQuestion;
}

function chooseAnswer(idx) {
  const q = RUN.qs[RUN.i];
  const opts = $$("#view-runner .opt");
  opts.forEach((b, i) => {
    b.classList.add("locked");
    b.onclick = null;
    if (i === q.a) b.classList.add("correct");
    if (i === idx && idx !== q.a) b.classList.add("wrong");
  });
  const ok = idx === q.a;
  if (ok) RUN.correct++;
  RUN.answers.push({ q: q.q, picked: idx, correct: q.a, opts: q.o, ok });
  const ex = $("#explain");
  ex.classList.add("show");
  ex.innerHTML = `${ok ? "✅ <b>Dobrze!</b>" : "❌ <b>Niepoprawnie.</b>"} ${q.e}`;
  $("#nextBtn").disabled = false;
  $("#nextBtn").textContent = RUN.i + 1 === RUN.qs.length ? "Zobacz wynik →" : "Dalej →";
}

function nextQuestion() {
  RUN.i++;
  if (RUN.i >= RUN.qs.length) showResult();
  else renderQuestion();
}

function showResult() {
  const total = RUN.qs.length;
  const pct = Math.round(RUN.correct / total * 100);
  // zapis najlepszego wyniku
  const best = store.get("best", {});
  if (best[RUN.key] == null || pct > best[RUN.key]) { best[RUN.key] = pct; store.set("best", best); }
  buildQuizMenu();

  let msg, ring;
  if (pct >= 90) { msg = "Doskonale! Materiał opanowany. 🎉"; }
  else if (pct >= 70) { msg = "Dobry wynik — jeszcze tylko kilka szczegółów."; }
  else if (pct >= 50) { msg = "Nieźle, ale warto powtórzyć kompendium."; }
  else { msg = "Przejrzyj kompendium i spróbuj ponownie."; }

  const review = RUN.answers.map((a, i) => {
    const pickTxt = a.picked != null ? a.opts[a.picked] : "—";
    return `<div class="ri ${a.ok ? "ok" : "no"}">
      <div class="q">${i+1}. ${a.q}</div>
      <div class="a">${a.ok ? "✅" : "❌ Twoja: <i>"+pickTxt+"</i> · "}Poprawna: <b>${a.opts[a.correct]}</b></div>
    </div>`;
  }).join("");

  $("#view-runner").innerHTML = `
    <div class="runner">
      <div class="result">
        <div class="scorering" style="--p:${pct}%"><span>${pct}%</span></div>
        <h2>${RUN.correct} / ${total} poprawnych</h2>
        <div class="msg">${msg}</div>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap">
          <button class="btn" id="retryBtn">↻ Powtórz test</button>
          <button class="btn ghost" id="backBtn">← Wszystkie testy</button>
          <button class="btn ghost" id="compBtn">📖 Do kompendium</button>
        </div>
      </div>
      <div class="review"><h3>Przegląd odpowiedzi</h3>${review}</div>
    </div>`;
  $("#retryBtn").onclick = () => RUN.key === "__exam" ? startExam() : startQuiz(RUN.key);
  $("#backBtn").onclick = () => showView("testy");
  $("#compBtn").onclick = () => showView("kompendium");
}

/* ---------- Start ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  buildCompendium();
  buildFormulas();
  buildQuizMenu();
  $("#themeBtn").onclick = toggleTheme;
  $$("nav.mainnav button").forEach(b => b.onclick = () => showView(b.dataset.view));
  $$("[data-goto]").forEach(el => el.onclick = () => showView(el.dataset.goto));
  showView("home");
});
