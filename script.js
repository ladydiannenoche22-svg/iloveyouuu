'use strict';
/* ===================================================================
   43 MONTHSARY WEBSITE - script.js
   1) Your messages (edit them here)   2) Helpers & effects
   3) Galaxy heart intro               4) Sections & interactions
   =================================================================== */

/* ---------- 1) EDIT YOUR MESSAGES HERE ---------- */
const TIMELINE = [
  ['CHAPTER 1: THE BEGINNING', `Who would've thought that two people would end up sharing this much of a story?`],
  ['CHAPTER 2: THE HAPPY CHAOS', `All the random conversations, laughs, kulit moments, and little things that made our days special.`],
  ['CHAPTER 3: THE PLOT TWISTS', `Of course, our story wasn't always smooth. We had misunderstandings, difficult moments, and times when we didn't understand each other.`],
  ['CHAPTER 4: THE UNEXPECTED GOODBYES', `There were moments when we pushed each other away. Things weren't always easy, but those experiences taught us lessons.`],
  ['CHAPTER 5: FINDING OUR WAY BACK', `Somehow, we found our way back to each other. This time, with more lessons and a better understanding of what we need to work on.`],
  ['CHAPTER 6: OUR BETTER CHAPTER', `Here we are, still learning, growing, and creating new memories. I hope this chapter becomes even more beautiful.`]
];
const REASONS = [
  `I appreciate you for staying and continuing to try, even when things aren't always easy.`,
  `I appreciate the changes I've noticed in you. Seeing you grow means a lot to me.`,
  `I appreciate your efforts, even the little ones that you might think I don't notice.`,
  `I appreciate the happiness and laughter you bring into my life.`,
  `I appreciate the way we continue learning how to understand each other.`,
  `I appreciate that we still have opportunities to make things better.`,
  `I appreciate the memories we've created, even the random and chaotic ones.`,
  `Most importantly, I appreciate YOU. Not because you're perfect, but because you're someone I continue to value.`
];
const OPEN_WHEN = [
  [`OPEN WHEN YOU THINK I DON'T NOTICE YOUR EFFORTS`, `Love, I notice more than you think. I see the little things, the efforts, and the changes you've been making. You don't have to be perfect. I just want you to know that your efforts matter to me, and I appreciate them.`],
  [`OPEN WHEN WE HAVE A MISUNDERSTANDING`, `Please remember that we're on the same team. We don't always have to agree, but I hope we always try to listen and understand each other. Let's not let pride or assumptions become bigger than our love. We can talk things through.`],
  [`OPEN WHEN YOU MISS ME`, `Hi, love! I hope you know that somewhere, someone is thinking about you. I wish I could magically appear beside you right now, but for now, here's a little reminder that you're appreciated.`],
  [`OPEN WHEN YOU NEED TO FEEL LOVED`, `You are appreciated, valued, and important to me. I hope you never forget that. Thank you for being part of my life and for sharing this journey with me.`]
];
const RULES = [
  `Unlimited lambing and affection are encouraged.`, `Communication is better than silent treatment.`,
  `We must listen before making assumptions.`, `Random kulit moments are allowed anytime.`,
  `Both parties must make an effort.`, `Apologizing when wrong is mandatory.`,
  `Respect each other's feelings.`, `More dates, more memories, and more laughter.`,
  `No competition about who loves who more.`, `Both parties agree to keep growing together.`
];
const LETTER = [
  `Hi, love!`, `Happy 43rd monthsary!`,
  `Three years and seven months. Sometimes, I still can't believe how much time has passed and how many things we've experienced together.`,
  `Our relationship was never a perfect fairytale. We had misunderstandings, difficult moments, and even times when we ended up pushing each other away. There were chapters when things felt uncertain, and we didn't always know how to handle everything.`,
  `But despite those experiences, we found our way back to each other.`,
  `I want you to know how thankful I am for that. I've noticed the changes in you, and I genuinely appreciate the efforts you're making. Maybe I don't always say it, but the little things matter to me more than you know.`,
  `I'm also aware that I have things to improve. I know relationships require patience, understanding, communication, and effort from both sides. I don't expect us to become perfect overnight. I just hope we continue learning how to treat each other better.`,
  `Thank you for the laughter, the random moments, the memories, and even the lessons that helped us grow.`,
  `I hope we get to experience more birthdays, monthsaries, celebrations, adventures, and ordinary days together.`,
  `I don't want us to simply count the months. I want us to make those months meaningful.`,
  `Happy 43 months, love.`,
  `Here's to growing together, understanding each other better, and creating more beautiful memories.`,
  `I love you. ♡`,
  `Always yours,<br>Your favorite kulit person ♡`
];
const NO_MSGS = [`ERROR 404: WRONG ANSWER.`, `TRY AGAIN, LOVE.`, `YOU CANNOT ESCAPE THIS QUESTION.`, `THE "NOPE" BUTTON IS SCARED OF YOU. HAHAHA.`];
const FINAL = [`AFTER ALL THE GOODBYES...`, `AFTER ALL THE PLOT TWISTS...`, `AFTER EVERYTHING WE'VE BEEN THROUGH...`];

