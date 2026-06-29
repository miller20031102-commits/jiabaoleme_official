const restaurants = [
  {
    "name": "丸京燒肉 割烹專門店 Marukyo yakiniku 嘉義垂楊店",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.8",
    "desc": "專業日式燒肉與割烹料理，適合聚餐、約會、想吃好一點的肉。",
    "map": "https://www.google.com/maps/search/?api=1&query=丸京燒肉 割烹專門店 Marukyo yakiniku 嘉義垂楊店 嘉義市"
  },
  {
    "name": "藤燒肉",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "高評價日式燒肉，適合想認真吃肉的晚上。",
    "map": "https://www.google.com/maps/search/?api=1&query=藤燒肉 嘉義市"
  },
  {
    "name": "肉次方 燒肉放題 嘉義中山店",
    "area": "西區",
    "types": [
      "燒肉"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "燒肉放題路線，適合朋友聚餐、想大口吃肉。",
    "map": "https://www.google.com/maps/search/?api=1&query=肉次方 燒肉放題 嘉義中山店 嘉義市"
  },
  {
    "name": "八攻燒肉",
    "area": "東區",
    "types": [
      "燒肉"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.8",
    "desc": "人氣燒肉選擇，想吃肉又想熱鬧可以骰這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=八攻燒肉 嘉義市"
  },
  {
    "name": "野村燒肉 嘉義店",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.6",
    "desc": "日式燒肉，午晚餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=野村燒肉 嘉義店 嘉義市"
  },
  {
    "name": "無為燒肉",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "特色燒肉餐廳，適合晚餐聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=無為燒肉 嘉義市"
  },
  {
    "name": "原燒 日式燒肉 沙拉烤物放題 嘉義耐斯店",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.9",
    "desc": "王品系日式燒肉，穩定聚餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=原燒 日式燒肉 沙拉烤物放題 嘉義耐斯店 嘉義市"
  },
  {
    "name": "燒肉Smile 嘉義秀泰店",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "個人燒肉也能吃，適合想簡單吃燒肉。",
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉Smile 嘉義秀泰店 嘉義市"
  },
  {
    "name": "原饌日式無煙燒肉",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "日式無煙燒肉，適合晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=原饌日式無煙燒肉 嘉義市"
  },
  {
    "name": "壹心燒肉 嘉義本店",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.6",
    "desc": "質感燒肉，適合約會或重要聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=壹心燒肉 嘉義本店 嘉義市"
  },
  {
    "name": "野赤燒肉",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.7",
    "desc": "人氣日式燒肉，晚餐想吃肉可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=野赤燒肉 嘉義市"
  },
  {
    "name": "燒肉觀止",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.6",
    "desc": "高價位燒肉，適合犒賞自己。",
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉觀止 嘉義市"
  },
  {
    "name": "好客燒肉 嘉義店",
    "area": "西區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.7",
    "desc": "聚餐型燒肉，選擇多。",
    "map": "https://www.google.com/maps/search/?api=1&query=好客燒肉 嘉義店 嘉義市"
  },
  {
    "name": "森崎燒肉",
    "area": "東區",
    "types": [
      "燒肉"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.6",
    "desc": "質感燒肉餐廳，適合聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=森崎燒肉 嘉義市"
  },
  {
    "name": "路易奇電力公司 嘉義日式燒肉",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.8",
    "desc": "頂級和牛燒烤路線，適合想吃好一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=路易奇電力公司 嘉義日式燒肉 嘉義市"
  },
  {
    "name": "燒肉眾精緻炭火燒肉 嘉義民生店",
    "area": "西區",
    "types": [
      "燒肉"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.6",
    "desc": "炭火燒肉聚餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉眾精緻炭火燒肉 嘉義民生店 嘉義市"
  },
  {
    "name": "色鼎石頭燒肉 嘉義旗艦店",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.6",
    "desc": "人氣石頭燒肉，適合多人吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=色鼎石頭燒肉 嘉義旗艦店 嘉義市"
  },
  {
    "name": "好好家慢熟咖哩",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "慢熟咖哩，高評價日式咖哩。",
    "map": "https://www.google.com/maps/search/?api=1&query=好好家慢熟咖哩 嘉義市"
  },
  {
    "name": "舊時光新鮮事 老屋咖哩專賣",
    "area": "西區",
    "types": [
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "老屋咖哩氛圍，適合約會與朋友吃飯。",
    "map": "https://www.google.com/maps/search/?api=1&query=舊時光新鮮事 老屋咖哩專賣 嘉義市"
  },
  {
    "name": "大人味 日印咖喱",
    "area": "東區",
    "types": [
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "日式與印度咖哩風格，選擇不無聊。",
    "map": "https://www.google.com/maps/search/?api=1&query=大人味 日印咖喱 嘉義市"
  },
  {
    "name": "國王的菜 印度餐廳",
    "area": "西區",
    "types": [
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "印度料理與咖哩，想換口味很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=國王的菜 印度餐廳 嘉義市"
  },
  {
    "name": "盛食咖哩店 嘉義店",
    "area": "西區",
    "types": [
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義咖哩熱門選項，午晚餐都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=盛食咖哩店 嘉義店 嘉義市"
  },
  {
    "name": "白梗咖哩",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "平價日式咖哩，晚上不知道吃什麼可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=白梗咖哩 嘉義市"
  },
  {
    "name": "胖卡咖哩",
    "area": "東區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.9",
    "desc": "日式定食與咖哩，價格親民。",
    "map": "https://www.google.com/maps/search/?api=1&query=胖卡咖哩 嘉義市"
  },
  {
    "name": "初·仨食",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "日式炸豬排與定食，咖哩分類也適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=初·仨食 嘉義市"
  },
  {
    "name": "丸野 丼咖喱定食專門店",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "丼飯、咖哩、定食一次滿足。",
    "map": "https://www.google.com/maps/search/?api=1&query=丸野 丼咖喱定食專門店 嘉義市"
  },
  {
    "name": "八谷 豬排 咖哩 民族店",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "豬排咖哩，想吃飽很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=八谷 豬排 咖哩 民族店 嘉義市"
  },
  {
    "name": "初和風精緻咖哩",
    "area": "東區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "和風咖哩，午晚餐皆可。",
    "map": "https://www.google.com/maps/search/?api=1&query=初和風精緻咖哩 嘉義市"
  },
  {
    "name": "香香 煎粿 咖喱飯 專賣店",
    "area": "東區",
    "types": [
      "咖哩",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "早上也吃得到的咖喱飯與煎粿。",
    "map": "https://www.google.com/maps/search/?api=1&query=香香 煎粿 咖喱飯 專賣店 嘉義市"
  },
  {
    "name": "主廚帽印度餐廳 嘉義店",
    "area": "西區",
    "types": [
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "印度餐廳，想吃香料與咖哩時可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=主廚帽印度餐廳 嘉義店 嘉義市"
  },
  {
    "name": "魣鰭 日式料理",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "日式料理，適合想吃壽司、定食、聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=魣鰭 日式料理 嘉義市"
  },
  {
    "name": "穎覓食光日式料理 嘉義店",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "高評價日式餐廳，午晚餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=穎覓食光日式料理 嘉義店 嘉義市"
  },
  {
    "name": "心晴 日式定食專売",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "定食、壽司、丼飯，選擇完整。",
    "map": "https://www.google.com/maps/search/?api=1&query=心晴 日式定食專売 嘉義市"
  },
  {
    "name": "稻荷壽司 鮨割烹 日本料理",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "壽司與日本料理，想吃日式可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=稻荷壽司 鮨割烹 日本料理 嘉義市"
  },
  {
    "name": "旬日本料理",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "正宗日式料理，聚餐可考慮。",
    "map": "https://www.google.com/maps/search/?api=1&query=旬日本料理 嘉義市"
  },
  {
    "name": "大鮪日式料理",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "日式料理，價格中等。",
    "map": "https://www.google.com/maps/search/?api=1&query=大鮪日式料理 嘉義市"
  },
  {
    "name": "藝奇新日本料理 嘉義耐斯松屋店",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.8",
    "desc": "套餐式新日本料理，適合慶祝與聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=藝奇新日本料理 嘉義耐斯松屋店 嘉義市"
  },
  {
    "name": "上海路八璠日式料理",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.8",
    "desc": "高價位日式料理，適合晚餐聚會。",
    "map": "https://www.google.com/maps/search/?api=1&query=上海路八璠日式料理 嘉義市"
  },
  {
    "name": "松築和洋私廚料理",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.1",
    "desc": "和洋私廚料理，適合聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=松築和洋私廚料理 嘉義市"
  },
  {
    "name": "體育館壽司",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "嘉義人氣壽司店，想吃壽司可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=體育館壽司 嘉義市"
  },
  {
    "name": "菊佐樂板前割烹",
    "area": "東區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "板前割烹，適合想吃精緻日式。",
    "map": "https://www.google.com/maps/search/?api=1&query=菊佐樂板前割烹 嘉義市"
  },
  {
    "name": "墨汁壽司",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "壽司與日本菜，適合日式控。",
    "map": "https://www.google.com/maps/search/?api=1&query=墨汁壽司 嘉義市"
  },
  {
    "name": "芋沺商行 & 芋沺菓子",
    "area": "西區",
    "types": [
      "日式",
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "日式菓子與料理，適合想吃特別一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=芋沺商行 & 芋沺菓子 嘉義市"
  },
  {
    "name": "東園軒園林餐廳",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.4",
    "desc": "江浙中式料理，適合家庭與公司聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=東園軒園林餐廳 嘉義市"
  },
  {
    "name": "弄來，小餐桌",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "小餐桌風格，適合朋友吃飯。",
    "map": "https://www.google.com/maps/search/?api=1&query=弄來，小餐桌 嘉義市"
  },
  {
    "name": "巷子裡的小餐館",
    "area": "西區",
    "types": [
      "中式",
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "巷弄人氣餐館，建議先預訂。",
    "map": "https://www.google.com/maps/search/?api=1&query=巷子裡的小餐館 嘉義市"
  },
  {
    "name": "來呷飯 川食堂 嘉義中山店",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "川味料理，想吃飯、吃辣可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=來呷飯 川食堂 嘉義中山店 嘉義市"
  },
  {
    "name": "桃花源餐廳嘉義分店",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.3",
    "desc": "中式聚餐餐廳，適合家庭聚會。",
    "map": "https://www.google.com/maps/search/?api=1&query=桃花源餐廳嘉義分店 嘉義市"
  },
  {
    "name": "鳳凰軒 港式料理",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "港式料理與簡餐，想吃中式可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=鳳凰軒 港式料理 嘉義市"
  },
  {
    "name": "金牌川菜料理",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.2",
    "desc": "四川料理，想吃重口味可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=金牌川菜料理 嘉義市"
  },
  {
    "name": "來呷飯 川食堂 嘉義興業店",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "川食堂分店，飯類與川味料理。",
    "map": "https://www.google.com/maps/search/?api=1&query=來呷飯 川食堂 嘉義興業店 嘉義市"
  },
  {
    "name": "川流不息饌堂",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.3",
    "desc": "中菜館，適合聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=川流不息饌堂 嘉義市"
  },
  {
    "name": "小李子美食料理館",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "台灣菜料理館，想吃合菜可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=小李子美食料理館 嘉義市"
  },
  {
    "name": "漁宸湘府川菜館",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "川菜館，晚餐聚會適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=漁宸湘府川菜館 嘉義市"
  },
  {
    "name": "六之壹複合式餐飲店",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "營業較晚，適合宵夜或晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=六之壹複合式餐飲店 嘉義市"
  },
  {
    "name": "三采田美味廚坊",
    "area": "東區",
    "types": [
      "中式",
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "餐點多元，火鍋與中式都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=三采田美味廚坊 嘉義市"
  },
  {
    "name": "竹居茶樓",
    "area": "東區",
    "types": [
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "3.9",
    "desc": "粵式點心茶樓，聚餐方便。",
    "map": "https://www.google.com/maps/search/?api=1&query=竹居茶樓 嘉義市"
  },
  {
    "name": "慶昇小館",
    "area": "西區",
    "types": [
      "中式",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.0",
    "desc": "平價台灣菜小館，簡單吃飯可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=慶昇小館 嘉義市"
  },
  {
    "name": "木更 MUGN",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義人氣咖啡店，適合下午坐一下。",
    "map": "https://www.google.com/maps/search/?api=1&query=木更 MUGN 嘉義市"
  },
  {
    "name": "Morikoohii 森咖啡",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "舒服咖啡店，約會聊天都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=Morikoohii 森咖啡 嘉義市"
  },
  {
    "name": "HERMIT & Co.",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "成仁街咖啡店，適合拍照與放鬆。",
    "map": "https://www.google.com/maps/search/?api=1&query=HERMIT & Co. 嘉義市"
  },
  {
    "name": "小口品s",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "高評價咖啡甜點，下午茶可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=小口品s 嘉義市"
  },
  {
    "name": "IN COFFEE",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "平價咖啡店，想喝咖啡可骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=IN COFFEE 嘉義市"
  },
  {
    "name": "曉咖啡 In Chiayi",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "午後咖啡選項，適合慢慢坐。",
    "map": "https://www.google.com/maps/search/?api=1&query=曉咖啡 In Chiayi 嘉義市"
  },
  {
    "name": "霜空珈琲",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義特色咖啡店，適合下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=霜空珈琲 嘉義市"
  },
  {
    "name": "荏苒咖啡",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "早上也能去的咖啡店，適合放空。",
    "map": "https://www.google.com/maps/search/?api=1&query=荏苒咖啡 嘉義市"
  },
  {
    "name": "木商珈琲",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "質感咖啡店，適合聊天休息。",
    "map": "https://www.google.com/maps/search/?api=1&query=木商珈琲 嘉義市"
  },
  {
    "name": "秘氏咖啡",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "嘉義特色咖啡，注意公休日。",
    "map": "https://www.google.com/maps/search/?api=1&query=秘氏咖啡 嘉義市"
  },
  {
    "name": "嚮日咖啡 Sunward Coffee",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "下午想喝咖啡放鬆可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=嚮日咖啡 Sunward Coffee 嘉義市"
  },
  {
    "name": "BES coffee",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "國華里咖啡店，適合下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=BES coffee 嘉義市"
  },
  {
    "name": "老窩咖啡 嘉義興雅店",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "咖啡、鬆餅、厚吐司，CP值路線。",
    "map": "https://www.google.com/maps/search/?api=1&query=老窩咖啡 嘉義興雅店 嘉義市"
  },
  {
    "name": "她的咖啡 HER COFFEE",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "營業較晚，晚上也能喝咖啡。",
    "map": "https://www.google.com/maps/search/?api=1&query=她的咖啡 HER COFFEE 嘉義市"
  },
  {
    "name": "昭和J11咖啡館",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "昭和風咖啡館，適合拍照。",
    "map": "https://www.google.com/maps/search/?api=1&query=昭和J11咖啡館 嘉義市"
  },
  {
    "name": "藏.咖啡 嘉義中山店",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "中山路咖啡店，簡單方便。",
    "map": "https://www.google.com/maps/search/?api=1&query=藏.咖啡 嘉義中山店 嘉義市"
  },
  {
    "name": "往前咖啡製作所 Forward roasters",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "咖啡製作所，適合咖啡控。",
    "map": "https://www.google.com/maps/search/?api=1&query=往前咖啡製作所 Forward roasters 嘉義市"
  },
  {
    "name": "スピード Supiido",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "早上就能去的咖啡店。",
    "map": "https://www.google.com/maps/search/?api=1&query=スピード Supiido 嘉義市"
  },
  {
    "name": "仨丘珈琲 Sachuu cafe",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "美源里咖啡店，適合下午休息。",
    "map": "https://www.google.com/maps/search/?api=1&query=仨丘珈琲 Sachuu cafe 嘉義市"
  },
  {
    "name": "COFFEE PANTRY",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點選項，資料可之後再補地址與評分。",
    "map": "https://www.google.com/maps/search/?api=1&query=COFFEE PANTRY 嘉義市"
  },
  {
    "name": "狂一鍋 嘉義博愛店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "台式火鍋與特色湯頭，聚餐熱門。",
    "map": "https://www.google.com/maps/search/?api=1&query=狂一鍋 嘉義博愛店 嘉義市"
  },
  {
    "name": "野川堂秘境鍋物 嘉義店",
    "area": "東區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "秘境鍋物，想吃火鍋很穩。",
    "map": "https://www.google.com/maps/search/?api=1&query=野川堂秘境鍋物 嘉義店 嘉義市"
  },
  {
    "name": "燒瓶子。大肆の鍋 嘉義店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "營業到較晚，宵夜火鍋可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=燒瓶子。大肆の鍋 嘉義店 嘉義市"
  },
  {
    "name": "嗑肉石鍋 嘉義興嘉店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.9",
    "desc": "高人氣石鍋，肉量控可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=嗑肉石鍋 嘉義興嘉店 嘉義市"
  },
  {
    "name": "井賀鍋物 嘉義店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "鍋物選項，午晚餐都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=井賀鍋物 嘉義店 嘉義市"
  },
  {
    "name": "和牛涮 日式鍋物放題 嘉義垂楊店",
    "area": "西區",
    "types": [
      "火鍋",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "日式鍋物放題，想吃好一點可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=和牛涮 日式鍋物放題 嘉義垂楊店 嘉義市"
  },
  {
    "name": "小旬湯 日式涮涮鍋",
    "area": "東區",
    "types": [
      "火鍋",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "日式涮涮鍋，價格較親民。",
    "map": "https://www.google.com/maps/search/?api=1&query=小旬湯 日式涮涮鍋 嘉義市"
  },
  {
    "name": "壹慕 EMU SHABU 鍋物",
    "area": "東區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.8",
    "desc": "質感鍋物，約會聚餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=壹慕 EMU SHABU 鍋物 嘉義市"
  },
  {
    "name": "老丸家 極致鍋物 嘉義店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.8",
    "desc": "高質感火鍋，適合犒賞自己。",
    "map": "https://www.google.com/maps/search/?api=1&query=老丸家 極致鍋物 嘉義店 嘉義市"
  },
  {
    "name": "青花驕麻辣鍋 嘉義中山店",
    "area": "西區",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "麻辣鍋，適合想吃重口味。",
    "map": "https://www.google.com/maps/search/?api=1&query=青花驕麻辣鍋 嘉義中山店 嘉義市"
  },
  {
    "name": "吾將鍋物 嘉義市府店",
    "area": "東區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.9",
    "desc": "高評價鍋物，午晚餐都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=吾將鍋物 嘉義市府店 嘉義市"
  },
  {
    "name": "馨月鍋物",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "鍋物餐廳，適合聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=馨月鍋物 嘉義市"
  },
  {
    "name": "鼎盛十里鍋物嘉義店",
    "area": "東區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "火鍋聚餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=鼎盛十里鍋物嘉義店 嘉義市"
  },
  {
    "name": "伍鼎鍋",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "5.0",
    "desc": "高評分平價火鍋。",
    "map": "https://www.google.com/maps/search/?api=1&query=伍鼎鍋 嘉義市"
  },
  {
    "name": "逸小鍋 鍋の物 嘉義仁愛店",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "小火鍋選項，簡單吃很方便。",
    "map": "https://www.google.com/maps/search/?api=1&query=逸小鍋 鍋の物 嘉義仁愛店 嘉義市"
  },
  {
    "name": "瀧賀鍋物專賣",
    "area": "西區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.9",
    "desc": "鍋物專賣，嘉義火鍋選擇之一。",
    "map": "https://www.google.com/maps/search/?api=1&query=瀧賀鍋物專賣 嘉義市"
  },
  {
    "name": "聚 日式鍋物 嘉義垂楊店",
    "area": "西區",
    "types": [
      "火鍋",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.9",
    "desc": "王品系日式鍋物，穩定聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=聚 日式鍋物 嘉義垂楊店 嘉義市"
  },
  {
    "name": "肉食主義 嘉義店",
    "area": "東區",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "肉食系火鍋，想吃肉可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=肉食主義 嘉義店 嘉義市"
  },
  {
    "name": "約壹鍋",
    "area": "東區",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "平價鍋物，適合日常吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=約壹鍋 嘉義市"
  },
  {
    "name": "億品鍋 嘉義友愛店",
    "area": "西區",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "平價火鍋，友愛路周邊選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=億品鍋 嘉義友愛店 嘉義市"
  },
  {
    "name": "老張麵店",
    "area": "西區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義人氣麵店，日常吃飯很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=老張麵店 嘉義市"
  },
  {
    "name": "林聰明沙鍋魚頭",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "嘉義代表性名店，想吃觀光級嘉義味就它。",
    "map": "https://www.google.com/maps/search/?api=1&query=林聰明沙鍋魚頭 嘉義市"
  },
  {
    "name": "北回水晶餃",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "水晶餃名店，外帶小吃很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=北回水晶餃 嘉義市"
  },
  {
    "name": "檜町火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義必吃火雞肉飯選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=檜町火雞肉飯 嘉義市"
  },
  {
    "name": "民主火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "嘉義火雞肉飯熱門名店。",
    "map": "https://www.google.com/maps/search/?api=1&query=民主火雞肉飯 嘉義市"
  },
  {
    "name": "阿岸米糕 元創店",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "文化路米糕，晚餐小吃好選擇。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿岸米糕 元創店 嘉義市"
  },
  {
    "name": "阿婆烤玉米",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "嘉義烤玉米名店，嘴饞可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿婆烤玉米 嘉義市"
  },
  {
    "name": "阿忠師手切滷肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "滷肉飯小吃，簡單飽足。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿忠師手切滷肉飯 嘉義市"
  },
  {
    "name": "阿波鴨肉麵",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "鴨肉麵，嘉義小吃經典。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿波鴨肉麵 嘉義市"
  },
  {
    "name": "阿富網絲肉捲",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "早上就能吃的網絲肉捲。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿富網絲肉捲 嘉義市"
  },
  {
    "name": "阿岸米糕 阿彰的店",
    "area": "西區",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "米糕選項，簡單又有嘉義味。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿岸米糕 阿彰的店 嘉義市"
  },
  {
    "name": "崇文錦魯麵",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "嘉義特色錦魯麵，想吃傳統味可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=崇文錦魯麵 嘉義市"
  },
  {
    "name": "黃記涼麵涼圓",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "涼麵涼圓，熱天很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=黃記涼麵涼圓 嘉義市"
  },
  {
    "name": "阿樓師火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "晚上想吃火雞肉飯可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿樓師火雞肉飯 嘉義市"
  },
  {
    "name": "西市魯熟肉",
    "area": "西區",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "西市場小吃，想吃在地味可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=西市魯熟肉 嘉義市"
  },
  {
    "name": "鮮御快車",
    "area": "東區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "晚間雞湯與平價美食，宵夜可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=鮮御快車 嘉義市"
  },
  {
    "name": "飯丸屋 嘉義店",
    "area": "東區",
    "types": [
      "小吃",
      "日式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "飯糰小吃，適合早餐午餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=飯丸屋 嘉義店 嘉義市"
  },
  {
    "name": "Second Floor 貳樓嘉義秀泰店",
    "area": "西區",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "美式早午餐與餐點，秀泰附近好選擇。",
    "map": "https://www.google.com/maps/search/?api=1&query=Second Floor 貳樓嘉義秀泰店 嘉義市"
  },
  {
    "name": "樂閣",
    "area": "東區",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "美式餐點，想吃漢堡類可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=樂閣 嘉義市"
  },
  {
    "name": "花淺蔥 Brunch Osteria",
    "area": "西區",
    "types": [
      "美式",
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "早午餐與輕食，適合白天約會。",
    "map": "https://www.google.com/maps/search/?api=1&query=花淺蔥 Brunch Osteria 嘉義市"
  },
  {
    "name": "卡加利美式餐廳",
    "area": "西區",
    "types": [
      "美式"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "晚上營業的美式餐廳。",
    "map": "https://www.google.com/maps/search/?api=1&query=卡加利美式餐廳 嘉義市"
  },
  {
    "name": "廢溫室 Greenhouse café",
    "area": "東區",
    "types": [
      "美式",
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "餐點多元，咖啡廳與美式混合感。",
    "map": "https://www.google.com/maps/search/?api=1&query=廢溫室 Greenhouse café 嘉義市"
  },
  {
    "name": "Smokin' BBQ 德州燒烤在嘉義",
    "area": "東區",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "德州燒烤，想吃美式肉類可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=Smokin' BBQ 德州燒烤在嘉義 嘉義市"
  },
  {
    "name": "加敦街 Garden Street 牛排",
    "area": "東區",
    "types": [
      "美式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.4",
    "desc": "牛排餐廳，適合晚餐想吃肉。",
    "map": "https://www.google.com/maps/search/?api=1&query=加敦街 Garden Street 牛排 嘉義市"
  },
  {
    "name": "荳荳小籠湯包",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "早餐湯包選項，適合早上不知道吃什麼。",
    "map": "https://www.google.com/maps/search/?api=1&query=荳荳小籠湯包 嘉義市"
  },
  {
    "name": "永春京站湯包",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "湯包類人氣選項，早餐午餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=永春京站湯包 嘉義市"
  },
  {
    "name": "早餐好樂 和平店",
    "area": "東區",
    "types": [
      "早餐",
      "早午餐"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "嘉義早餐店，適合早上快速決定。",
    "map": "https://www.google.com/maps/search/?api=1&query=早餐好樂 和平店 嘉義市"
  },
  {
    "name": "美麗春天",
    "area": "嘉義市",
    "types": [
      "早餐",
      "早午餐"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "早餐與早午餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=美麗春天 嘉義市"
  },
  {
    "name": "土佐",
    "area": "嘉義市",
    "types": [
      "早餐",
      "早午餐"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "早午餐推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=土佐 嘉義市"
  },
  {
    "name": "孫記早餐",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "在地早餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=孫記早餐 嘉義市"
  },
  {
    "name": "才記酥餅",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "酥餅小吃，適合早餐或點心。",
    "map": "https://www.google.com/maps/search/?api=1&query=才記酥餅 嘉義市"
  },
  {
    "name": "樂樂碗粿",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "碗粿小吃，早餐午餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=樂樂碗粿 嘉義市"
  },
  {
    "name": "嘉義公園古早味麵食",
    "area": "東區",
    "types": [
      "早餐",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "古早味麵食，嘉義公園周邊選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義公園古早味麵食 嘉義市"
  },
  {
    "name": "山腳甜食",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "蘭井街甜點店，適合下午茶、約會與飯後甜點。",
    "map": "https://www.google.com/maps/search/?api=1&query=山腳甜食 嘉義市"
  },
  {
    "name": "弓箭手",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點推薦，適合下午放鬆。",
    "map": "https://www.google.com/maps/search/?api=1&query=弓箭手 嘉義市"
  },
  {
    "name": "起風",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=起風 嘉義市"
  },
  {
    "name": "C'EST C'EST 法式甜點",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "法式甜點，適合約會與下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=C'EST C'EST 法式甜點 嘉義市"
  },
  {
    "name": "小紅帽冰淇淋專門店",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "冰淇淋甜點，熱天或飯後很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=小紅帽冰淇淋專門店 嘉義市"
  },
  {
    "name": "胡椒餅專賣店 和平路",
    "area": "東區",
    "types": [
      "小吃",
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "和平路胡椒餅，嘴饞點心選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=胡椒餅專賣店 和平路 嘉義市"
  },
  {
    "name": "穀谷",
    "area": "東區",
    "types": [
      "中式",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義人氣餐館，適合午晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=穀谷 嘉義市"
  },
  {
    "name": "泰老饕",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "泰式料理，想換口味可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=泰老饕 嘉義市"
  },
  {
    "name": "小麵店",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "簡單麵食小吃，日常吃飯適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=小麵店 嘉義市"
  },
  {
    "name": "玉映越南河粉",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "越南河粉，想吃清爽異國料理可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=玉映越南河粉 嘉義市"
  },
  {
    "name": "南北越南小吃",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "越式小吃，午晚餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=南北越南小吃 嘉義市"
  },
  {
    "name": "三禾雞肉飯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "嘉義雞肉飯選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=三禾雞肉飯 嘉義市"
  },
  {
    "name": "津川麵食館",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "麵食館，日常午晚餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=津川麵食館 嘉義市"
  },
  {
    "name": "Just Makan 星馬小館",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "星馬料理，想吃南洋風味可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=Just Makan 星馬小館 嘉義市"
  },
  {
    "name": "Fusion 印度餐廳",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "印度料理與咖哩，適合想吃香料。",
    "map": "https://www.google.com/maps/search/?api=1&query=Fusion 印度餐廳 嘉義市"
  },
  {
    "name": "碳少年",
    "area": "嘉義市",
    "types": [
      "燒烤",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "燒烤聚餐選項，晚上不知道吃什麼可骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=碳少年 嘉義市"
  },
  {
    "name": "秘醬滷味",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "滷味宵夜，晚上嘴饞適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=秘醬滷味 嘉義市"
  },
  {
    "name": "楊記水餃",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "水餃小吃，日常吃飯好選。",
    "map": "https://www.google.com/maps/search/?api=1&query=楊記水餃 嘉義市"
  },
  {
    "name": "大眾川味麵食館",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "川味麵食館，想吃麵可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=大眾川味麵食館 嘉義市"
  },
  {
    "name": "元生補湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "補湯小吃，想喝熱湯可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=元生補湯 嘉義市"
  },
  {
    "name": "體育館海鮮碳烤",
    "area": "東區",
    "types": [
      "燒烤",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "海鮮碳烤，適合晚上聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=體育館海鮮碳烤 嘉義市"
  },
  {
    "name": "竹香園",
    "area": "嘉義市",
    "types": [
      "中式",
      "聚餐"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "聚餐型餐廳，適合多人吃飯。",
    "map": "https://www.google.com/maps/search/?api=1&query=竹香園 嘉義市"
  },
  {
    "name": "米宜豆乳雞",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "豆乳雞宵夜選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=米宜豆乳雞 嘉義市"
  },
  {
    "name": "一涼製冰所",
    "area": "嘉義市",
    "types": [
      "咖啡甜點",
      "宵夜"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "冰品甜點，飯後與宵夜都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=一涼製冰所 嘉義市"
  },
  {
    "name": "來來鹽酥雞",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "經典鹽酥雞宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=來來鹽酥雞 嘉義市"
  },
  {
    "name": "大胖林福州麵",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "福州麵小吃，午晚餐適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=大胖林福州麵 嘉義市"
  },
  {
    "name": "西市鱔魚麵 長榮街",
    "area": "西區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "鱔魚麵小吃，嘉義麵食選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=西市鱔魚麵 長榮街 嘉義市"
  },
  {
    "name": "吳記排骨酥 國華街",
    "area": "西區",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "排骨酥小吃，國華街周邊選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=吳記排骨酥 國華街 嘉義市"
  },
  {
    "name": "金馬肉粥",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "肉粥小吃，早餐午餐適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=金馬肉粥 嘉義市"
  },
  {
    "name": "北興肉包",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "肉包早餐與點心選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=北興肉包 嘉義市"
  },
  {
    "name": "548特製意麵四神湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "意麵與四神湯，平價小吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=548特製意麵四神湯 嘉義市"
  },
  {
    "name": "茂生壽司屋",
    "area": "嘉義市",
    "types": [
      "日式",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "壽司小吃，想吃日式可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=茂生壽司屋 嘉義市"
  },
  {
    "name": "鐵道羊肉 北興街橋下羊肉攤",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "羊肉攤，晚餐宵夜適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=鐵道羊肉 北興街橋下羊肉攤 嘉義市"
  },
  {
    "name": "意麵燻茶鵝",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "意麵與燻茶鵝小吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=意麵燻茶鵝 嘉義市"
  },
  {
    "name": "阿忠牛肉湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式",
      "宵夜"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "牛肉湯，午晚餐與宵夜都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿忠牛肉湯 嘉義市"
  },
  {
    "name": "公明路切仔麵",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "切仔麵小吃，嘉義在地味。",
    "map": "https://www.google.com/maps/search/?api=1&query=公明路切仔麵 嘉義市"
  },
  {
    "name": "阿宏炒米苔目",
    "area": "西區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "國華街50多年老店，回頭客很多。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿宏炒米苔目 嘉義市"
  },
  {
    "name": "COP bar-Cocktails Of Pioneers",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "西門街酒吧，適合下班小酌與約會。",
    "map": "https://www.google.com/maps/search/?api=1&query=COP bar-Cocktails Of Pioneers 嘉義市"
  },
  {
    "name": "Bar Door to Dream",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "西榮街酒吧，適合晚上小酌。",
    "map": "https://www.google.com/maps/search/?api=1&query=Bar Door to Dream 嘉義市"
  },
  {
    "name": "CASA",
    "area": "東區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "光彩街酒吧，約會與朋友聚會都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=CASA 嘉義市"
  },
  {
    "name": "Bar SKITZ 過門",
    "area": "東區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "民權路酒吧，夜晚小酌選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=Bar SKITZ 過門 嘉義市"
  },
  {
    "name": "秉森酒室",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "林森西路酒室，適合放鬆喝一杯。",
    "map": "https://www.google.com/maps/search/?api=1&query=秉森酒室 嘉義市"
  },
  {
    "name": "斗酒",
    "area": "東區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "成仁街酒吧，嘉義夜晚選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=斗酒 嘉義市"
  },
  {
    "name": "誠侍酒吧",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "國華街酒吧，適合小酌。",
    "map": "https://www.google.com/maps/search/?api=1&query=誠侍酒吧 嘉義市"
  },
  {
    "name": "HOT Hi-end Of Tiki",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "Tiki風格酒吧，適合想喝特別一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=HOT Hi-end Of Tiki 嘉義市"
  },
  {
    "name": "O'my bar",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "國華街酒吧，晚上聚會可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=O'my bar 嘉義市"
  },
  {
    "name": "BLACK i 黑眼圈",
    "area": "西區",
    "types": [
      "酒吧",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "大同路 Live & Lounge，適合夜生活。",
    "map": "https://www.google.com/maps/search/?api=1&query=BLACK i 黑眼圈 嘉義市"
  },
  {
    "name": "米半",
    "area": "嘉義市",
    "types": [
      "義式",
      "早午餐"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "假日建議提前排隊或訂位的人氣店。",
    "map": "https://www.google.com/maps/search/?api=1&query=米半 嘉義市"
  },
  {
    "name": "小洋蔥",
    "area": "嘉義市",
    "types": [
      "義式",
      "早午餐"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "網友大推愛店，義式與早午餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=小洋蔥 嘉義市"
  },
  {
    "name": "岬島",
    "area": "嘉義市",
    "types": [
      "義式",
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "有捲捲麵，也推薦明太子干貝奶油義大利麵。",
    "map": "https://www.google.com/maps/search/?api=1&query=岬島 嘉義市"
  },
  {
    "name": "山越拉麵",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "濃郁系拉麵，拉麵控可試。",
    "map": "https://www.google.com/maps/search/?api=1&query=山越拉麵 嘉義市"
  }
];
