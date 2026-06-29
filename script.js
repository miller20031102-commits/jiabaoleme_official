let selectedTime = "不限";
let selectedType = "不限";
let selectedPrice = "不限";
let lastName = "";

const talks = [
  "🐻 嘉飽熊：「別想了，今天就是它！」",
  "🐻 嘉飽熊：「你的胃已經替你做決定了。」",
  "🐻 嘉飽熊：「再滑下去就要餓昏啦。」",
  "🐻 嘉飽熊：「命運骰子選中了這間。」",
  "🐻 嘉飽熊：「今天不用再問朋友吃什麼了。」",
  "🐻 嘉飽熊：「出發！吃飽比較重要。」",
  "🐻 嘉飽熊：「這間感覺可以，衝一波。」",
  "🐻 嘉飽熊：「晚點再猶豫，現在先吃。」"
];

const diceIcon = document.querySelector("#diceIcon");
const resultName = document.querySelector("#resultName");
const resultDesc = document.querySelector("#resultDesc");
const bearTalk = document.querySelector("#bearTalk");
const areaText = document.querySelector("#areaText");
const typeText = document.querySelector("#typeText");
const priceText = document.querySelector("#priceText");
const ratingText = document.querySelector("#ratingText");
const timeText = document.querySelector("#timeText");
const mapLink = document.querySelector("#mapLink");
const countText = document.querySelector("#countText");

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
    const timeOk = selectedTime === "不限" || r.times.includes(selectedTime);
    const typeOk = selectedType === "不限" || r.types.includes(selectedType);
    const priceOk = selectedPrice === "不限" || r.price === selectedPrice;
    return timeOk && typeOk && priceOk;
  });
}

function updateCount() {
  countText.textContent = `符合 ${candidates().length} 間`;
}

function pickOne() {
  const list = candidates();

  if (!list.length) {
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
    return;
  }

  let chosen = list[Math.floor(Math.random() * list.length)];

  if (list.length > 1 && chosen.name === lastName) {
    const other = list.filter(r => r.name !== lastName);
    chosen = other[Math.floor(Math.random() * other.length)];
  }

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
  document.querySelector("#resultCard").scrollIntoView({behavior:"smooth", block:"center"});
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

document.querySelector("#rollBtn").addEventListener("click", roll);
document.querySelector("#againBtn").addEventListener("click", roll);

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