/* ---------- 2) HELPERS & EFFECTS ---------- */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;   // reduced-motion setting
const rnd = (a, b) => a + Math.random() * (b - a);
const wait = ms => new Promise(r => setTimeout(r, ms));
const center = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };
history.scrollRestoration = 'manual';

/* Twinkling stars (canvas = fast) */
const cv = $('#stars'), cx = cv.getContext('2d');
let stars = [];
function sizeStars() {
  cv.width = innerWidth; cv.height = innerHeight;
  stars = Array.from({ length: Math.min(280, Math.floor(innerWidth / 4)) }, () => ({
    x: Math.random() * cv.width, y: Math.random() * cv.height, r: rnd(.4, 1.7), s: rnd(.5, 3), p: rnd(0, 6.28),
    c: ['#fff', '#ffd9e8', '#cdb4f6'][Math.floor(rnd(0, 3))]
  }));
}
addEventListener('resize', sizeStars); sizeStars();
(function draw(t) {
  cx.clearRect(0, 0, cv.width, cv.height);
  if (!document.hidden) for (const s of stars) {
    cx.globalAlpha = RM ? .7 : .35 + .65 * Math.abs(Math.sin(t / 1000 * s.s + s.p));
    cx.fillStyle = s.c; cx.beginPath(); cx.arc(s.x, s.y, s.r, 0, 6.283); cx.fill();
  }
  requestAnimationFrame(draw);
})(0);

/* Floating hearts in the background */
setInterval(() => {
  if (document.hidden || RM) return;
  const e = document.createElement('span');
  e.className = 'fh'; e.textContent = ['♡', '♥', '✦', '✧'][Math.floor(rnd(0, 4))];
  e.style.cssText = `left:${rnd(0, 98)}vw;font-size:${rnd(12, 30)}px;color:${['#ff5fa2', '#f7b6cd', '#cdb4f6'][Math.floor(rnd(0, 3))]};animation-duration:${rnd(8, 15)}s`;
  $('#fx').appendChild(e); setTimeout(() => e.remove(), 15500);
}, 650);

