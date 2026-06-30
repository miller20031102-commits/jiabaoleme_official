let selectedTime = "不限";
let selectedType = "不限";
let selectedPrice = "不限";
let lastName = "";
let currentRestaurant = null;

const STORAGE_FAVORITES = "jiabaoleme_favorites_v1";
const STORAGE_TOP_PREFIX = "jiabaoleme_top_";

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

function todayKey() {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  return `${STORAGE_TOP_PREFIX}${yyyy}-${mm}-${dd}`;
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
      updateCount();
    });
  });
}

bindGroup("timeGroup", ".chip", v => selectedTime = v);
bindGroup("priceGroup", ".chip", v => selectedPrice = v);
bindGroup("typeGroup", ".category", v => selectedType = v);

function candidates() {
  return restaurants.filter(r => {
    const timeOk = matchTime(r);
    const typeOk = matchType(r);
    const priceOk = selectedPrice === "不限" || r.price === selectedPrice;
    return timeOk && typeOk && priceOk;
  });
}

function updateCount() {
  countText.textContent = `符合 ${candidates().length} 間`;
}

function renderTags(item) {
  if (!tagText) return;
  const tags = item && item.tags && item.tags.length ? item.tags : ["嘉義脆友推薦"];
  tagText.innerHTML = tags.slice(0, 4).map(tag => `<span>🏷️ ${tag}</span>`).join("");
}

function updateFavoriteButton() {
  if (!currentRestaurant) {
    favoriteBtn.textContent = "♡ 收藏這間";
    favoriteBtn.classList.add("disabled");
    favoriteBtn.classList.remove("saved");
    return;
  }

  favoriteBtn.classList.remove("disabled");

  if (isFavorite(currentRestaurant.name)) {
    favoriteBtn.textContent = "♥ 已收藏";
    favoriteBtn.classList.add("saved");
  } else {
    favoriteBtn.textContent = "♡ 收藏這間";
    favoriteBtn.classList.remove("saved");
  }
}

function setResult(chosen, shouldCount = true) {
  currentRestaurant = chosen;
  lastName = chosen.name;

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
    renderTags({ tags: ["沒有符合店家"] });
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
  diceIcon.classList.remove("rolling");
  void diceIcon.offsetWidth;
  diceIcon.classList.add("rolling");
  resultName.textContent = "骰子轉動中...";
  bearTalk.textContent = "🐻 嘉飽熊：「我正在幫你挑！」";
  resultDesc.textContent = "等等，命運美食即將出現。";
  setTimeout(pickOne, 620);
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
        <div class="cute-name">${item.name}</div>
        <div class="cute-meta">📍 ${item.area}　🍽️ ${item.types.join(" / ")}　🎲 ${item.count} 次</div>
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
        <div class="cute-name">${item.name}</div>
        <div class="cute-meta">📍 ${item.area}　🍽️ ${item.types.join(" / ")}　💰 ${item.price}</div>
      </div>
      <button class="remove-fav" data-name="${item.name}">移除</button>
    </div>
  `).join("");

  document.querySelectorAll(".remove-fav").forEach(button => {
    button.addEventListener("click", () => {
      const name = button.dataset.name;
      const nextItems = getFavorites().filter(item => item.name !== name);
      saveFavorites(nextItems);
      renderFavoriteList();
      updateFavoriteButton();
    });
  });
}

function rollFromFavorites() {
  const items = getFavorites();

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


document.querySelector("#rollBtn").addEventListener("click", roll);
document.querySelector("#againBtn").addEventListener("click", roll);
favoriteBtn.addEventListener("click", toggleFavorite);
rollFavoriteBtn.addEventListener("click", rollFromFavorites);

clearFavoritesBtn.addEventListener("click", () => {
  const items = getFavorites();
  if (!items.length) return;

  const ok = confirm("確定要清空所有收藏嗎？");
  if (!ok) return;

  saveFavorites([]);
  renderFavoriteList();
  updateFavoriteButton();
});

document.querySelector("#luckyBtn").addEventListener("click", () => {
  selectedTime = "不限";
  selectedType = "不限";
  selectedPrice = "不限";
  document.querySelectorAll(".active").forEach(el => el.classList.remove("active"));
  document.querySelector('#timeGroup [data-value="不限"]').classList.add("active");
  document.querySelector('#priceGroup [data-value="不限"]').classList.add("active");
  document.querySelector('#typeGroup [data-value="不限"]').classList.add("active");
  updateCount();
  roll();
});

document.querySelector("#themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.querySelector("#themeBtn").textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

updateCount();
renderTopList();
renderFavoriteList();
updateFavoriteButton();
