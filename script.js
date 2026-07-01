let selectedTime = "不限";
let selectedType = "不限";
let selectedPrice = "不限";
let selectedKeyword = "";
let lastName = "";
let currentRestaurant = null;
let currentMode = "normal";

const STORAGE_FAVORITES = "jiabaoleme_favorites_v1";
const STORAGE_TOP_PREFIX = "jiabaoleme_top_";
const STORAGE_THEME = "jiabaoleme_theme_v1";

const talks = [
  "🐻 嘉飽熊：「別想了，今天就是它！」",
  "🐻 嘉飽熊：「你的胃已經替你做決定了。」",
  "🐻 嘉飽熊：「再滑下去就要餓昏啦。」",
  "🐻 嘉飽熊：「命運骰子選中了這間。」",
  "🐻 嘉飽熊：「今天不用再問朋友吃什麼了。」",
  "🐻 嘉飽熊：「出發！吃飽比較重要。」",
  "🐻 嘉飽熊：「這間感覺可以，衝一波。」",
  "🐻 嘉飽熊：「雞肉飯模式啟動，嘉義人的靈魂來了。」",
  "🐻 嘉飽熊：「晚點再猶豫，現在先吃。」"
];


const NIGHT_SNACK_WHITELIST = [
  "豆奶攤",
  "四海豆漿",
  "金馬肉粥",
  "發哥黑白切",
  "永和60小麵攤",
  "秀呷店宵夜",
  "初次見麵鍋燒",
  "阿信美食",
  "燃手串",
  "古早味烤玉米",
  "玖壹伍深夜食光",
  "女巫貓葵",
  "胖叔叔",
  "Mr.Night 古巴三明治"
];

const BAR_KEYWORDS = ["酒吧", "bar", "調酒", "cocktail", "酒室", "酒館", "餐酒館", "bistro", "小酌", "微醺"];

function textIncludesAny(text, keywords) {
  const value = String(text || "").toLowerCase();
  return keywords.some(keyword => value.includes(String(keyword).toLowerCase()));
}

function normalizeRestaurantName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[\s　·・()（）\-_／/]/g, "");
}

function isNightSnackWhitelisted(item) {
  const itemName = normalizeRestaurantName(item.name);
  return NIGHT_SNACK_WHITELIST.some(name =>
    itemName.includes(normalizeRestaurantName(name))
  );
}

function isBarRestaurant(item) {
  const joined = [
    item.name,
    item.desc,
    ...(item.types || []),
    ...(item.tags || [])
  ].join(" ");
  return textIncludesAny(joined, BAR_KEYWORDS);
}

function isNightSnackRestaurant(item) {
  if (isNightSnackWhitelisted(item)) return true;
  if (isBarRestaurant(item)) return false;

  return (item.types || []).includes("宵夜") || (item.tags || []).includes("宵夜模式");
}

function matchTime(item) {
  if (selectedTime === "不限") return true;
  if (selectedTime === "宵夜") return isNightSnackRestaurant(item);
  return (item.times || []).includes(selectedTime);
}

function matchType(item) {
  if (selectedType === "不限") return true;
  if (selectedType === "宵夜") return isNightSnackRestaurant(item);
  if (selectedType === "酒吧") return isBarRestaurant(item) && !isNightSnackRestaurant(item);
  return (item.types || []).includes(selectedType);
}

const diceIcon = document.querySelector("#diceIcon");
const resultName = document.querySelector("#resultName");
const resultDesc = document.querySelector("#resultDesc");
const bearTalk = document.querySelector("#bearTalk");
const areaText = document.querySelector("#areaText");
const typeText = document.querySelector("#typeText");
const priceText = document.querySelector("#priceText");
const ratingText = document.querySelector("#ratingText");
const timeText = document.querySelector("#timeText");
const tagText = document.querySelector("#tagText");
const mapLink = document.querySelector("#mapLink");
const countText = document.querySelector("#countText");
const favoriteBtn = document.querySelector("#favoriteBtn");
const topList = document.querySelector("#topList");
const favoriteList = document.querySelector("#favoriteList");
const clearFavoritesBtn = document.querySelector("#clearFavoritesBtn");
const rollFavoriteBtn = document.querySelector("#rollFavoriteBtn");
const modeBadge = document.querySelector("#modeBadge");
const searchInput = document.querySelector("#searchInput");
const clearSearchBtn = document.querySelector("#clearSearchBtn");
const resetBtn = document.querySelector("#resetBtn");
const copyBtn = document.querySelector("#copyBtn");
const filterHint = document.querySelector("#filterHint");
const statsGrid = document.querySelector("#statsGrid");

function todayKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${STORAGE_TOP_PREFIX}${yyyy}-${mm}-${dd}`;
}

function escapeHTML(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function showToast(message) {
  let toast = document.querySelector("#toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function gentleVibrate() {
  if (navigator.vibrate) navigator.vibrate(18);
}

function safeJsonParse(value, fallback) {
  try {
    return JSON.parse(value) ?? fallback;
  } catch {
    return fallback;
  }
}

function getFavorites() {
  return safeJsonParse(localStorage.getItem(STORAGE_FAVORITES), []);
}

function saveFavorites(items) {
  localStorage.setItem(STORAGE_FAVORITES, JSON.stringify(items));
}

function isFavorite(name) {
  return getFavorites().some(item => item.name === name);
}

function getTopData() {
  return safeJsonParse(localStorage.getItem(todayKey()), {});
}

function saveTopData(data) {
  localStorage.setItem(todayKey(), JSON.stringify(data));
}

function addTopCount(item) {
  const data = getTopData();

  if (!data[item.name]) {
    data[item.name] = {
      name: item.name,
      area: item.area,
      types: item.types,
      price: item.price,
      rating: item.rating,
      count: 0
    };
  }

  data[item.name].count += 1;
  saveTopData(data);
  renderTopList();
}

function bindGroup(groupId, selector, callback) {
  document.querySelectorAll(`#${groupId} ${selector}`).forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(`#${groupId} ${selector}`).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      callback(btn.dataset.value);
      currentMode = "normal";
      setModeBadge("normal");
      updateCount();
    });
  });
}

bindGroup("timeGroup", ".chip", v => selectedTime = v);
bindGroup("priceGroup", ".chip", v => selectedPrice = v);
bindGroup("typeGroup", ".category", v => selectedType = v);

function keywordText(item) {
  return [
    item.name,
    item.area,
    item.desc,
    item.price,
    item.rating,
    ...(item.types || []),
    ...(item.times || []),
    ...(item.tags || [])
  ].join(" ").toLowerCase();
}

function matchKeyword(item) {
  const keyword = selectedKeyword.trim().toLowerCase();
  if (!keyword) return true;
  return keyword.split(/\s+/).every(word => keywordText(item).includes(word));
}

function candidates() {
  return restaurants.filter(r => {
    const timeOk = matchTime(r);
    const typeOk = matchType(r);
    const priceOk = selectedPrice === "不限" || r.price === selectedPrice;
    const keywordOk = matchKeyword(r);
    return timeOk && typeOk && priceOk && keywordOk;
  });
}

function updateFilterHint(count) {
  if (!filterHint) return;
  const parts = [];
  if (selectedKeyword.trim()) parts.push(`搜尋「${selectedKeyword.trim()}」`);
  if (selectedTime !== "不限") parts.push(selectedTime);
  if (selectedType !== "不限") parts.push(selectedType);
  if (selectedPrice !== "不限") parts.push(selectedPrice);

  if (!parts.length) {
    filterHint.textContent = "目前不限條件，直接骰一間嘉義美食。";
  } else if (count === 0) {
    filterHint.textContent = `目前條件：${parts.join("＋")}。沒有符合店家，建議放寬一個條件。`;
  } else {
    filterHint.textContent = `目前條件：${parts.join("＋")}，共有 ${count} 間可以骰。`;
  }
}

function updateCount() {
  const count = candidates().length;
  countText.textContent = `符合 ${count} 間`;
  updateFilterHint(count);
}

function renderTags(item) {
  if (!tagText) return;
  const tags = item && item.tags && item.tags.length ? item.tags : ["嘉義脆友推薦"];
  tagText.innerHTML = tags.slice(0, 4).map(tag => `<span>🏷️ ${escapeHTML(tag)}</span>`).join("");
}

function updateFavoriteButton() {
  if (!currentRestaurant) {
    favoriteBtn.textContent = "♡ 收藏這間";
    favoriteBtn.classList.add("disabled");
    favoriteBtn.classList.remove("saved");
    if (copyBtn) copyBtn.classList.add("disabled");
    return;
  }

  favoriteBtn.classList.remove("disabled");
  if (copyBtn) copyBtn.classList.remove("disabled");

  if (isFavorite(currentRestaurant.name)) {
    favoriteBtn.textContent = "♥ 已收藏";
    favoriteBtn.classList.add("saved");
  } else {
    favoriteBtn.textContent = "♡ 收藏這間";
    favoriteBtn.classList.remove("saved");
  }
}