/* Heart explosion / confetti */
function burst(x, y, n = 40, confetti = false) {
  if (RM) n = Math.min(n, 10);
  for (let i = 0; i < n; i++) {
    const e = document.createElement('span'); e.className = 'bp';
    if (confetti) e.style.cssText = `width:8px;height:12px;background:hsl(${rnd(280, 350)},90%,${rnd(60, 80)}%)`;
    else { e.textContent = ['♥', '♡', '✦', '✧'][i % 4]; e.style.cssText = `font-size:${rnd(12, 26)}px;color:hsl(${rnd(300, 350)},95%,70%)`; }
    e.style.left = x + 'px'; e.style.top = y + 'px'; document.body.appendChild(e);
    const a = rnd(0, 6.28), d = rnd(80, 300);
    e.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 },
      { transform: `translate(${Math.cos(a) * d}px,${Math.sin(a) * d + (confetti ? 160 : 0)}px) rotate(${rnd(-540, 540)}deg) scale(.2)`, opacity: 0 }],
      { duration: rnd(900, 1700), easing: 'cubic-bezier(.2,.8,.3,1)' }).onfinish = () => e.remove();
  }
}

/* Sparkling cursor trail */
let lastTrail = 0;
function trail(ev) {
  const now = performance.now();
  if (RM || now - lastTrail < 45) return;
  lastTrail = now;
  const p = ev.touches ? ev.touches[0] : ev, s = document.createElement('span');
  s.className = 'bp'; s.textContent = '✦';
  s.style.cssText = `left:${p.clientX}px;top:${p.clientY}px;font-size:${rnd(8, 16)}px;color:#ffd9e8;text-shadow:0 0 8px #ff5fa2`;
  document.body.appendChild(s);
  s.animate([{ opacity: 1, transform: 'translate(-50%,-50%)' }, { opacity: 0, transform: `translate(-50%,${rnd(10, 30)}px) scale(.3)` }], 700).onfinish = () => s.remove();
}
addEventListener('mousemove', trail);
addEventListener('touchmove', trail, { passive: true });

/* Progress bar */
addEventListener('scroll', () => {
  const h = document.documentElement;
  $('#bar').style.width = (scrollY / (h.scrollHeight - innerHeight) * 100 || 0) + '%';
}, { passive: true });

/* MUSIC - starts when the visitor taps "TAP TO BEGIN" (browsers never allow sound before a tap) */
const YT_ID = 'uR2EbFKugEs';   // OPTIONAL: paste a YouTube video ID here (the 11 letters after v= in the link) to play the FULL song for everyone
const TRACK_ID = '0A9lMMYFeyOHrRbBQMGFmO';          // Spotify track: When I Met You (only a 30-second preview unless logged in)
let mode = 'none', ctrl = null, playing = false;
window.onSpotifyIframeApiReady = api => {
  if (YT_ID) return;
  api.createController($('#spf'), { uri: 'spotify:track:' + TRACK_ID, width: '100%', height: 152 }, c => {
    ctrl = c;
    c.addListener('playback_update', e => {        // loop the song when it ends
      const d = e.data;
      if (!d.isPaused) playing = true;
      else if (playing && (d.position === 0 || d.position >= d.duration - 800)) { playing = false; c.restart(); }
    });
  });
};
const sp = document.createElement('script');
sp.src = 'https://open.spotify.com/embed/iframe-api/v1'; sp.async = true; if (!YT_ID) document.head.appendChild(sp);

$('#begin').onclick = async () => {
  $('#gate').classList.add('gone');
  try { await $('#bgm').play(); mode = 'mp3'; $('#music').textContent = '❚❚'; }   // your own mp3 file
  catch (err) {                       // no mp3 -> YouTube (if YT_ID is filled in) or Spotify
    $('#mp').classList.add('open'); $('#music').textContent = '✕';
    if (YT_ID) {
      mode = 'youtube'; const y = $('#yt');
      y.src = `https://www.youtube.com/embed/${YT_ID}?autoplay=1&loop=1&playlist=${YT_ID}&rel=0`; y.hidden = false;
    } else {
      mode = 'spotify';
      $('#mp small').textContent = 'No mp3 found, so this is the Spotify preview (full song only if logged in to Spotify) ♡';
      if (ctrl) ctrl.play(); else setTimeout(() => ctrl && ctrl.play(), 1500);
    }
  }
  playIntro();
};
$('#music').onclick = () => {
  const b = $('#bgm'), m = $('#music');
  if (mode === 'mp3') { if (b.paused) { b.play(); m.textContent = '❚❚'; } else { b.pause(); m.textContent = '♪'; } return; }
  $('#mp').classList.toggle('open');
  m.textContent = $('#mp').classList.contains('open') ? '✕' : '♪';   // closing the panel keeps the song playing
};

