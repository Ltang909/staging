/* =========================================================================
   ██  EDIT YOUR CONTENT HERE  ██
   Everything worth changing lives in this CONFIG block. Save, re-upload.
   No build step.

   Honesty note: the "receipts" are TRUE facts pulled from leontang.ca
   (roles, brands, tools, years) — but not your real campaign KPIs. Drop your
   real numbers in where you can; it's your site.
   ========================================================================= */

const CONFIG = {
  person: {
    name: "Leon Tang",
    role: "Analytics Junkie · AI Native Marketer",
    avatar: "LT",
    photo: "assets/leon.jpg", // set to "" to fall back to the LT initials
    status: "neck-deep in posthog",
    pitch:
      "I sit at the intersection of creativity, data, and technology. I build the systems that make marketing measurable, dig into the data to find what actually moves the needle, and turn those insights into action.",
    email: "leon@leontang.ca",
    ctaLabel: "Get in touch",
    linkedin: "https://www.linkedin.com/in/leon-tang-digital-marketer/",
    resume: "https://leontang.ca/assets/Leon-Tang-Resume-2026.pdf",
  },

  workspace: "leontang",

  // ---- BRAND LOGOS (pulled from leontang.ca) ----
  // These load straight from your domain. To bundle them locally instead
  // (faster, offline-proof): download each into assets/brands/ and change
  // brandBase to "assets/brands/". Any logo that fails to load is hidden.
  brandBase: "https://leontang.ca/old/assets/Images/",
  brands: [
    { name: "Alfa Romeo", file: "alfa-logo.jpg", url: "https://www.alfaromeo.ca" },
    { name: "Jeep", file: "jeep-logo.jpg", url: "https://www.jeep.ca" },
    { name: "Dodge", file: "dodge-logo.jpg", url: "https://dodge.ca" },
    { name: "Ram", file: "ram-logo.jpg", url: "https://ramtruck.ca/" },
    { name: "Chrysler", file: "chrysler-logo.jpg", url: "https://chrysler.ca" },
    { name: "Fiat", file: "fiat-logo.jpg", url: "https://fiatcanada.com" },
    { name: "Wagoneer", file: "wagoneer-logo.jpg", url: "https://www.wagoneer.ca/" },
    { name: "Samsung", file: "samsung-logo.jpg", url: "https://www.samsung.com/" },
    { name: "Hennessy", file: "hennessy-logo.jpg", url: "https://www.hennessy.com/en-int" },
    { name: "Gilead Sciences", file: "gilead-logo.jpg", url: "https://www.gilead.com/" },
    { name: "OLG", file: "olg-logo.jpg", url: "https://olg.ca" },
    { name: "CPA Ontario", file: "cpao-logo.jpg", url: "https://www.cpaontario.ca" },
    { name: "Adecco Group", file: "Adecco_Group_logo.png", url: "https://www.adeccogroup.com/" },
    { name: "QA Wolf", file: "qa_wolf_logo.png", url: "https://qawolf.com/" },
    { name: "Impark", file: "impark-logo.jpg", url: "https://www.impark.com" },
    { name: "Republic Parking", file: "republic-parking-logo.jpg", url: "https://www.republicparking.com/" },
  ],

  // ---- CONTACT FORM ----
  contact: {
    endpoint: "https://formsubmit.co/ajax/leon@leontang.ca",
    subject: "New message from your portfolio",
  },

  // ---- AI CHAT (optional, keyless, free) ----
  // Routes DMs + channel replies through a free public LLM (Pollinations).
  // No API key. If it's slow/down, it silently falls back to the scripted
  // replies below. Set enabled:false to use ONLY the scripted replies.
  ai: {
    enabled: true,
    endpoint: "https://text.pollinations.ai/openai",
    model: "openai",
    timeoutMs: 8000,
    // extra flavour appended to the persona prompt — tune Leon's voice here
    voice:
      "Voice: lowercase, 1-3 short punchy sentences, quirky and playful with dry wit. Lean into analytics/marketing nerd humor, the odd self-deprecating aside, and 1-2 fitting emoji. Occasionally drop a tiny unexpected tangent or a hot take, then reel it back. Never use markdown headers or bullet points. Never invent specific metrics, clients, or claims beyond the facts given.",
  },

  channels: [
    { name: "experience", topic: "ten years of roles — pull a thread for the story", active: true, unread: 0 },
    { name: "skills", topic: "the toolkit — analytics, media, web, leadership", unread: 3 },
    { name: "testimonials", topic: "what the people I've worked with actually said", unread: 2 },
  ],

  // #experience — each = one message + one case-study thread
  experience: [
    {
      emoji: "🐺", time: "9:02 AM",
      headline: "Marketing @ QA Wolf — scaled inbound into real revenue.",
      sub: "252% more MQLs, 47% more opps, 42% more ARR. 2024 → now.",
      reactions: [["🐺", 31], ["📈", 27], ["🔥", 19]],
      logos: ["QA Wolf"],
      thread: {
        story:
          "I led the strategy behind scaling inbound at QA Wolf — a dev-tooling company selling to engineers, a crowd that can smell marketing from a mile away. Three levers did the heavy lifting: pushing more top-of-funnel activity to grow demand, rebuilding tracking inside Salesforce so we could actually see user journeys, and A/B testing across channels, strategies, and copy to find the variants that won on the KPIs that mattered.",
        receipts: [["Impact", "+252% MQLs · +47% opps · +42% ARR"], ["Levers", "TOF demand gen · SFDC tracking · A/B tests"], ["Audience", "developers (tough room)"]],
        honest:
          "Marketing to engineers means the copy has to be true, specific, and fluff-free or it dies on contact. That constraint quietly made me a sharper marketer everywhere else.",
      },
    },
    {
      emoji: "🚀", time: "10:18 AM",
      headline: "Performance Marketing & Data Analytics Manager @ EZRA.",
      sub: "Ran paid media, the website, and the analytics function. 2022 → 2024.",
      reactions: [["📊", 34], ["🙌", 21], ["📈", 16]],
      thread: {
        story:
          "At EZRA (a global coaching business) I managed a team optimizing the corporate website and the paid media strategy, and I led the marketing data analytics function end-to-end — defining the KPIs, surfacing the insights, and actually acting on them. I also owned the budgeting for digital operations, so the numbers I reported were the same numbers I had to spend against.",
        receipts: [["Owned", "paid media · SEO web · Email · analytics · budget"], ["Led", "a team + the KPI framework"], ["Span", "global GTM"]],
        honest:
          "Owning both the insight and the budget keeps you honest. It's easy to recommend a spend when someone else has to defend it — much harder when the line item is yours.",
      },
    },
    {
      emoji: "🎓", time: "11:47 AM",
      headline: "College Instructor, Digital Marketing @ Greystone.",
      sub: "Taught working adults the hands-on version. NPS of 100.",
      reactions: [["🎓", 33], ["❤️", 22], ["🙌", 14]],
      thread: {
        story:
          "I teach digital marketing at Greystone College to adults already working across different industries — the applied, 'here's how the tools actually work' version of the course I wish I'd had. Covered the full stack of the craft: UI/UX, SEO, eCommerce, and campaign setup and management.",
        receipts: [["Where", "Greystone College"], ["Taught", "UI/UX · SEO · eCommerce · campaigns"], ["Score", "NPS 100"]],
        honest:
          "Nothing exposes the gaps in your own knowledge like a room of adults asking 'but why?' Best thing I've done for my own craft, hands down.",
      },
    },
    {
      emoji: "🏎️", time: "1:20 PM",
      headline: "Manager, Analytics @ Publicis — the auto-brand measurement layer.",
      sub: "Jeep, Alfa Romeo, Dodge, Ram, Chrysler, Fiat, Wagoneer. 2021 → 2022.",
      reactions: [["🏎️", 36], ["📊", 24], ["🔥", 18]],
      logos: ["Jeep", "Alfa Romeo", "Dodge", "Ram", "Chrysler", "Fiat", "Wagoneer"],
      thread: {
        story:
          "Agency-side at Publicis, I led daily web-analytics reporting across multiple accounts and managed a team of web and media analysts. Jeep was my primary client for web optimization and analysis. Hands-on the whole way — BigQuery, Google Analytics, Google Tag Manager, Data Studio, and Tableau — and I ran the recurring and ad-hoc report presentations with clients directly.",
        receipts: [["Primary client", "Jeep (Stellantis brands)"], ["Stack", "BigQuery · GA · GTM · Data Studio · Tableau"], ["Led", "a team of analysts"]],
        honest:
          "Car buyers don't convert on the website — they convert at the dealership. Half the job was measuring what happens after the click, where most tracking quietly gives up.",
      },
    },
    {
      emoji: "🛒", time: "2:55 PM",
      headline: "Digital Specialist @ CPA Ontario — built the eCommerce engine.",
      sub: "Strategy, analytics framework, and a new storefront. 2019 → 2021.",
      reactions: [["🛒", 28], ["📈", 22], ["✨", 15]],
      logos: ["CPA Ontario"],
      thread: {
        story:
          "At the regulator for Ontario's CPAs, I created and implemented the digital strategy for growing eCommerce revenue through Professional Developer courses and built the analytics framework for the storefront. I helped shape the UI/UX of a new eCommerce site, optimized SEO across platforms, and reported campaign KPIs through Data Studio — leaning on GTM and GA to light up new data touchpoints, and on HTML, CSS, and jQuery to keep it responsive on mobile. Campaigns ran across Google Ads, LinkedIn, and Meta.",
        receipts: [["Built", "eCommerce strategy + analytics framework"], ["Stack", "GA · GTM · Data Studio · HTML/CSS/jQuery"], ["Media", "Google Ads · LinkedIn · Meta"]],
        honest:
          "A regulator moves carefully, and that rubs off. It taught me the rigor to make a number defensible before I ever put it in front of a stakeholder.",
      },
    },
    {
      emoji: "🅿️", time: "4:10 PM",
      headline: "Digital Marketing Specialist @ Impark.",
      sub: "Visibility, landing pages, and a DSLR. 2018 → 2019.",
      reactions: [["📸", 26], ["🔥", 17], ["👏", 12]],
      logos: ["Impark"],
      thread: {
        story:
          "At one of North America's largest parking operators, I improved the company's online visibility through Meta Ads, Google Ads, social, and SEO. I also built and improved landing pages in WordPress with front-end HTML5, CSS3, and jQuery, sharpened photos and video in the Adobe Creative Suite, and shot professional stills and footage on DSLR cameras.",
        receipts: [["Media", "Meta · Google Ads · social · SEO"], ["Web", "WordPress · HTML5 · CSS3 · jQuery"], ["Creative", "Adobe Suite · DSLR photo/video"]],
        honest:
          "Doing the creative and the campaigns myself meant I never got to blame the other team. Taught accountability to 24 year old me.",
      },
    },
    {
      emoji: "🧩", time: "5:26 PM",
      headline: "Digital Marketing Specialist @ ConsulNet — where it started.",
      sub: "Client campaigns and branding on a $1.2M budget. 2016 → 2018.",
      reactions: [["🌱", 24], ["🙌", 16], ["💼", 11]],
      thread: {
        story:
          "My first proper marketing seat. I ran ongoing client care and built campaigns and branding across websites, social, and supporting material — hand-coding landing pages in HTML5 and CSS3 and adding interactivity with jQuery. I coordinated web and social projects across departments to keep timelines honest, and helped manage a $1.2M annual marketing budget.",
        receipts: [["Owned", "client campaigns · branding · web"], ["Budget", "helped manage $1.2M / yr"], ["Built with", "HTML5 · CSS3 · jQuery"]],
        honest:
          "Managing a budget that size early taught me to respect other people's money before I'd fully learned to respect my own. Good order to learn it in.",
      },
    },
  ],

  // Other channels — lighter posts (no case-study threads). Add a `link` to
  // make a post open a URL in a new tab.
  channelPosts: {
    "skills": [
      { emoji: "📊", time: "9:00 AM", headline: "Analytics & measurement — my home turf.", sub: "GA4 · Google Tag Manager · BigQuery · SQL · Looker/Data Studio · Tableau · server-side tracking · attribution modelling.", reactions: [["📊", 22], ["🤓", 11]] },
      { emoji: "🎯", time: "10:15 AM", headline: "Paid media & performance.", sub: "Google Ads · LinkedIn Ads · Meta Business Manager · A/B testing · funnel & lifecycle optimization across channels and copy.", reactions: [["🎯", 18], ["🔥", 9]] },
      { emoji: "🔗", time: "11:40 AM", headline: "Marketing ops & GTM plumbing.", sub: "Salesforce (SFDC) · Zapier · KPI frameworks · MQL → opp → ARR tracking · turning 'it felt good' into a number.", reactions: [["🔗", 15], ["💯", 8]] },
      { emoji: "🛠️", time: "1:05 PM", headline: "Web & front-end.", sub: "WordPress · HTML5 · CSS3 · jQuery/JavaScript · PHP · UI/UX · SEO · mobile responsiveness. Conversion-first, always.", reactions: [["🛠️", 17], ["✨", 10]] },
      { emoji: "🎨", time: "2:30 PM", headline: "Creative & content.", sub: "Adobe Creative Suite · photo & video editing · DSLR photography · branding across web and social.", reactions: [["🎨", 13], ["📸", 7]] },
      { emoji: "🧭", time: "3:50 PM", headline: "Leadership & the soft stuff that isn't soft.", sub: "Team management · vendor management · stakeholder management · budgeting · teaching and enablement.", reactions: [["🧭", 16], ["🙌", 9]] },
    ],
    "testimonials": [
      { emoji: "💬", time: "9:10 AM", headline: "\"A true digital analytics expert — incredibly curious, and deeply invested in helping his team grow. He made our team stronger.\"", sub: "— Director, Data Strategy · reported to Leon at Publicis", reactions: [["❤️", 19], ["📊", 8]] },
      { emoji: "💬", time: "10:05 AM", headline: "\"His greatest strength is gathering, understanding, and presenting data — turning complex datasets into recommendations anyone in the room can act on.\"", sub: "— CRO Specialist · reported to Leon directly", reactions: [["📈", 15], ["🙌", 9]] },
      { emoji: "💬", time: "11:25 AM", headline: "\"Meticulous. Insanely collaborative. Follows through. Always full of ideas on how to own things together and make the team more effective.\"", sub: "— VP Marketing (Integrated GTM / Growth) · same team at EZRA", reactions: [["🔥", 17], ["🤝", 10]] },
      { emoji: "💬", time: "1:00 PM", headline: "\"The type of boss who always takes the time to help his team learn. I count myself lucky to have learned from him early in my career.\"", sub: "— Senior Specialist, Operations · reported to Leon at Publicis", reactions: [["🙏", 14], ["❤️", 8]] },
      { emoji: "💬", time: "2:15 PM", headline: "\"A great team player and subject-matter expert — always helpful running ad campaigns and producing the reports that improved performance.\"", sub: "— Therapist / Clinical Member · worked with Leon on the same team", reactions: [["🙌", 12], ["✨", 6]] },
      { emoji: "💬", time: "3:40 PM", headline: "\"The consummate growth hacker — a rare ability to turn data and insight into campaigns that attract, engage, and grow a user base fast.\"", sub: "— Co-founder & CEO / Award-winning Realtor · worked alongside Leon", reactions: [["🚀", 16], ["📈", 9]] },
    ],
  },

  liveArrivals: [
    { emoji: "📄", time: "just now", headline: "Fresh: the 2026 résumé is up.", sub: "Full PDF's linked in the pinned post.", reactions: [["👀", 4]] },
    { emoji: "🤝", time: "just now", headline: "Someone just opened the contact form.", sub: "Could be you next. No pressure. Slight pressure.", reactions: [["😏", 6]] },
  ],

  dms: {
    // shown as the first bubble if you open DMs before Leon has said anything
    hello: "hey 👋 leon here (a scripted-but-charming version of him). ask me anything — hire, analytics, resume, whatever's on your mind.",
    // ONE of these fires, at random, at most once per fresh session
    unprompted: [
      "hey 👋 leon here. saw you lurking. the auto-brands win still lives in my head rent-free — seven nameplates, one dangerously over-caffeinated analyst.",
      "psst 👀 real talk: the 'art into science' thing isn't a bit. i will absolutely pipe your marketing into BigQuery and interrogate it until it confesses.",
      "you've got the scroll pattern of a data person 📊 i can tell these things. what brings you in?",
      "not to be forward but — are we hiring each other? the contact form is right there and it's genuinely painless 😄",
      "oh good, a visitor. i was just staring at a funnel wondering where everyone went. anyway, hi 👋",
    ],
    // ONE of these fires instead, at random, when you come back after a while
    welcomeBack: [
      "oh hey, you're back 👀 i kept your seat warm.",
      "look who returned. we were literally just talking about you. (we weren't. but welcome back.) 📊",
      "back for round two? my dashboards missed you.",
      "you again 😄 love that. we can pick right up where we left off.",
    ],
    // reactive (earned) — these still fire when YOU do something
    reactionCallout: "lmaooo who's beating up my reaction buttons 😄 i can literally see the numbers going up. certified menace. certified taste.",
    channelWave: "oh you can TYPE in here 👀 love that for us. you can DM me directly too btw — i'm right there in the sidebar, waving.",
  },

  dmTiming: {
    introDelayMs: 24000,     // the single unprompted DM fires after this long...
    introScrollPct: 0.45,    // ...or once you scroll this far, whichever's first
    hoverMs: 6000,           // hovering a win this long can also trigger it
    partingIdleMs: 4500,     // ...or on exit / reaching the bottom
    returnGapMin: 20,        // gone longer than this = "welcome back" on return
    welcomeBackDelayMs: 3500,// how soon after returning Leon says hi again
  },

  trayEmoji: ["🔥", "📊", "🙌", "🚀", "👀", "❤️"],

  // Scripted fallback replies (used if AI is off or unreachable). Quirky on purpose.
  replies: {
    greeting: "hey hey 👋 you caught me mid-dashboard, staring at a number that refuses to explain itself. what's up?",
    hire: "oh we are SO talking now 📊 fastest route: the 'get in touch' button up top, or leon@leontang.ca. tell me what needs moving and i'll tell you which dashboard we build first.",
    analytics: "a data person! my people 🤓 i basically live in GA4 and BigQuery and occasionally emerge for coffee. what's the tracking crime we're solving?",
    resume: "ah, doing your homework 📄 respect. here's the whole saga 👉",
    design: "yep i build sites too — wordpress, hand-coded, whatever the job needs. i optimize for 'loads fast + makes money' over 'wins a design award.' what's it for?",
    fallback: [
      "ok that one stumped my little keyword brain 😅 when my AI's awake i'm way smoother — but the real leon reads leon@leontang.ca and replies like a human.",
      "you're really messaging a marketer's portfolio at [checks watch] this hour. i respect the chaos. try 'hire', 'analytics', or 'resume' 👀",
      "i'd say something genius here but 40% of my brain is event listeners and the other 60% is thinking about attribution models. what are you building?",
      "plot twist: i'm partly held together with duct tape and regex. still here for you though — what do you need? 🔧",
    ],
  },

  // ---- PROFILE OVERLAY (the easter egg) ----
  profile: {
    localTZ: "America/Toronto",
    about: "Analytics junkie who genuinely gets excited about clean event tracking. I turn 'we think it worked' into 'here's the number and here's what to do next.' Marketer by title, data gremlin by nature.",
    facts: [
      "☕ Runs on coffee and statistically significant results",
      "🧮 Favorite JOIN: LEFT, and I won't be taking questions",
      "🐺 Currently convincing engineers that marketing isn't evil",
      "🎓 Teaches this stuff so I'm contractually obligated to actually understand it",
      "📉 Has emotionally recovered from exactly zero killed campaigns",
    ],
    stats: [
      ["Dashboards built", "too many"],
      ["Measurement IDs typo'd", "∞"],
      ["Coffees today", "yes"],
      ["Attribution debates won", "most"],
    ],
    // the over-the-top button inside the profile
    dangerLabel: "⚠️ Do NOT press this",
    dangerToast: "you were told not to press it. and yet. 🎉 i like you.",
  },

  // ---- WORKSPACE MENU (replaces the boring dropdown) ----
  wsMenu: [
    { icon: "🎉", label: "Throw confetti", action: "confetti" },
    { icon: "👤", label: "About Leon", action: "profile" },
    { icon: "🔮", label: "Vibe check", action: "vibe" },
    { icon: "🔔", label: "Toggle sounds", action: "mute" },
  ],
  vibes: [
    "vibe: immaculate. coffee: critical. 📊",
    "current mood: one query away from enlightenment.",
    "status: pretending the dashboard loads instantly.",
    "energy: 'let me just check one thing' (it is never one thing).",
    "today's forecast: 100% chance of attribution debates. 🌧️",
  ],
};