function setModeBadge(mode) {
  if (!modeBadge) return;
  modeBadge.classList.remove("mode-chicken", "mode-favorites");
  if (mode === "chicken") {
    modeBadge.textContent = "雞肉飯模式";
    modeBadge.classList.add("mode-chicken");
  } else if (mode === "favorites") {
    modeBadge.textContent = "收藏模式";
    modeBadge.classList.add("mode-favorites");
  } else {
    modeBadge.textContent = "今日食運";
  }
}

function setResult(chosen, shouldCount = true) {
  currentRestaurant = chosen;
  lastName = chosen.name;

  gentleVibrate();
  resultName.textContent = chosen.name;
  bearTalk.textContent = talks[Math.floor(Math.random() * talks.length)];
  resultDesc.textContent = chosen.desc;
  areaText.textContent = `📍 ${chosen.area}`;
  typeText.textContent = `🍽️ ${chosen.types.join(" / ")}`;
  priceText.textContent = `💰 ${chosen.price}`;
  ratingText.textContent = `⭐ ${chosen.rating}`;
  timeText.textContent = `🕒 ${chosen.times.join(" / ")}`;
  mapLink.href = chosen.map;
  mapLink.classList.remove("disabled");
  renderTags(chosen);

  updateFavoriteButton();

  if (shouldCount) {
    addTopCount(chosen);
  }

  document.querySelector("#resultCard").scrollIntoView({behavior:"smooth", block:"center"});
}

function pickOne() {
  const list = candidates();

  if (!list.length) {
    currentRestaurant = null;
    resultName.textContent = "這組合暫時沒店家 😵";
    bearTalk.textContent = "🐻 嘉飽熊：「換個預算、分類或時段再骰一次！」";
    resultDesc.textContent = "目前資料庫沒有符合條件的店家，之後可以再補更多資料。";
    areaText.textContent = "📍 嘉義市";
    typeText.textContent = `🍽️ ${selectedType}`;
    priceText.textContent = `💰 ${selectedPrice}`;
    ratingText.textContent = "⭐ —";
    timeText.textContent = `🕒 ${selectedTime}`;
    mapLink.href = "#";
    mapLink.classList.add("disabled");
    renderTags({ tags: ["沒有符合店家", "可按重置條件"] });
    showToast("這組條件沒店家，放寬一點會更好骰");
    updateFavoriteButton();
    return;
  }

  let chosen = list[Math.floor(Math.random() * list.length)];

  if (list.length > 1 && chosen.name === lastName) {
    const other = list.filter(r => r.name !== lastName);
    chosen = other[Math.floor(Math.random() * other.length)];
  }

  setResult(chosen, true);
}

function roll() {
  currentMode = "normal";
  setModeBadge("normal");
  updateCount();
  diceIcon.classList.remove("rolling");
  void diceIcon.offsetWidth;
  diceIcon.classList.add("rolling");
  resultName.textContent = "骰子轉動中...";
  bearTalk.textContent = "🐻 嘉飽熊：「我正在幫你挑！」";
  resultDesc.textContent = "等等，命運美食即將出現。";
  setTimeout(pickOne, 620);
}

function rerollCurrentMode() {
  if (currentMode === "chicken") {
    rollChickenMode();
    return;
  }

  if (currentMode === "favorites") {
    rollFromFavorites();
    return;
  }

  roll();
}

function toggleFavorite() {
  if (!currentRestaurant) return;

  let items = getFavorites();
  const exists = items.some(item => item.name === currentRestaurant.name);

  if (exists) {
    items = items.filter(item => item.name !== currentRestaurant.name);
  } else {
    items.unshift({
      name: currentRestaurant.name,
      area: currentRestaurant.area,
      types: currentRestaurant.types,
      price: currentRestaurant.price,
      rating: currentRestaurant.rating,
      times: currentRestaurant.times,
      desc: currentRestaurant.desc,
      map: currentRestaurant.map,
      tags: currentRestaurant.tags || ["嘉義脆友推薦"]
    });
  }

  saveFavorites(items);
  showToast(exists ? "已從收藏移除" : "已加入收藏 ❤️");
  updateFavoriteButton();
  renderFavoriteList();
}