/* ---------- 3) GALAXY HEART INTRO ---------- */
(function buildScene() {
  const heart = (fill, shine) => `<svg viewBox="0 0 100 90"><path d="M50 88C20 62 2 44 2 26 2 12 13 2 27 2c10 0 19 6 23 14C54 8 63 2 73 2c14 0 25 10 25 24 0 18-18 36-48 62z" fill="${fill}"/>${shine ? '<ellipse cx="28" cy="20" rx="13" ry="6" fill="#fff" opacity=".6" transform="rotate(-35 28 20)"/>' : ''}</svg>`;
  let layers = '';
  for (let i = 0; i < 16; i++)   // 16 stacked slices = a thick, 3D-looking heart
    layers += `<div class="layer" style="--z:${(i - 8) * 2.6}px">${heart(`hsl(335,${70 + i}%,${28 + i * 2.4}%)`, i === 0 || i === 15)}</div>`;
  // [size, tiltX, tiltY, seconds per orbit, color]
  const rings = [['78%', '68deg', '10deg', '9s', '#ff5fa2'], ['100%', '72deg', '-35deg', '14s', '#cdb4f6'],
                 ['124%', '60deg', '55deg', '20s', '#ffffff'], ['148%', '75deg', '-70deg', '27s', '#8b5cf6']];
  const symbols = ['♥', '✦', '•', '♡'];
  const ringHTML = rings.map(([s, tx, ty, t, c]) =>
    `<div class="rg" style="--s:${s};--tx:${tx};--ty:${ty};--c:${c}"><div class="rs" style="--t:${t}">` +
    symbols.map((sy, k) => `<div class="arm" style="--a:${k * 90}deg"><i>${sy}</i></div>`).join('') + `</div></div>`).join('');
  $('#scene').innerHTML = `<div class="aura"></div><div class="hf"><div class="hb"><div class="hs">${layers}</div></div></div>${ringHTML}`;
})();

async function playIntro() {
  const lines = $$('#itext p');
  await wait(RM ? 400 : 4500);
  for (let i = 0; i < lines.length; i++) {
    lines[i].classList.add('show'); await wait(RM ? 800 : 2600);
    if (i < lines.length - 1) { lines[i].classList.remove('show'); await wait(500); }
  }
  $('#enter').classList.add('in');
}
addEventListener('load', () => setTimeout(() => $('#loader').classList.add('gone'), 1200));   // intro starts after the TAP TO BEGIN button

$('#enter').onclick = async () => {
  $('#scene').classList.add('boost');                       // brighter heart + rings expand
  const [x, y] = center($('#scene')); burst(x, y, 90); burst(x, y, 40);
  await wait(RM ? 200 : 1400); $('#intro').classList.add('out');
  await wait(RM ? 200 : 1400);
  $('#intro').hidden = true; $('#main').hidden = false; document.body.classList.remove('lock');
  $$('.rv').forEach(el => io.observe(el));
};

/* ---------- 4) SECTIONS & INTERACTIONS ---------- */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });

// Build content from the arrays above
$('#tl').innerHTML = TIMELINE.map(([h, p]) => `<div class="tc glass rv"><h3>${h}</h3><p>${p}</p></div>`).join('');
$('#cards').innerHTML = REASONS.map((t, i) => `<div class="fc rv"><div class="fi"><div class="ff">♥<b>${i + 1}</b></div><div class="fb glass">${t}</div></div></div>`).join('');
$('#oes').innerHTML = OPEN_WHEN.map(([h, m]) => `<div class="oe glass rv"><h3>${h}</h3><div class="ob"><p>${m}</p></div></div>`).join('');
$('#rules').innerHTML = RULES.map(r => `<li>${r}</li>`).join('');
$('#paper').innerHTML = LETTER.map(p => `<p class="rv">${p}</p>`).join('');
$$('.env').forEach(e => e.innerHTML = `<i class="bk"></i><div class="letter">${e.dataset.t}</div><i class="pk"></i><i class="fl"></i><b class="seal">♥</b>`);
$('#nw').insertAdjacentHTML('beforeend', '<div class="orb">' + [0, 1, 2, 3, 4, 5].map(k => `<div class="arm" style="--a:${k * 60}deg"><i>${k % 2 ? '♡' : '♥'}</i></div>`).join('') + '</div>');

// Welcome envelope
$('#env').onclick = () => {
  if ($('#env').classList.contains('open')) return;
  $('#env').classList.add('open'); const [x, y] = center($('#env')); burst(x, y, 25);
  setTimeout(() => $('#startBtn').hidden = false, 1400);
};
$('#startBtn').onclick = () => $('#s2').scrollIntoView({ behavior: 'smooth' });

// Counting up to 43
new IntersectionObserver((es, o) => {
  if (!es[0].isIntersecting) return; o.disconnect();
  let n = 0; const t = setInterval(() => { $('#num').textContent = ++n; if (n >= 43) clearInterval(t); }, RM ? 5 : 60);
}, { threshold: .6 }).observe($('#num'));

// Flip cards + open-when envelopes
document.addEventListener('click', e => {
  const c = e.target.closest('.fc'); if (c) c.classList.toggle('flip');
  const o = e.target.closest('.oe');
  if (o) { o.classList.toggle('open'); if (o.classList.contains('open')) { const [x, y] = center(o); burst(x, y, 14); } }
});

// Funny question
let nc = 0;
const dodge = () => { $('#no').style.transform = `translate(${rnd(-110, 110)}px,${rnd(-70, 70)}px)`; $('#qmsg').textContent = NO_MSGS[nc++ % NO_MSGS.length]; };
$('#no').addEventListener('mouseenter', dodge);
$('#no').addEventListener('click', dodge);
$('#no').addEventListener('touchstart', e => { e.preventDefault(); dodge(); }, { passive: false });
$('#yes').onclick = e => {
  const [x, y] = center(e.currentTarget); burst(x, y, 70); burst(x, y, 30, true);
  $('#qmsg').textContent = 'GOOD ANSWER! HAHAHA. I KNEW IT!'; $('#no').hidden = true;
};

// Contract
$('#agree').onchange = () => $('#accept').disabled = !$('#agree').checked;
$('#accept').onclick = () => {
  $('#sign').classList.add('go'); const [x, y] = center($('#accept'));
  burst(x, y, 60, true); burst(x, y, 40);
  $('#cmsg').textContent = 'CONTRACT APPROVED! HAHAHA. NO REFUNDS!'; $('#accept').disabled = true;
};

// Love letter envelope -> paper (paragraphs fade in as you scroll)
$('#env2').onclick = () => {
  if ($('#env2').classList.contains('open')) return;
  $('#env2').classList.add('open'); setTimeout(() => { $('#paper').hidden = false; }, 1200);
};

// Final sequence
new IntersectionObserver(async (es, o) => {
  if (!es[0].isIntersecting) return; o.disconnect();
  const fl = $('#fl');
  for (const l of FINAL) { fl.textContent = l; fl.classList.add('show'); await wait(RM ? 900 : 2300); fl.classList.remove('show'); await wait(RM ? 300 : 900); }
  fl.hidden = true; $('#fend').hidden = false; $('#fend').classList.add('go');
}, { threshold: .7 }).observe($('#fin'));

// Replay: reloads the page so everything starts fresh from the galaxy heart
$('#replay').onclick = () => location.reload();