/* =========================================================================
   ██  MACHINERY  ██
   ========================================================================= */

(() => {
  "use strict";

  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const $ = (s, r = document) => r.querySelector(s);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const stripTags = (s) => String(s).replace(/<[^>]+>/g, "");
  const nowTime = () =>
    new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

  const store = {
    get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
  };

  /* ----------------------------- audio ----------------------------------- */
  const Sound = (() => {
    let ctx = null;
    let muted = store.get("lt_muted", false);
    const unlock = () => {
      if (!ctx) { try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch {} }
      if (ctx && ctx.state === "suspended") ctx.resume();
    };
    const tone = (freq, start, dur, peak, type = "sine") => {
      if (!ctx || muted) return;
      const o = ctx.createOscillator(), g = ctx.createGain();
      o.type = type;
      o.frequency.setValueAtTime(freq, ctx.currentTime + start);
      g.gain.setValueAtTime(0.0001, ctx.currentTime + start);
      g.gain.exponentialRampToValueAtTime(peak, ctx.currentTime + start + 0.012);
      g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + dur);
      o.connect(g).connect(ctx.destination);
      o.start(ctx.currentTime + start);
      o.stop(ctx.currentTime + start + dur + 0.02);
    };
    return {
      unlock,
      get muted() { return muted; },
      toggleMute() { muted = !muted; store.set("lt_muted", muted); return muted; },
      ding() { unlock(); tone(660, 0, 0.18, 0.13); tone(880, 0.06, 0.22, 0.11); },
      pop() { unlock(); tone(520 + Math.random() * 120, 0, 0.09, 0.06, "triangle"); },
      whump() { unlock(); tone(180, 0, 0.5, 0.2); tone(90, 0, 0.6, 0.16); },
      dm() { unlock(); tone(494, 0, 0.16, 0.12); tone(740, 0.09, 0.26, 0.11); },
      send() { unlock(); tone(880, 0, 0.08, 0.06, "triangle"); },
      success() { unlock(); tone(523, 0, 0.15, 0.12); tone(659, 0.1, 0.15, 0.12); tone(784, 0.2, 0.3, 0.13); },
    };
  })();

  const avatarEl = (initials, cls) => {
    const usePhoto = !initials && CONFIG.person.photo;
    const n = el("div", "avatar" + (cls ? " " + cls : "") + (usePhoto ? " avatar-photo" : ""));
    if (usePhoto) n.style.backgroundImage = `url('${CONFIG.person.photo}')`;
    else n.innerHTML = `<span>${initials || CONFIG.person.avatar}</span>`;
    return n;
  };
  const photoAvHTML = (cls) =>
    CONFIG.person.photo
      ? `<div class="${cls} avatar-photo" style="background-image:url('${CONFIG.person.photo}')"></div>`
      : `<div class="${cls}">${esc(CONFIG.person.avatar)}</div>`;

  /* ---------------------------- shell ------------------------------------ */
  const DM_VIEW = "__dm__";
  let activeChannel = "experience";
  const inDM = () => activeChannel === DM_VIEW;

  function setComposerMode(isDM) {
    $("#channel-input").placeholder = isDM ? "Message Leon" : "Message #" + activeChannel;
    $("#composer-hint").innerHTML = isDM
      ? "you're DMing Leon directly. he might even reply 💬"
      : "you're a guest &mdash; say hi, Leon actually reads these 👀";
  }

  function buildShell() {
    $("#ws-name").textContent = CONFIG.workspace;
    const list = $("#channel-list");
    CONFIG.channels.forEach((c) => {
      const row = el("button", "channel" + (c.active ? " is-active" : ""),
        `<span class="hash">#</span><span class="cname">${esc(c.name)}</span>`);
      row.dataset.channel = c.name;
      if (c.unread) {
        const b = el("span", "chan-unread", String(c.unread));
        b.dataset.for = c.name;
        row.appendChild(b);
      }
      row.addEventListener("click", () => switchChannel(c.name));
      list.appendChild(row);
    });
    $("#dm-row .cname").textContent = CONFIG.person.name;
    $("#me-name").textContent = CONFIG.person.name;
    $("#me-status").textContent = CONFIG.person.status;
    if (CONFIG.person.photo) {
      const meAv = $("#me-avatar");
      meAv.classList.add("avatar-photo");
      meAv.style.backgroundImage = `url('${CONFIG.person.photo}')`;
      const sp = meAv.querySelector("span");
      if (sp) sp.remove();
      const cmAv = $(".cm-av");
      if (cmAv) {
        cmAv.classList.add("avatar-photo");
        cmAv.style.backgroundImage = `url('${CONFIG.person.photo}')`;
        cmAv.textContent = "";
      }
    } else {
      $("#me-avatar span").textContent = CONFIG.person.avatar;
    }
  }

  function switchChannel(name) {
    if (name === activeChannel) { document.body.classList.remove("nav-open"); return; }
    activeChannel = name;
    document.querySelectorAll("#channel-list .channel").forEach((r) =>
      r.classList.toggle("is-active", r.dataset.channel === name));
    $("#dm-row").classList.remove("is-active");
    $("#chan-heading").classList.remove("no-hash");
    const meta = CONFIG.channels.find((c) => c.name === name) || {};
    $("#channel-title").textContent = name;
    $("#channel-topic").textContent = meta.topic || "";
    setComposerMode(false);
    const badge = document.querySelector(`.chan-unread[data-for="${name}"]`);
    if (badge) badge.remove();
    renderChannel(name);
    document.body.classList.remove("nav-open");
    $("#feed-scroll").scrollTop = 0;
  }

  function switchToDM() {
    activeChannel = DM_VIEW;
    document.querySelectorAll("#channel-list .channel").forEach((r) => r.classList.remove("is-active"));
    $("#dm-row").classList.add("is-active");
    $("#chan-heading").classList.add("no-hash");
    $("#channel-title").textContent = CONFIG.person.name;
    $("#channel-topic").textContent = "Direct message";
    setComposerMode(true);
    renderDMView();
    document.body.classList.remove("nav-open");
    setTimeout(() => $("#channel-input").focus(), 200);
  }

  /* ----------------------------- feed ------------------------------------ */
  const feed = () => $("#feed");
  let reactionState = store.get("lt_react", {});
  let globalSpectacle = 0;

  function reactionsMarkup(reactions) {
    return (reactions || [])
      .map(([e, n]) => `<button class="chip" data-emoji="${esc(e)}"><span class="chip-e">${e}</span><span class="chip-n">${n}</span></button>`)
      .join("");
  }

  function messageNode(win, idx, opts = {}) {
    const m = el("article", "msg");
    m.dataset.idx = idx;
    if (opts.live) m.classList.add("is-live");

    const body = el("div", "msg-body");
    body.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="msg-time">${esc(win.time || "")}</span>`));
    body.appendChild(el("div", "msg-line",
      `<span class="win-emoji">${win.emoji || "•"}</span><span class="win-head">${esc(win.headline)}</span>`));
    if (win.sub) body.appendChild(el("div", "msg-sub", esc(win.sub)));

    const reacts = el("div", "reacts");
    reacts.innerHTML = reactionsMarkup(win.reactions);
    const addBtn = el("button", "react-add", "＋");
    addBtn.setAttribute("aria-label", "Add reaction");
    reacts.appendChild(addBtn);
    body.appendChild(reacts);

    if (win.thread) {
      const open = el("button", "thread-open", `<span class="thr-dot"></span> pull the thread — see how it happened`);
      open.addEventListener("click", () => openThreadPanel(win));
      body.appendChild(open);
    } else if (win.link) {
      const go = el("a", "thread-open", `<span class="thr-dot"></span> open it →`);
      go.href = win.link; go.target = "_blank"; go.rel = "noopener";
      body.appendChild(go);
    }

    m.appendChild(avatarEl());
    m.appendChild(body);
    wireReactions(m, win, idx, reacts, addBtn);
    return m;
  }

  function guestMessageNode(text) {
    const m = el("article", "msg is-guest");
    const body = el("div", "msg-body");
    body.appendChild(el("div", "msg-head",
      `<span class="msg-name">You</span><span class="guest-tag">guest</span><span class="msg-time">${nowTime()}</span>`));
    body.appendChild(el("div", "reply-text", esc(text)));
    m.appendChild(avatarEl("YOU", "avatar-guest"));
    m.appendChild(body);
    return m;
  }

  function leonFeedReply(text, opts = {}) {
    const m = el("article", "msg");
    const body = el("div", "msg-body");
    body.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="msg-time">${nowTime()}</span>`));
    const t = el("div", "reply-text");
    if (opts.html) t.innerHTML = text; else t.textContent = text;
    body.appendChild(t);
    m.appendChild(avatarEl());
    m.appendChild(body);
    return m;
  }

  function cascade(nodes) {
    const f = feed();
    nodes.forEach((node, i) => {
      node.classList.add("pre-in");
      f.appendChild(node);
      const delay = prefersReduced ? 0 : 120 + i * 110;
      setTimeout(() => { node.classList.remove("pre-in"); node.classList.add("in"); }, delay);
    });
  }

  // ---- brand logos ----
  function brandTile(b, cls) {
    const node = el(cls === "grid" ? "div" : "a", "brand-tile" + (cls ? " brand-" + cls : ""));
    if (b.url && cls !== "grid") { node.href = b.url; node.target = "_blank"; node.rel = "noopener"; }
    node.title = b.name;
    const img = el("img", "brand-img");
    img.src = CONFIG.brandBase + b.file;
    img.alt = b.name;
    img.loading = "lazy";
    img.addEventListener("error", () => node.remove());
    node.appendChild(img);
    return node;
  }

  function buildBrandMarquee() {
    const wrap = el("div", "brand-strip");
    wrap.innerHTML = `<div class="brand-strip-head"><span class="brand-strip-title">Brands I've worked with</span><span class="brand-strip-sub">${CONFIG.brands.length} logos · hover to pause</span></div>`;
    const viewport = el("div", "marquee");
    const track = el("div", "marquee-track");
    // two copies for a seamless infinite loop
    [...CONFIG.brands, ...CONFIG.brands].forEach((b) => track.appendChild(brandTile(b)));
    viewport.appendChild(track);
    wrap.appendChild(viewport);
    return wrap;
  }

  function brandLogosByName(names) {
    return names
      .map((n) => CONFIG.brands.find((b) => b.name === n))
      .filter(Boolean);
  }

  function pinnedNode() {
    const pinned = el("article", "msg msg-pinned");
    pinned.appendChild(avatarEl());
    const pb = el("div", "msg-body");
    pb.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="pin-tag">📌 pinned</span>`));
    pb.appendChild(el("div", "pinned-pitch", esc(CONFIG.person.pitch)));
    const cta = el("div", "pinned-cta");
    const primary = el("button", "btn-primary", esc(CONFIG.person.ctaLabel));
    primary.addEventListener("click", openContact);
    const li = el("a", "btn-ghost", "LinkedIn");
    li.href = CONFIG.person.linkedin; li.target = "_blank"; li.rel = "noopener";
    const cv = el("a", "btn-ghost", "Resumé (PDF)");
    cv.href = CONFIG.person.resume; cv.target = "_blank"; cv.rel = "noopener";
    cta.append(primary, li, cv);
    pb.appendChild(cta);
    pinned.appendChild(pb);
    return pinned;
  }

  function renderChannel(name) {
    const f = feed();
    f.innerHTML = "";
    const nodes = [];
    if (name === "experience") {
      f.appendChild(pinnedNode());
      f.appendChild(buildBrandMarquee());
      f.appendChild(el("div", "day-divider", "<span>Today</span>"));
      CONFIG.experience.forEach((win, i) => nodes.push(messageNode(win, i)));
    } else {
      f.appendChild(el("div", "day-divider", "<span>Today</span>"));
      (CONFIG.channelPosts[name] || []).forEach((p, i) => nodes.push(messageNode(p, name + i)));
    }
    cascade(nodes);
  }

  /* --------------------------- reactions --------------------------------- */
  function wireReactions(msgNode, win, idx, reactsEl, addBtn) {
    let tray = null;
    const closeTray = () => { if (tray) { tray.remove(); tray = null; } };
    addBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (tray) return closeTray();
      tray = el("div", "tray");
      CONFIG.trayEmoji.forEach((em) => {
        const b = el("button", "tray-btn", em);
        b.addEventListener("click", (ev) => { ev.stopPropagation(); bumpReaction(reactsEl, em, idx, 1); closeTray(); });
        tray.appendChild(b);
      });
      reactsEl.appendChild(tray);
    });
    document.addEventListener("click", closeTray);
    reactsEl.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      bumpReaction(reactsEl, chip.dataset.emoji, idx, 1, chip);
    });

    // ---- hover easter eggs (desktop only; needs a real hover) ----
    if (!isTouch && !prefersReduced) {
      reactsEl.addEventListener("mouseover", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip || chip._eggOn) return;
        startHoverEgg(chip);
      });
      reactsEl.addEventListener("mouseout", (e) => {
        const chip = e.target.closest(".chip");
        if (!chip) return;
        if (e.relatedTarget && chip.contains(e.relatedTarget)) return;
        stopHoverEgg(chip);
      });
    }
  }

  const pick = (arr) => arr[(Math.random() * arr.length) | 0];
  const WILD = ["✨", "💫", "🌟", "⭐", "🎊", "🫧"];

  function emitHoverPuff(chip) {
    const { x, y } = chipCenter(chip);
    const wild = Math.random() < 0.16; // rare surprise
    if (wild) {
      // a proper little pop: sparkle burst + the chip backflips + a burst of its emoji
      const ch = pick(WILD);
      FX.emojiBurst(x, y, ch, 8, 1.2);
      FX.emojiBurst(x, y, chip.dataset.emoji, 5, 1);
      for (let i = 0; i < 3; i++) FX.floaty(x, y - 6, ch, true);
      chip.classList.remove("wild-pop"); void chip.offsetWidth; chip.classList.add("wild-pop");
      Sound.pop();
    } else {
      FX.floaty(x, y - 8, chip.dataset.emoji, false);
    }
  }
  function startHoverEgg(chip) {
    chip._eggOn = true;
    // a beat of intentional hover before it starts bubbling (ignores fly-bys)
    chip._eggT = setTimeout(() => {
      emitHoverPuff(chip);
      chip._eggI = setInterval(() => emitHoverPuff(chip), 900);
    }, 520);
  }
  function stopHoverEgg(chip) {
    chip._eggOn = false;
    clearTimeout(chip._eggT);
    clearInterval(chip._eggI);
  }

  const clickClocks = {};
  function bumpReaction(reactsEl, emoji, idx, delta, chipEl) {
    let chip = chipEl || reactsEl.querySelector(`.chip[data-emoji="${emoji}"]`);
    if (!chip) {
      chip = el("button", "chip", `<span class="chip-e">${emoji}</span><span class="chip-n">0</span>`);
      chip.dataset.emoji = emoji;
      reactsEl.insertBefore(chip, reactsEl.querySelector(".react-add"));
    }
    const nEl = chip.querySelector(".chip-n");
    nEl.textContent = String((parseInt(nEl.textContent, 10) || 0) + delta);

    chip.classList.remove("bump"); void chip.offsetWidth; chip.classList.add("bump", "mine");
    Sound.pop();

    const now = performance.now();
    const c = (clickClocks[idx] = clickClocks[idx] || { last: 0, streak: 0 });
    const gap = now - c.last; c.last = now;
    if (gap < 550) c.streak++; else c.streak = Math.max(0, c.streak - 1);

    const spent = reactionState[idx] || 0;
    const novelty = clamp(1 - spent * 0.28, 0.15, 1);
    spawnEmojiBurst(chip, emoji, Math.round((3 + c.streak) * novelty));

    if (c.streak >= 3) showCombo(chip, c.streak + 1);

    if (c.streak >= 5) {
      escalateSpectacle(chip, emoji, c.streak, novelty);
      reactionState[idx] = spent + 1; store.set("lt_react", reactionState); c.streak = 0;
      if (spent >= 1) {
        const nudges = ["you already loved this one 😅 try another post", "ok ok it's a good one — go pull a thread instead 📊", "diminishing returns, friend. explore a bit!"];
        toast(nudges[clamp(spent - 1, 0, nudges.length - 1)], "sys");
      }
    }
  }

  /* ----------------------------- profile overlay ------------------------- */
  function openProfile() {
    const P = CONFIG.profile;
    const body = $("#profile-body");
    let localTime = "";
    try { localTime = new Date().toLocaleTimeString([], { timeZone: P.localTZ, hour: "numeric", minute: "2-digit" }); }
    catch { localTime = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" }); }

    body.innerHTML = `
      <div class="pf-top">
        <div class="pf-avatar ${CONFIG.person.photo ? "avatar-photo" : ""}" ${CONFIG.person.photo ? `style="background-image:url('${CONFIG.person.photo}')"` : ""}>${CONFIG.person.photo ? "" : esc(CONFIG.person.avatar)}</div>
        <div class="pf-id">
          <div class="pf-name">${esc(CONFIG.person.name)} <span class="pf-live"><i></i>online</span></div>
          <div class="pf-role">${esc(CONFIG.person.role)}</div>
          <div class="pf-meta">🕒 ${esc(localTime)} local · Aurora, ON</div>
        </div>
      </div>
      <div class="pf-status">💬 ${esc(CONFIG.person.status)}</div>
      <div class="pf-stats">
        ${P.stats.map(([k, v]) => `<div class="pf-stat"><div class="pf-stat-v">${esc(v)}</div><div class="pf-stat-k">${esc(k)}</div></div>`).join("")}
      </div>
      <div class="pf-section-label">About</div>
      <div class="pf-about">${esc(P.about)}</div>
      <div class="pf-section-label">Certified facts</div>
      <ul class="pf-facts">${P.facts.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>
      <div class="pf-actions">
        <button class="btn-primary" id="pf-contact">Get in touch</button>
        <a class="btn-ghost" href="${CONFIG.person.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
        <a class="btn-ghost" href="${CONFIG.person.resume}" target="_blank" rel="noopener">Résumé</a>
      </div>
      <button class="pf-danger" id="pf-danger">${esc(P.dangerLabel)}</button>
    `;
    $("#pf-contact").addEventListener("click", () => { closeProfile(); openContact(); });
    $("#pf-danger").addEventListener("click", (e) => {
      const r = e.currentTarget.getBoundingClientRect();
      partyMode(r.left + r.width / 2, r.top);
      toast(CONFIG.profile.dangerToast, "sys");
    });

    const m = $("#profile-modal");
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    const card = $(".profile-card").getBoundingClientRect();
    FX.confetti(card.left + card.width / 2, card.top + 40, prefersReduced ? 0 : 40);
  }
  function closeProfile() {
    const m = $("#profile-modal");
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }

  /* ----------------------------- workspace menu -------------------------- */
  const VIBES = CONFIG.vibes || [];
  let vibeIdx = 0;
  function buildWsMenu() {
    const menu = $("#ws-menu");
    menu.innerHTML = "";
    (CONFIG.wsMenu || []).forEach((item) => {
      const b = el("button", "ws-menu-item", `<span class="wm-ic">${item.icon}</span><span>${esc(item.label)}</span>`);
      b.addEventListener("click", () => { runWsAction(item.action); toggleWsMenu(false); });
      menu.appendChild(b);
    });
  }
  function toggleWsMenu(force) {
    const menu = $("#ws-menu");
    const open = force != null ? force : menu.hidden;
    menu.hidden = !open;
    $("#ws-head").classList.toggle("open", open);
  }
  function runWsAction(action) {
    if (action === "confetti") { const x = innerWidth / 2, y = innerHeight / 3; FX.confetti(x, y, prefersReduced ? 0 : 130); FX.emojiBurst(x, y, "🎉", 16, 1.4); Sound.whump(); }
    else if (action === "profile") openProfile();
    else if (action === "vibe") { toast(VIBES[vibeIdx % VIBES.length] || "vibe: unmeasured 📊", "sys"); vibeIdx++; }
    else if (action === "mute") { const mm = Sound.toggleMute(); const b = $("#mute"); b.textContent = mm ? "🔇" : "🔔"; if (!mm) Sound.ding(); }
  }

  /* --------------------- OVER-THE-TOP party mode ------------------------- */
  let comboEl = null, comboHide = null;
  function showCombo(chip, streak) {
    if (!comboEl) { comboEl = el("div", "combo"); document.body.appendChild(comboEl); }
    comboEl.textContent = "COMBO ×" + streak + (streak >= 10 ? " 🔥" : "");
    comboEl.style.setProperty("--hue", String(clamp(50 - streak * 8, -150, 50)));
    comboEl.style.fontSize = clamp(20 + streak * 2.4, 22, 66) + "px";
    const r = chip.getBoundingClientRect();
    comboEl.style.left = clamp(r.left + r.width / 2, 90, innerWidth - 90) + "px";
    comboEl.style.top = (r.top - 20) + "px";
    comboEl.classList.remove("pop"); void comboEl.offsetWidth; comboEl.classList.add("pop", "show");
    clearTimeout(comboHide);
    comboHide = setTimeout(() => comboEl && comboEl.classList.remove("show"), 900);
  }

  let partyCooldown = 0;
  function partyMode(x, y) {
    const now = performance.now();
    if (now - partyCooldown < 450) return;
    partyCooldown = now;
    if (prefersReduced) { FX.confetti(x, y, 30); return; }
    const ring = el("div", "shockwave");
    ring.style.left = x + "px"; ring.style.top = y + "px";
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 700);
    const glow = $("#edge-glow");
    glow.classList.remove("on"); void glow.offsetWidth; glow.classList.add("on");
    setTimeout(() => glow.classList.remove("on"), 1200);
    FX.confetti(x, y, 160);
    FX.emojiRain(["🎉", "🔥", "📊", "🚀", "✨", "🙌"]);
    screenShake();
    Sound.whump();
  }

  /* --------------------------- particles --------------------------------- */
  const isTouch = matchMedia("(pointer: coarse)").matches;
  const FX = (() => {
    const canvas = $("#fx"), ctx = canvas.getContext("2d");
    let particles = [], running = false;
    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = innerWidth * dpr; canvas.height = innerHeight * dpr;
      canvas.style.width = innerWidth + "px"; canvas.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize(); addEventListener("resize", resize);
    const MAX = isTouch ? 260 : 700;
    function add(p) { if (particles.length < MAX) particles.push(p); if (!running) loop(); }
    function loop() {
      running = true;
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      particles = particles.filter((p) => {
        p.vy += 0.42 * p.grav; p.vx *= 0.995;
        p.x += p.vx; p.y += p.vy; p.rot += p.vr; p.life -= 1;
        if (p.y > innerHeight + 80 || p.x < -120 || p.x > innerWidth + 120 || p.life <= 0) return false;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
        ctx.globalAlpha = clamp(p.life / p.life0, 0, 1);
        if (p.kind === "emoji") { ctx.font = `${p.size}px serif`; ctx.textAlign = "center"; ctx.textBaseline = "middle"; ctx.fillText(p.char, 0, 0); }
        else { ctx.fillStyle = p.color; ctx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.66); }
        ctx.restore(); return true;
      });
      if (particles.length) requestAnimationFrame(loop);
      else { ctx.clearRect(0, 0, innerWidth, innerHeight); running = false; }
    }
    return {
      emojiBurst(x, y, char, count, power = 1) {
        if (prefersReduced) count = Math.min(count, 3);
        for (let i = 0; i < count; i++) {
          const ang = -Math.PI / 2 + (Math.random() - 0.5) * 1.7, spd = (6 + Math.random() * 10) * power;
          add({ kind: "emoji", char, x, y, vx: Math.cos(ang) * spd + (Math.random() - 0.5) * 4, vy: Math.sin(ang) * spd, grav: 1, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.4, size: 22 + Math.random() * 22, life: 220, life0: 220 });
        }
      },
      confetti(x, y, count = 120) {
        if (prefersReduced) return;
        const colors = ["#3AA0FF", "#F5B544", "#2FBE7E", "#F0498B", "#B36BF7", "#FF6B6B"];
        for (let i = 0; i < count; i++) {
          const ang = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI, spd = 8 + Math.random() * 16;
          add({ kind: "confetti", color: colors[(Math.random() * colors.length) | 0], x, y, vx: Math.cos(ang) * spd, vy: Math.sin(ang) * spd - 4, grav: 0.9, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.6, size: 8 + Math.random() * 8, life: 260, life0: 260 });
        }
      },
      wave(char) {
        if (prefersReduced) return;
        const n = isTouch ? 28 : 46;
        for (let i = 0; i < n; i++)
          add({ kind: "emoji", char, x: (innerWidth / n) * i + Math.random() * 20, y: innerHeight + 40 + Math.random() * 60, vx: (Math.random() - 0.5) * 3, vy: -(14 + Math.random() * 8), grav: 1, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, size: 26 + Math.random() * 20, life: 260, life0: 260 });
      },
      // gentle rising bubble — used for the hover easter egg
      floaty(x, y, char, big) {
        if (prefersReduced) return;
        add({ kind: "emoji", char, x: x + (Math.random() - 0.5) * 14, y, vx: (Math.random() - 0.5) * 0.9, vy: -(1.1 + Math.random() * 0.8), grav: 0.02, rot: (Math.random() - 0.5) * 0.4, vr: (Math.random() - 0.5) * 0.05, size: (big ? 22 : 15) + Math.random() * 7, life: 95, life0: 95 });
      },
      // emoji raining down from above — the over-the-top peak
      emojiRain(chars) {
        if (prefersReduced) return;
        const n = isTouch ? 26 : 54;
        for (let i = 0; i < n; i++)
          add({ kind: "emoji", char: chars[(Math.random() * chars.length) | 0], x: Math.random() * innerWidth, y: -30 - Math.random() * innerHeight * 0.5, vx: (Math.random() - 0.5) * 2, vy: 3 + Math.random() * 4, grav: 0.4, rot: Math.random() * 6, vr: (Math.random() - 0.5) * 0.3, size: 20 + Math.random() * 20, life: 320, life0: 320 });
      },
    };
  })();

  function chipCenter(chipEl) { const r = chipEl.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + r.height / 2 }; }
  function spawnEmojiBurst(chipEl, emoji, count) { const { x, y } = chipCenter(chipEl); FX.emojiBurst(x, y, emoji, count, 1); }
  function escalateSpectacle(chipEl, emoji, streak, novelty) {
    const { x, y } = chipCenter(chipEl);
    const power = clamp(1 + streak * 0.15, 1, 2.4) * novelty;
    FX.emojiBurst(x, y, emoji, Math.round(34 * novelty) + 10, power);
    if (novelty > 0.5) {
      FX.confetti(x, y, Math.round(130 * novelty));
      FX.wave(emoji);
      // the full over-the-top peak: rain + shockwave + edge glow + shake
      partyMode(x, y);
    } else {
      Sound.pop();
    }
    globalSpectacle++;
    if (globalSpectacle === 1 && !dmFired.reaction) setTimeout(() => fireDM("reactionCallout", "reaction"), 900);
  }
  function screenShake() {
    if (prefersReduced || isTouch) return; // shake off on touch (prevents edge jitter)
    const w = $("#workspace");
    w.classList.remove("shake"); void w.offsetWidth; w.classList.add("shake");
    setTimeout(() => w.classList.remove("shake"), 620);
  }

  /* --------------------------- thread panel ------------------------------ */
  function openThreadPanel(win) {
    const body = $("#thread-body");
    body.innerHTML = "";
    $("#thread-title").textContent = "Thread";
    $("#thread-sub").textContent = "how it happened";

    const top = el("article", "msg");
    top.appendChild(avatarEl());
    const tb = el("div", "msg-body");
    tb.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="msg-time">${esc(win.time)}</span>`));
    tb.appendChild(el("div", "msg-line",
      `<span class="win-emoji">${win.emoji}</span><span class="win-head">${esc(win.headline)}</span>`));
    top.appendChild(tb);
    body.appendChild(top);

    body.appendChild(el("div", "thread-count", `${win.thread.receipts.length + 2} replies`));
    body.appendChild(threadReply("the play", win.thread.story));

    const rec = el("article", "msg thread-reply");
    rec.appendChild(avatarEl());
    const rb = el("div", "msg-body");
    rb.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="reply-tag">the receipts</span>`));
    const table = el("div", "receipts");
    win.thread.receipts.forEach(([k, v]) => {
      const row = el("div", "receipt-row");
      row.appendChild(el("span", "receipt-k", esc(k)));
      row.appendChild(el("span", "receipt-v", esc(v)));
      table.appendChild(row);
    });
    rb.appendChild(table);
    rec.appendChild(rb);
    body.appendChild(rec);
    body.appendChild(threadReply("the honest bit", win.thread.honest, true));

    if (win.logos && win.logos.length) {
      const logos = brandLogosByName(win.logos);
      if (logos.length) {
        const r = el("article", "msg thread-reply");
        r.appendChild(avatarEl());
        const b = el("div", "msg-body");
        b.appendChild(el("div", "msg-head",
          `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="reply-tag">the badges</span>`));
        const grid = el("div", "brand-grid");
        logos.forEach((bd) => grid.appendChild(brandTile(bd, "grid")));
        b.appendChild(grid);
        r.appendChild(b);
        body.appendChild(r);
      }
    }

    openPanel();
  }

  function threadReply(tag, text, honest) {
    const r = el("article", "msg thread-reply" + (honest ? " honest" : ""));
    r.appendChild(avatarEl());
    const b = el("div", "msg-body");
    b.appendChild(el("div", "msg-head",
      `<span class="msg-name">${esc(CONFIG.person.name)}</span><span class="reply-tag">${esc(tag)}</span>`));
    b.appendChild(el("div", "reply-text", esc(text)));
    r.appendChild(b);
    return r;
  }

  function openPanel() {
    $("#thread").classList.add("open");
    document.body.classList.add("thread-open");
  }
  function closeThread() {
    $("#thread").classList.remove("open");
    document.body.classList.remove("thread-open");
  }

  /* --------------------------- toasts / DMs ------------------------------ */
  function toast(text, kind = "win", opts = {}) {
    const t = el("div", "toast toast-" + kind);
    if (kind === "dm") {
      t.innerHTML = `${photoAvHTML("toast-av")}
        <div class="toast-main"><div class="toast-head"><b>${esc(CONFIG.person.name)}</b><span class="toast-tag">Direct message</span></div>
        <div class="toast-text">${esc(text)}</div><div class="toast-cta-row"><span class="toast-reply-hint">click to reply →</span></div></div>`;
      Sound.dm();
    } else if (kind === "win") {
      t.innerHTML = `<div class="toast-icon">${opts.emoji || "🎉"}</div>
        <div class="toast-main"><div class="toast-head"><b>#experience</b><span class="toast-tag">new</span></div>
        <div class="toast-text">${esc(text)}</div></div>`;
      Sound.ding();
    } else {
      t.innerHTML = `<div class="toast-main"><div class="toast-text">${esc(text)}</div></div>`;
    }
    const xBtn = el("button", "toast-x", "✕");
    xBtn.setAttribute("aria-label", "Dismiss");
    t.appendChild(xBtn);

    const layer = $("#toasts");
    layer.appendChild(t);
    while (layer.children.length > 3) layer.firstElementChild.remove();
    requestAnimationFrame(() => t.classList.add("in"));

    const life = opts.life || (kind === "dm" ? 7000 : 4200);
    let killed = false;
    const timer = setTimeout(() => kill(kind === "dm"), life);
    function kill(tuck, dir) {
      if (killed) return; killed = true;
      clearTimeout(timer);
      t.classList.remove("in");
      if (dir < 0) {
        t.style.transition = "transform .3s ease, opacity .3s ease";
        t.style.transform = "translateX(-130%)";
        t.style.opacity = "0";
      } else {
        t.style.transform = ""; t.style.opacity = ""; // let .out class drive it
        t.classList.add("out");
      }
      setTimeout(() => t.remove(), 380);
      if (tuck && kind === "dm") tuckToDM();
    }

    // explicit dismiss
    xBtn.addEventListener("click", (e) => { e.stopPropagation(); kill(kind === "dm"); });

    // swipe-to-dismiss (pointer events cover touch + mouse) with tap handling
    let sx = 0, sy = 0, dx = 0, dragging = false, axis = null, downT = 0;
    t.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".toast-x")) return;
      dragging = true; axis = null; sx = e.clientX; sy = e.clientY; dx = 0; downT = Date.now();
      t.style.transition = "none";
      try { t.setPointerCapture(e.pointerId); } catch {}
    });
    t.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      dx = e.clientX - sx; const dy = e.clientY - sy;
      if (axis === null && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) axis = Math.abs(dx) >= Math.abs(dy) ? "h" : "v";
      if (axis === "h") {
        t.style.transform = `translateX(${dx}px)`;
        t.style.opacity = String(clamp(1 - Math.abs(dx) / 220, 0, 1));
      }
    });
    const endDrag = () => {
      if (!dragging) return; dragging = false;
      const moved = Math.abs(dx);
      if (axis === "h" && moved > 70) { kill(kind === "dm", dx < 0 ? -1 : 1); return; }
      if (moved < 8) { // treated as a tap
        if (kind === "dm") switchToDM();
        kill(false);
        return;
      }
      // snap back
      t.style.transition = "transform .2s ease, opacity .2s ease";
      t.style.transform = ""; t.style.opacity = "";
    };
    t.addEventListener("pointerup", endDrag);
    t.addEventListener("pointercancel", () => {
      dragging = false;
      t.style.transition = "transform .2s ease, opacity .2s ease";
      t.style.transform = ""; t.style.opacity = "";
    });

    return t;
  }

  /* --------------------------- DM system --------------------------------- */
  const DM_KEY = "lt_dm", SEEN_KEY = "lt_seen";
  const dmFired = { reaction: false, channel: false };
  const dmLog = [];
  let unpromptedFired = false;
  let allowUnprompted = true;
  let unpromptedPool = CONFIG.dms.unprompted;

  function persistDM() {
    store.set(DM_KEY, dmLog.slice(-50));
    store.set(SEEN_KEY, Date.now());
  }

  // Decide, on load, whether this is a first visit, a return, or a refresh —
  // and restore any prior conversation. This is the "remembers you" easter egg.
  function initDMMemory() {
    const stored = store.get(DM_KEY, null);
    const lastSeen = store.get(SEEN_KEY, 0);
    if (Array.isArray(stored) && stored.length) dmLog.push(...stored);

    if (!lastSeen) {
      allowUnprompted = true; unpromptedPool = CONFIG.dms.unprompted; // brand new
    } else {
      const gapMin = (Date.now() - lastSeen) / 60000;
      if (gapMin > (CONFIG.dmTiming.returnGapMin || 20)) {
        // returning after a while → a random "welcome back" is the one unprompted
        allowUnprompted = true; unpromptedPool = CONFIG.dms.welcomeBack;
        setTimeout(fireUnprompted, CONFIG.dmTiming.welcomeBackDelayMs || 3500);
      } else {
        allowUnprompted = false; // same session / quick refresh — no nagging
      }
    }
    // stamp presence now, and again when they leave, so "gap" measures absence
    store.set(SEEN_KEY, Date.now());
    const stamp = () => store.set(SEEN_KEY, Date.now());
    addEventListener("visibilitychange", () => { if (document.hidden) stamp(); });
    addEventListener("pagehide", stamp);
  }

  // the single, random, unprompted DM (at most once per session)
  function fireUnprompted() {
    if (unpromptedFired || !allowUnprompted) return;
    unpromptedFired = true;
    const pool = unpromptedPool && unpromptedPool.length ? unpromptedPool : CONFIG.dms.unprompted;
    const text = pool[(Math.random() * pool.length) | 0];
    dmLog.push({ who: "leon", text });
    persistDM();
    if (inDM()) renderDMLog(true);
    else toast(text, "dm");
  }

  // reactive (earned) DMs — these bypass the unprompted limit
  function fireDM(key, flag) {
    if (dmFired[flag]) return;
    dmFired[flag] = true;
    const text = CONFIG.dms[key];
    dmLog.push({ who: "leon", text });
    persistDM();
    if (inDM()) renderDMLog(true);
    else toast(text, "dm");
  }

  function tuckToDM() {
    const badge = $("#dm-unread");
    badge.textContent = String(dmLog.filter((m) => m.who === "leon" && !m.seen).length);
    badge.classList.add("show");
    $("#dm-row").classList.add("glow");
  }

  function renderDMView() {
    const f = feed();
    f.innerHTML = "";
    const intro = el("div", "dm-intro");
    intro.innerHTML = `${photoAvHTML("dm-bigav")}
      <div class="dm-name">${esc(CONFIG.person.name)}</div>
      <div class="dm-role">${esc(CONFIG.person.role)} · ${dmLog.some((m) => m.who === "you") ? "picking up where we left off" : "the very beginning of your legendary DM history"}</div>`;
    const cta = el("button", "btn-primary dm-intro-cta", "Get in touch");
    cta.addEventListener("click", openContact);
    intro.appendChild(cta);
    f.appendChild(intro);

    if (!dmLog.length) { dmLog.push({ who: "leon", text: CONFIG.dms.hello }); persistDM(); }
    const logWrap = el("div", "dm-log"); logWrap.id = "dm-log";
    f.appendChild(logWrap);
    renderDMLog(false);

    dmLog.forEach((m) => (m.seen = true));
    persistDM();
    $("#dm-unread").classList.remove("show");
    $("#dm-row").classList.remove("glow");
    scrollFeedBottom();
  }

  function renderDMLog(animateLast) {
    const wrap = $("#dm-log");
    if (!wrap) return;
    wrap.innerHTML = "";
    dmLog.forEach((m, i) => {
      const row = el("article", "dm-line " + (m.who === "you" ? "from-you" : "from-leon"));
      if (m.who === "leon") row.appendChild(avatarEl());
      const b = el("div", "dm-bubble");
      if (m.html) b.innerHTML = m.text; else b.textContent = m.text;
      row.appendChild(b);
      if (animateLast && i === dmLog.length - 1) row.classList.add("just-in");
      wrap.appendChild(row);
    });
    scrollFeedBottom();
  }

  function showTyping() {
    const wrap = $("#dm-log");
    if (!wrap) return null;
    const row = el("article", "dm-line from-leon");
    row.appendChild(avatarEl());
    row.appendChild(el("div", "dm-bubble typing", `<span></span><span></span><span></span>`));
    wrap.appendChild(row);
    scrollFeedBottom();
    return row;
  }

  /* ------------------- reply engine: AI first, script fallback ----------- */
  let fallbackIdx = 0;
  function scriptedReply(input) {
    const s = input.toLowerCase(), R = CONFIG.replies;
    if (/\b(hi|hey|hello|yo|sup|howdy|hiya)\b/.test(s)) return { text: R.greeting };
    if (/(hir|work|availab|freelanc|project|quote|consult|budget|\brate|contract|collab)/.test(s)) return { text: R.hire };
    if (/(analytic|\bdata|ga4|gtm|bigquery|\bsql|track|\btag|attribution|report|measur|metric|dashboard|convers)/.test(s)) return { text: R.analytics };
    if (/(resum|cv\b|experience|background|worked)/.test(s))
      return { text: `${R.resume} <a href="${CONFIG.person.resume}" target="_blank" rel="noopener" class="dm-link">Leon-Tang-Resume-2026.pdf</a>`, html: true };
    if (/(design|websit|\bsite|\bweb|wordpress|landing|\bbuild|front[ -]?end)/.test(s)) return { text: R.design };
    const f = R.fallback[fallbackIdx % R.fallback.length]; fallbackIdx++;
    return { text: f };
  }

  function personaPrompt() {
    const facts = CONFIG.experience.map((w) => "- " + w.headline + (w.sub ? " (" + w.sub + ")" : "")).join("\n");
    return (
      `You are ${CONFIG.person.name}, ${CONFIG.person.role}, replying to messages on your playful Slack-style portfolio website. ` +
      `You help with marketing analytics (GA4, GTM, BigQuery, SQL), paid media/performance marketing, and web design. ` +
      `Real facts about you (do not contradict or exceed these):\n${facts}\n` +
      `To hire you, people use the contact form on the page or email ${CONFIG.person.email}. ` +
      CONFIG.ai.voice
    );
  }

  async function aiReply(userText) {
    if (!CONFIG.ai.enabled) return null;
    const history = dmLog.slice(-6).map((m) => ({ role: m.who === "you" ? "user" : "assistant", content: stripTags(m.text) }));
    const messages = [{ role: "system", content: personaPrompt() }, ...history, { role: "user", content: userText }];
    const ctrl = new AbortController();
    const to = setTimeout(() => ctrl.abort(), CONFIG.ai.timeoutMs);
    try {
      const res = await fetch(CONFIG.ai.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ model: CONFIG.ai.model, messages, private: true, referrer: "leontang-portfolio" }),
        signal: ctrl.signal,
      });
      clearTimeout(to);
      if (!res.ok) return null;
      let txt = (await res.text()).trim();
      if (txt.startsWith("{") || txt.startsWith("[")) {
        try { const j = JSON.parse(txt); txt = (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || j.response || j.content || ""; } catch {}
      }
      txt = String(txt).trim();
      if (!txt) return null;
      if (txt.length > 700) txt = txt.slice(0, 700).replace(/\s+\S*$/, "") + "…";
      return txt;
    } catch { clearTimeout(to); return null; }
  }

  async function getReply(userText) {
    const ai = await aiReply(userText);
    if (ai) return { text: ai };
    return scriptedReply(userText);
  }

  async function sendDM(text) {
    text = text.trim();
    if (!text) return;
    Sound.send();
    dmLog.push({ who: "you", text });
    persistDM();
    renderDMLog(true);
    const typing = showTyping();
    const minWait = new Promise((r) => setTimeout(r, prefersReduced ? 150 : 600));
    const reply = await getReply(text);
    await minWait;
    if (typing) typing.remove();
    dmLog.push({ who: "leon", text: reply.text, html: !!reply.html, seen: true });
    persistDM();
    renderDMLog(true);
    Sound.dm();
  }

  /* ------------------- channel messaging --------------------------------- */
  async function postToChannel(text) {
    text = text.trim();
    if (!text) return;
    Sound.send();
    const f = feed();
    const node = guestMessageNode(text);
    node.classList.add("pre-in");
    f.appendChild(node);
    requestAnimationFrame(() => { node.classList.remove("pre-in"); node.classList.add("in"); });
    scrollFeedBottom();

    const reacts = el("div", "reacts");
    reacts.innerHTML = reactionsMarkup([["👀", 1]]);
    node.querySelector(".msg-body").appendChild(reacts);

    const reply = await getReply(text);
    const rNode = leonFeedReply(reply.text, { html: !!reply.html });
    rNode.classList.add("pre-in");
    f.appendChild(rNode);
    requestAnimationFrame(() => { rNode.classList.remove("pre-in"); rNode.classList.add("in"); });
    scrollFeedBottom();
    Sound.dm();

    if (!dmFired.channel) fireDM("channelWave", "channel");
  }
  function scrollFeedBottom() { const sc = $("#feed-scroll"); sc.scrollTop = sc.scrollHeight; }

  /* --------------------- live arrivals ----------------------------------- */
  function scheduleLiveArrivals() {
    let t = 10000;
    (CONFIG.liveArrivals || []).forEach((a, i) => {
      setTimeout(() => {
        if (activeChannel !== "experience") return; // only pile onto #experience
        const node = messageNode(a, "live" + i, { live: true });
        node.classList.add("pre-in");
        feed().appendChild(node);
        requestAnimationFrame(() => { node.classList.remove("pre-in"); node.classList.add("in", "flash"); });
        toast(a.headline, "win", { emoji: a.emoji });
      }, t);
      t += 12000;
    });
  }

  /* ----------------------- behavioral DM triggers ------------------------ */
  function wireBehavior() {
    const T = CONFIG.dmTiming;
    let introTimer = setTimeout(fireUnprompted, T.introDelayMs);
    let bottomIdle = null;
    const scroller = $("#feed-scroll");

    scroller.addEventListener("scroll", () => {
      const pct = scroller.scrollTop / Math.max(1, scroller.scrollHeight - scroller.clientHeight);
      if (pct > T.introScrollPct && !unpromptedFired) { clearTimeout(introTimer); fireUnprompted(); }
      const atBottom = scroller.scrollTop + scroller.clientHeight > scroller.scrollHeight - 40;
      if (atBottom && !unpromptedFired) { clearTimeout(bottomIdle); bottomIdle = setTimeout(fireUnprompted, T.partingIdleMs); }
    }, { passive: true });

    let hoverTimer = null;
    feed().addEventListener("mouseover", (e) => {
      if (unpromptedFired) return;
      const msg = e.target.closest(".msg");
      if (msg && !msg.classList.contains("msg-pinned") && !msg.classList.contains("is-guest")) {
        clearTimeout(hoverTimer);
        hoverTimer = setTimeout(() => { clearTimeout(introTimer); fireUnprompted(); }, T.hoverMs);
      }
    });

    document.addEventListener("mouseout", (e) => {
      if (e.clientY <= 0 && !e.relatedTarget && !unpromptedFired) fireUnprompted();
    });
  }

  /* ----------------------------- contact modal --------------------------- */
  function openContact() {
    const m = $("#contact-modal");
    $("#cm-form-view").hidden = false;
    $("#cm-success-view").hidden = true;
    $("#cm-error").textContent = "";
    m.classList.add("open");
    m.setAttribute("aria-hidden", "false");
    setTimeout(() => $("#cm-name").focus(), 250);
  }
  function closeContact() {
    const m = $("#contact-modal");
    m.classList.remove("open");
    m.setAttribute("aria-hidden", "true");
  }

  async function submitContact() {
    const name = $("#cm-name").value.trim();
    const email = $("#cm-email").value.trim();
    const topic = $("#cm-topic").value;
    const message = $("#cm-message").value.trim();
    const honey = $("#cm-honey").value;
    const err = $("#cm-error");

    if (honey) { closeContact(); return; } // bot trap
    if (!name || !email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      err.textContent = "A name and a valid email, please 🙏";
      return;
    }
    err.textContent = "";

    const btn = $("#cm-submit");
    btn.classList.add("loading");
    btn.disabled = true;

    const payload = {
      name, email, topic, message,
      _subject: CONFIG.contact.subject,
      _template: "table",
      _captcha: "false",
    };

    let ok = false;
    try {
      const res = await fetch(CONFIG.contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json().catch(() => ({}));
      ok = res.ok && (data.success === "true" || data.success === true || res.status === 200);
    } catch { ok = false; }

    btn.classList.remove("loading");
    btn.disabled = false;

    if (ok) {
      showContactSuccess(name, false, { name, email, topic, message });
    } else {
      // graceful fallback: hand off to their mail client so nothing is lost
      showContactSuccess(name, true, { name, email, topic, message });
    }
  }

  function showContactSuccess(name, viaMailto, data) {
    $("#cm-form-view").hidden = true;
    const view = $("#cm-success-view");
    view.hidden = false;
    Sound.success();
    // confetti from the modal centre
    const r = $(".modal").getBoundingClientRect();
    FX.confetti(r.left + r.width / 2, r.top + r.height / 2, prefersReduced ? 0 : 90);

    if (viaMailto) {
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})\nTopic: ${data.topic}`);
      const href = `mailto:${CONFIG.person.email}?subject=${encodeURIComponent(CONFIG.contact.subject)}&body=${body}`;
      $("#cm-success-text").innerHTML =
        `Couldn't reach the mail server just now, ${esc(name.split(" ")[0])} — but your draft is ready. ` +
        `<a href="${href}" class="dm-link">Click to send it from your email →</a>`;
    } else {
      $("#cm-success-text").textContent =
        `Thanks ${name.split(" ")[0]} — that landed in Leon's inbox. He'll reply from ${CONFIG.person.email} soon. 🙌`;
    }
  }

  /* ----------------------------- controls -------------------------------- */
  function wireControls() {
    $("#thread-close").addEventListener("click", closeThread);
    $("#thread-scrim").addEventListener("click", closeThread);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeThread(); closeContact(); closeProfile(); toggleWsMenu(false); }
    });
    $("#dm-row").addEventListener("click", switchToDM);

    const muteBtn = $("#mute");
    const paint = () => { muteBtn.textContent = Sound.muted ? "🔇" : "🔔"; muteBtn.title = Sound.muted ? "Sounds off" : "Sounds on"; };
    paint();
    muteBtn.addEventListener("click", () => { Sound.toggleMute(); paint(); if (!Sound.muted) Sound.ding(); });

    $("#burger").addEventListener("click", () => document.body.classList.toggle("nav-open"));
    $("#nav-scrim").addEventListener("click", () => document.body.classList.remove("nav-open"));

    const ci = $("#channel-input");
    const cSend = () => { const v = ci.value; ci.value = ""; if (inDM()) sendDM(v); else postToChannel(v); };
    $("#channel-send").addEventListener("click", cSend);
    ci.addEventListener("keydown", (e) => { if (e.key === "Enter") cSend(); });

    // contact modal
    $("#cm-close").addEventListener("click", closeContact);
    $("#cm-done").addEventListener("click", closeContact);
    $("#cm-submit").addEventListener("click", submitContact);
    $("#contact-modal").addEventListener("click", (e) => { if (e.target.id === "contact-modal") closeContact(); });
    $("#cm-message").addEventListener("keydown", (e) => { if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) submitContact(); });

    // profile overlay
    $("#me-profile").addEventListener("click", openProfile);
    $("#pf-close").addEventListener("click", closeProfile);
    $("#profile-modal").addEventListener("click", (e) => { if (e.target.id === "profile-modal") closeProfile(); });
    // clicking Leon's face in the feed or a thread opens the profile
    document.addEventListener("click", (e) => {
      const av = e.target.closest(".avatar-photo");
      if (!av) return;
      if (av.closest("#toasts") || av.closest("#profile-modal") || av.closest("#contact-modal") || av.closest(".me")) return;
      openProfile();
    });

    // workspace menu (replaces the boring dropdown)
    buildWsMenu();
    $("#ws-head").addEventListener("click", (e) => { e.stopPropagation(); toggleWsMenu(); });
    document.addEventListener("click", (e) => {
      if (!e.target.closest("#ws-head") && !e.target.closest("#ws-menu")) toggleWsMenu(false);
    });

    const unlockOnce = () => { Sound.unlock(); removeEventListener("pointerdown", unlockOnce); removeEventListener("keydown", unlockOnce); };
    addEventListener("pointerdown", unlockOnce);
    addEventListener("keydown", unlockOnce);
  }

  /* ------------------------------ boot ----------------------------------- */
  function boot() {
    buildShell();
    initDMMemory();
    if (dmLog.some((m) => m.who === "leon" && !m.seen)) tuckToDM();
    const meta = CONFIG.channels.find((c) => c.active) || CONFIG.channels[0];
    activeChannel = meta.name;
    $("#channel-title").textContent = meta.name;
    $("#channel-topic").textContent = meta.topic || "";
    $("#channel-input").placeholder = "Message #" + meta.name;
    renderChannel(meta.name);
    wireControls();
    wireBehavior();
    scheduleLiveArrivals();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