function renderTopList() {
  const data = Object.values(getTopData())
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  if (!data.length) {
    topList.innerHTML = `<div class="empty-text">今天還沒有排名。先按骰子，嘉飽熊就會開始統計 🍚</div>`;
    return;
  }

  topList.innerHTML = data.map((item, index) => `
    <div class="cute-item">
      <div class="rank-badge">${index + 1}</div>
      <div class="cute-left">
        <div class="cute-name">${escapeHTML(item.name)}</div>
        <div class="cute-meta">📍 ${escapeHTML(item.area)}　🍽️ ${(item.types || []).map(escapeHTML).join(" / ")}　🎲 ${item.count} 次</div>
      </div>
    </div>
  `).join("");
}

function renderFavoriteList() {
  const items = getFavorites();

  if (!items.length) {
    favoriteList.innerHTML = `<div class="empty-text">還沒有收藏。骰到喜歡的店，就按「♡ 收藏這間」❤️</div>`;
    return;
  }

  favoriteList.innerHTML = items.map(item => `
    <div class="cute-item">
      <div class="cute-left">
        <div class="cute-name">${escapeHTML(item.name)}</div>
        <div class="cute-meta">📍 ${escapeHTML(item.area)}　🍽️ ${(item.types || []).map(escapeHTML).join(" / ")}　💰 ${escapeHTML(item.price)}</div>
      </div>
      <button class="remove-fav" data-name="${escapeHTML(item.name)}">移除</button>
    </div>
  `).join("");

  document.querySelectorAll(".remove-fav").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const nextItems = getFavorites().filter(item => item.name !== name);
      saveFavorites(nextItems);
      renderFavoriteList();
      updateFavoriteButton();
      showToast("已移除收藏");
    });
  });
}

function rollFromFavorites() {
  currentMode = "favorites";
  setModeBadge("favorites");
  const items = getFavorites();
  countText.textContent = `收藏 ${items.length} 間`;
  if (filterHint) filterHint.textContent = items.length ? "收藏模式：只會從你的收藏清單裡骰。" : "收藏模式：目前還沒有收藏店家。";

  if (!items.length) {
    resultName.textContent = "收藏還是空的 🥺";
    bearTalk.textContent = "🐻 嘉飽熊：「先收藏幾間愛店，我再從裡面幫你骰！」";
    resultDesc.textContent = "骰到喜歡的店後，按下收藏，就可以建立你的專屬美食清單。";
    renderTags({ tags: ["先收藏愛店"] });
    document.querySelector("#resultCard").scrollIntoView({behavior:"smooth", block:"center"});
    return;
  }

  diceIcon.classList.remove("rolling");
  void diceIcon.offsetWidth;
  diceIcon.classList.add("rolling");

  resultName.textContent = "從收藏裡挑選中...";
  bearTalk.textContent = "🐻 嘉飽熊：「你的愛店我都記得！」";
  resultDesc.textContent = "等等，從收藏清單幫你抽一間。";

  const chosen = items[Math.floor(Math.random() * items.length)];
  setTimeout(() => setResult(chosen, true), 520);
}


function chickenModeCandidates() {
  return restaurants.filter(r => (r.tags || []).includes("雞肉飯模式"));
}

function rollChickenMode() {
  currentMode = "chicken";
  setModeBadge("chicken");
  const list = chickenModeCandidates();
  countText.textContent = `雞肉飯 ${list.length} 間`;
  if (filterHint) filterHint.textContent = "雞肉飯模式：不受時段、預算、分類限制，只從雞肉飯清單骰。";

  if (!list.length) {
    resultName.textContent = "雞肉飯模式暫時沒店家 🥺";
    bearTalk.textContent = "🐻 嘉飽熊：「雞肉飯清單還沒準備好！」";
    resultDesc.textContent = "目前沒有標記為雞肉飯模式的店家。";
    renderTags({ tags: ["雞肉飯模式"] });
    document.querySelector("#resultCard").scrollIntoView({behavior:"smooth", block:"center"});
    return;
  }

  diceIcon.classList.remove("rolling");
  void diceIcon.offsetWidth;
  diceIcon.classList.add("rolling");

  resultName.textContent = "雞肉飯模式啟動中...";
  bearTalk.textContent = "🐻 嘉飽熊：「嘉義人的靈魂，今天從 25 間裡挑一碗！」";
  resultDesc.textContent = "只會從雞肉飯模式名單裡骰，包含隱藏版選項。";

  let chosen = list[Math.floor(Math.random() * list.length)];
  if (list.length > 1 && chosen.name === lastName) {
    const other = list.filter(r => r.name !== lastName);
    chosen = other[Math.floor(Math.random() * other.length)];
  }

  setTimeout(() => setResult(chosen, true), 560);
}

document.querySelector("#rollBtn").addEventListener("click", roll);
document.querySelector("#againBtn").addEventListener("click", rerollCurrentMode);
favoriteBtn.addEventListener("click", toggleFavorite);
rollFavoriteBtn.addEventListener("click", rollFromFavorites);
const chickenModeBtn = document.querySelector("#chickenModeBtn");
if (chickenModeBtn) chickenModeBtn.addEventListener("click", rollChickenMode);

clearFavoritesBtn.addEventListener("click", () => {
  const items = getFavorites();
  if (!items.length) return;

  const ok = confirm("確定要清空所有收藏嗎？");
  if (!ok) return;

  saveFavorites([]);
  renderFavoriteList();
  updateFavoriteButton();
});

function resetFilters({ rollAfter = false } = {}) {
  selectedTime = "不限";
  selectedType = "不限";
  selectedPrice = "不限";
  selectedKeyword = "";
  currentMode = "normal";
  setModeBadge("normal");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
  document.querySelector('#timeGroup [data-value="不限"]').classList.add("active");
  document.querySelector('#priceGroup [data-value="不限"]').classList.add("active");
  document.querySelector('#typeGroup [data-value="不限"]').classList.add("active");
  updateCount();
  if (rollAfter) roll();
}

document.querySelector("#luckyBtn").addEventListener("click", () => {
  resetFilters({ rollAfter: true });
});

if (resetBtn) {
  resetBtn.addEventListener("click", () => {
    resetFilters();
    showToast("條件已重置，可以重新骰了");
  });
}

if (searchInput) {
  searchInput.addEventListener("input", () => {
    selectedKeyword = searchInput.value;
    currentMode = "normal";
    setModeBadge("normal");
    updateCount();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener("click", () => {
    selectedKeyword = "";
    if (searchInput) searchInput.value = "";
    updateCount();
    searchInput?.focus();
  });
}

if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    if (!currentRestaurant) return;
    const text = `${currentRestaurant.name}｜${currentRestaurant.area}｜${currentRestaurant.price}`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("已複製店名，可以貼給朋友了");
    } catch {
      showToast(currentRestaurant.name);
    }
  });
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  document.querySelector("#themeBtn").textContent = isDark ? "☀️" : "🌙";
}

applyTheme(localStorage.getItem(STORAGE_THEME) || "light");

document.querySelector("#themeBtn").addEventListener("click", () => {
  const nextTheme = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem(STORAGE_THEME, nextTheme);
  applyTheme(nextTheme);
});

function renderStats() {
  if (!statsGrid || !Array.isArray(restaurants)) return;
  const order = ["燒肉", "咖哩", "火鍋", "美式", "日式", "中式", "小吃", "咖啡甜點", "早餐", "義式", "異國料理", "酒吧", "宵夜", "熱炒", "鐵板燒", "素食", "燒烤"];
  const counts = restaurants.reduce((acc, item) => {
    (item.types || []).forEach(type => acc[type] = (acc[type] || 0) + 1);
    return acc;
  }, {});
  statsGrid.innerHTML = order
    .filter(type => counts[type])
    .map(type => `<div><b>${counts[type]}</b><span>${escapeHTML(type)}</span></div>`)
    .join("");
}

setModeBadge("normal");
updateCount();
renderStats();
renderTopList();
renderFavoriteList();
updateFavoriteButton();


// v6.7.5 推薦店家入口：正式 Google 表單網址放這裡
const RECOMMEND_FORM_URL = "https://forms.gle/X3v3eB8JikEPe9L9A";

function setupRecommendStoreButtons() {
  const buttons = [
    document.querySelector("#recommendStoreBtn"),
    document.querySelector("#recommendStoreBtn2")
  ].filter(Boolean);

  buttons.forEach(btn => {
    btn.href = RECOMMEND_FORM_URL;
    btn.addEventListener("click", event => {
      if (RECOMMEND_FORM_URL.includes("REPLACE_WITH_YOUR_FORM_LINK")) {
        event.preventDefault();
        alert("推薦店家表單連結還沒換上！請到 script.js 把 RECOMMEND_FORM_URL 改成你的 Google 表單網址。");
      }
    });
  });
}

setupRecommendStoreButtons();
