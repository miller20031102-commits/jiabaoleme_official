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
    "map": "https://www.google.com/maps/search/?api=1&query=丸京燒肉 割烹專門店 Marukyo yakiniku 嘉義垂楊店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=藤燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=肉次方 燒肉放題 嘉義中山店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=八攻燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=野村燒肉 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
  },
  {
    "name": "無為燒肉",
    "area": "東區",
    "types": [
      "燒肉",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "特色燒肉餐廳，適合晚餐聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=無為燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=原燒 日式燒肉 沙拉烤物放題 嘉義耐斯店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉Smile 嘉義秀泰店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=原饌日式無煙燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=壹心燒肉 嘉義本店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=野赤燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉觀止 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=好客燒肉 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=森崎燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=路易奇電力公司 嘉義日式燒肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=燒肉眾精緻炭火燒肉 嘉義民生店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=色鼎石頭燒肉 嘉義旗艦店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=好好家慢熟咖哩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩"
    ]
  },
  {
    "name": "舊時光新鮮事 老屋咖哩專賣",
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
    "desc": "老屋咖哩氛圍，適合約會與朋友吃飯。",
    "map": "https://www.google.com/maps/search/?api=1&query=舊時光新鮮事 老屋咖哩專賣 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "寵物友善",
      "文化路美食",
      "火車站美食"
    ]
  },
  {
    "name": "大人味 日印咖喱",
    "area": "東區",
    "types": [
      "咖哩",
      "日式",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "日式與印度咖哩風格，選擇不無聊。",
    "map": "https://www.google.com/maps/search/?api=1&query=大人味 日印咖喱 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "咖喱"
    ]
  },
  {
    "name": "國王的菜 印度餐廳",
    "area": "西區",
    "types": [
      "咖哩",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "印度料理與咖哩，想換口味很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=國王的菜 印度餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "印度料理"
    ]
  },
  {
    "name": "盛食咖哩店 嘉義店",
    "area": "西區",
    "types": [
      "咖哩",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義咖哩熱門選項，午晚餐都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=盛食咖哩店 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=白梗咖哩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=胖卡咖哩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩",
      "定食"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=初·仨食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩",
      "炸豬排"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=丸野 丼咖喱定食專門店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩",
      "咖喱",
      "定食"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=八谷 豬排 咖哩 民族店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩",
      "豬排"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=初和風精緻咖哩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "咖哩"
    ]
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
      "午餐",
      "早餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "早上也吃得到的咖喱飯與煎粿。",
    "map": "https://www.google.com/maps/search/?api=1&query=香香 煎粿 咖喱飯 專賣店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "咖喱",
      "早餐"
    ]
  },
  {
    "name": "主廚帽印度餐廳 嘉義店",
    "area": "西區",
    "types": [
      "咖哩",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "印度餐廳，想吃香料與咖哩時可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=主廚帽印度餐廳 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "印度料理"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=魣鰭 日式料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=穎覓食光日式料理 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=心晴 日式定食專売 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=稻荷壽司 鮨割烹 日本料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=旬日本料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=大鮪日式料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=藝奇新日本料理 嘉義耐斯松屋店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=上海路八璠日式料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=松築和洋私廚料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=體育館壽司 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=菊佐樂板前割烹 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=墨汁壽司 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
      "午餐",
      "下午茶"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "日式菓子與料理，適合想吃特別一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=芋沺商行 & 芋沺菓子 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=東園軒園林餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=弄來，小餐桌 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "巷子裡的小餐館",
    "area": "西區",
    "types": [
      "中式",
      "美式",
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "巷弄人氣餐館，建議先預訂，也歸入咖哩分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=巷子裡的小餐館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "建議預訂"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=來呷飯 川食堂 嘉義中山店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=桃花源餐廳嘉義分店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=鳳凰軒 港式料理 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=金牌川菜料理 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=來呷飯 川食堂 嘉義興業店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=川流不息饌堂 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=小李子美食料理館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=漁宸湘府川菜館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "六之壹複合式餐飲店",
    "area": "西區",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "營業較晚，適合宵夜或晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=六之壹複合式餐飲店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=三采田美味廚坊 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=竹居茶樓 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=慶昇小館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "木更 MUGN",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義人氣咖啡店，適合下午坐一下。",
    "map": "https://www.google.com/maps/search/?api=1&query=木更 MUGN 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "舒服咖啡店，約會聊天都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=Morikoohii 森咖啡 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "HERMIT & Co.",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "成仁街咖啡店，適合拍照與放鬆。",
    "map": "https://www.google.com/maps/search/?api=1&query=HERMIT & Co. 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "小口品s",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "高評價咖啡甜點，下午茶可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=小口品s 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "IN COFFEE",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "平價咖啡店，想喝咖啡可骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=IN COFFEE 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "曉咖啡 In Chiayi",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "午後咖啡選項，適合慢慢坐。",
    "map": "https://www.google.com/maps/search/?api=1&query=曉咖啡 In Chiayi 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "霜空珈琲",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義特色咖啡店，適合下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=霜空珈琲 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "早上也能去的咖啡店，適合放空。",
    "map": "https://www.google.com/maps/search/?api=1&query=荏苒咖啡 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "木商珈琲",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "質感咖啡店，適合聊天休息。",
    "map": "https://www.google.com/maps/search/?api=1&query=木商珈琲 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "秘氏咖啡",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "嘉義特色咖啡，注意公休日。",
    "map": "https://www.google.com/maps/search/?api=1&query=秘氏咖啡 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "嚮日咖啡 Sunward Coffee",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "下午想喝咖啡放鬆可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=嚮日咖啡 Sunward Coffee 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "BES coffee",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "國華里咖啡店，適合下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=BES coffee 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "咖啡、鬆餅、厚吐司，CP值路線。",
    "map": "https://www.google.com/maps/search/?api=1&query=老窩咖啡 嘉義興雅店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "營業較晚，晚上也能喝咖啡。",
    "map": "https://www.google.com/maps/search/?api=1&query=她的咖啡 HER COFFEE 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "昭和風咖啡館，適合拍照。",
    "map": "https://www.google.com/maps/search/?api=1&query=昭和J11咖啡館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "中山路咖啡店，簡單方便。",
    "map": "https://www.google.com/maps/search/?api=1&query=藏.咖啡 嘉義中山店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "咖啡製作所，適合咖啡控。",
    "map": "https://www.google.com/maps/search/?api=1&query=往前咖啡製作所 Forward roasters 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "スピード Supiido",
    "area": "東區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "早上就能去的咖啡店。",
    "map": "https://www.google.com/maps/search/?api=1&query=スピード Supiido 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "美源里咖啡店，適合下午休息。",
    "map": "https://www.google.com/maps/search/?api=1&query=仨丘珈琲 Sachuu cafe 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "COFFEE PANTRY",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點選項，資料可之後再補地址與評分。",
    "map": "https://www.google.com/maps/search/?api=1&query=COFFEE PANTRY 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=狂一鍋 嘉義博愛店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=野川堂秘境鍋物 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
  },
  {
    "name": "燒瓶子。大肆の鍋 嘉義店",
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
    "desc": "營業到較晚，宵夜火鍋可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=燒瓶子。大肆の鍋 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=嗑肉石鍋 嘉義興嘉店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=井賀鍋物 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=和牛涮 日式鍋物放題 嘉義垂楊店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=小旬湯 日式涮涮鍋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=壹慕 EMU SHABU 鍋物 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=老丸家 極致鍋物 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "麻辣鍋，適合想吃重口味。",
    "map": "https://www.google.com/maps/search/?api=1&query=青花驕麻辣鍋 嘉義中山店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=吾將鍋物 嘉義市府店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=馨月鍋物 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=鼎盛十里鍋物嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=伍鼎鍋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=逸小鍋 鍋の物 嘉義仁愛店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=瀧賀鍋物專賣 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=聚 日式鍋物 嘉義垂楊店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=肉食主義 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=約壹鍋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=億品鍋 嘉義友愛店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=老張麵店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "林聰明沙鍋魚頭",
    "area": "東區",
    "types": [
      "小吃",
      "中式",
      "雞肉飯"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "嘉義代表性名店，想吃觀光級嘉義味就它。",
    "map": "https://www.google.com/maps/search/?api=1&query=林聰明沙鍋魚頭 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式",
      "嘉義名店",
      "隱藏版雞肉飯"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=北回水晶餃 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "檜町火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式",
      "雞肉飯"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義必吃火雞肉飯選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=檜町火雞肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式"
    ]
  },
  {
    "name": "民主火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式",
      "雞肉飯"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "嘉義火雞肉飯熱門名店。",
    "map": "https://www.google.com/maps/search/?api=1&query=民主火雞肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿岸米糕 元創店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿婆烤玉米 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿忠師手切滷肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿波鴨肉麵 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿富網絲肉捲 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿岸米糕 阿彰的店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=崇文錦魯麵 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=黃記涼麵涼圓 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "阿樓師火雞肉飯",
    "area": "東區",
    "types": [
      "小吃",
      "中式",
      "雞肉飯"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "晚上想吃火雞肉飯可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿樓師火雞肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=西市魯熟肉 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=鮮御快車 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=飯丸屋 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
  },
  {
    "name": "Second Floor 貳樓嘉義秀泰店",
    "area": "西區",
    "types": [
      "美式",
      "早餐"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "美式早午餐與餐點，秀泰附近好選擇。",
    "map": "https://www.google.com/maps/search/?api=1&query=Second Floor 貳樓嘉義秀泰店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=樂閣 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
      "午餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "早午餐與輕食，適合白天約會。",
    "map": "https://www.google.com/maps/search/?api=1&query=花淺蔥 Brunch Osteria 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "卡加利美式餐廳",
    "area": "西區",
    "types": [
      "美式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "晚上營業的美式餐廳。",
    "map": "https://www.google.com/maps/search/?api=1&query=卡加利美式餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "餐點多元，咖啡廳與美式混合感。",
    "map": "https://www.google.com/maps/search/?api=1&query=廢溫室 Greenhouse café 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=Smokin' BBQ 德州燒烤在嘉義 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=加敦街 Garden Street 牛排 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "荳荳小籠湯包",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "早餐湯包選項，適合早上不知道吃什麼。",
    "map": "https://www.google.com/maps/search/?api=1&query=荳荳小籠湯包 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "永春京站湯包",
    "area": "嘉義市",
    "types": [
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
    "map": "https://www.google.com/maps/search/?api=1&query=永春京站湯包 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "桔吉力早餐",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "嘉義仁愛路人氣早餐／早午餐，常被打成吉吉利；適合想吃吐司、拼盤、鮮奶茶的早上。",
    "map": "https://www.google.com/maps/search/?api=1&query=桔吉力早餐 嘉義市西區仁愛路",
    "tags": [
      "嘉義脆友推薦",
      "嘉義人從小吃到大",
      "早餐模式",
      "吉吉利"
    ]
  },
  {
    "name": "早餐好樂 和平店",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "嘉義早餐店，適合早上快速決定。",
    "map": "https://www.google.com/maps/search/?api=1&query=早餐好樂 和平店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "美麗春天",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "早餐與早午餐選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=美麗春天 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "土佐",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "早午餐推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=土佐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=孫記早餐 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "才記酥餅",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "酥餅小吃，適合早餐或點心。",
    "map": "https://www.google.com/maps/search/?api=1&query=才記酥餅 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "樂樂碗粿",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "碗粿小吃，早餐午餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=樂樂碗粿 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "嘉義公園古早味麵食",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "古早味麵食，嘉義公園周邊選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義公園古早味麵食 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "山腳甜食",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "蘭井街甜點店，適合下午茶、約會與飯後甜點。",
    "map": "https://www.google.com/maps/search/?api=1&query=山腳甜食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "弓箭手",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點推薦，適合下午放鬆。",
    "map": "https://www.google.com/maps/search/?api=1&query=弓箭手 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "起風",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "咖啡甜點推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=起風 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "C'EST C'EST 法式甜點",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "法式甜點，適合約會與下午茶。",
    "map": "https://www.google.com/maps/search/?api=1&query=C'EST C'EST 法式甜點 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "冰淇淋甜點，熱天或飯後很適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=小紅帽冰淇淋專門店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "和平路胡椒餅，嘴饞點心選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=胡椒餅專賣店 和平路 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "穀谷",
    "area": "東區",
    "types": [
      "中式",
      "小吃",
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義人氣餐館，適合午晚餐，也歸入咖哩分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=穀谷 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=泰老饕 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=小麵店 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=玉映越南河粉 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=南北越南小吃 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=津川麵食館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=Just Makan 星馬小館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=Fusion 印度餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩"
    ]
  },
  {
    "name": "碳少年",
    "area": "嘉義市",
    "types": [
      "燒烤"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "燒烤聚餐選項，晚上不知道吃什麼可骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=碳少年 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "秘醬滷味",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "滷味宵夜，晚上嘴饞適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=秘醬滷味 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=楊記水餃 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=大眾川味麵食館 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=元生補湯 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "體育館海鮮碳烤",
    "area": "東區",
    "types": [
      "燒烤"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "海鮮碳烤，適合晚上聚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=體育館海鮮碳烤 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "竹香園",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "聚餐型餐廳，適合多人吃飯。",
    "map": "https://www.google.com/maps/search/?api=1&query=竹香園 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "米宜豆乳雞",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "豆乳雞宵夜選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=米宜豆乳雞 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "一涼製冰所",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "冰品甜點，飯後與宵夜都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=一涼製冰所 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "約會可選"
    ]
  },
  {
    "name": "來來鹽酥雞",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "經典鹽酥雞宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=來來鹽酥雞 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=大胖林福州麵 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=西市鱔魚麵 長榮街 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=吳記排骨酥 國華街 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "金馬肉粥",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式",
      "宵夜"
    ],
    "times": [
      "早午餐",
      "午餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "肉粥小吃，早餐午餐適合，也適合宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=金馬肉粥 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "宵夜模式"
    ]
  },
  {
    "name": "北興肉包",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "肉包早餐與點心選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=北興肉包 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=548特製意麵四神湯 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=茂生壽司屋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
  },
  {
    "name": "鐵道羊肉 北興街橋下羊肉攤",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "羊肉攤，晚餐宵夜適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=鐵道羊肉 北興街橋下羊肉攤 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=意麵燻茶鵝 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "阿忠牛肉湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "牛肉湯，午晚餐與宵夜都可。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿忠牛肉湯 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=公明路切仔麵 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=阿宏炒米苔目 嘉義市",
    "tags": [
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "COP bar-Cocktails Of Pioneers",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "西門街酒吧，適合下班小酌與約會。",
    "map": "https://www.google.com/maps/search/?api=1&query=COP bar-Cocktails Of Pioneers 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "Bar Door to Dream",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "西榮街酒吧，適合晚上小酌。",
    "map": "https://www.google.com/maps/search/?api=1&query=Bar Door to Dream 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "CASA",
    "area": "東區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "光彩街酒吧，約會與朋友聚會都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=CASA 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "Bar SKITZ 過門",
    "area": "東區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "民權路酒吧，夜晚小酌選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=Bar SKITZ 過門 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "秉森酒室",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "林森西路酒室，適合放鬆喝一杯。",
    "map": "https://www.google.com/maps/search/?api=1&query=秉森酒室 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "斗酒",
    "area": "東區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "成仁街酒吧，嘉義夜晚選項。",
    "map": "https://www.google.com/maps/search/?api=1&query=斗酒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "誠侍酒吧",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "國華街酒吧，適合小酌。",
    "map": "https://www.google.com/maps/search/?api=1&query=誠侍酒吧 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "HOT Hi-end Of Tiki",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "Tiki風格酒吧，適合想喝特別一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=HOT Hi-end Of Tiki 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "O'my bar",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "國華街酒吧，晚上聚會可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=O'my bar 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "BLACK i 黑眼圈",
    "area": "西區",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "—",
    "desc": "大同路 Live & Lounge，適合夜生活。",
    "map": "https://www.google.com/maps/search/?api=1&query=BLACK i 黑眼圈 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "米半",
    "area": "嘉義市",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "假日建議提前排隊或訂位的人氣店。",
    "map": "https://www.google.com/maps/search/?api=1&query=米半 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "小洋蔥",
    "area": "嘉義市",
    "types": [
      "義式",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "網友大推愛店，義式與早午餐都適合。",
    "map": "https://www.google.com/maps/search/?api=1&query=小洋蔥 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "約會可選"
    ]
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
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "—",
    "desc": "有捲捲麵，也推薦明太子干貝奶油義大利麵。",
    "map": "https://www.google.com/maps/search/?api=1&query=岬島 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
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
    "map": "https://www.google.com/maps/search/?api=1&query=山越拉麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐"
    ]
  },
  {
    "name": "無名碗粿",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "無名碗粿，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=無名碗粿 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "鹿港施蛋餅",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "鹿港施蛋餅，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=鹿港施蛋餅 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "無名米糕",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "無名米糕，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=無名米糕 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "小自由廚房",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "小自由廚房，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=小自由廚房 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "王家牛雜湯",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "王家牛雜湯，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=王家牛雜湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿娥手作蛋餅",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "阿娥手作蛋餅，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿娥手作蛋餅 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "丸仔榮小吃店",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "丸仔榮小吃店，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=丸仔榮小吃店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿吉鱔魚麵",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "阿吉鱔魚麵，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿吉鱔魚麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "樂檸漢堡",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "樂檸漢堡，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=樂檸漢堡 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "軍輝路小籠包",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "軍輝路小籠包，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=軍輝路小籠包 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "蔡氏鴨庄",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "蔡氏鴨庄，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=蔡氏鴨庄 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "清豐濤月",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "清豐濤月，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=清豐濤月 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "1961海鮮炭烤",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "1961海鮮炭烤，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=1961海鮮炭烤 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "打貓冰菓室",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "打貓冰菓室，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=打貓冰菓室 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿娥豆花",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "阿娥豆花，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿娥豆花 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "一銀仙草",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "一銀仙草，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=一銀仙草 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "純情轉賣所",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "純情轉賣所，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=純情轉賣所 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "巴倫司康",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "巴倫司康，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=巴倫司康 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "映月橋老師傅",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "映月橋老師傅，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=映月橋老師傅 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "龍喜嗲",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "龍喜嗲，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=龍喜嗲 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "榮興茶行",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "榮興茶行，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=榮興茶行 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉義新莊紅茶",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "嘉義新莊紅茶，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義新莊紅茶 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "健康鮮果屋",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "健康鮮果屋，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=健康鮮果屋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "興加臭豆腐",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "興加臭豆腐，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=興加臭豆腐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "珍珍",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "珍珍，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=珍珍 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "炒螺肉",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "炒螺肉，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=炒螺肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿賢割包",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "阿賢割包，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿賢割包 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "赫赫麵店",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "—",
    "desc": "赫赫麵店，嘉義在地推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=赫赫麵店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "飛魚・魚雁商號碳烤吐司專賣店",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "飛魚・魚雁商號碳烤吐司專賣店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=飛魚・魚雁商號碳烤吐司專賣店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "春町日本料理嘉義總店",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.2",
    "desc": "春町日本料理嘉義總店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=春町日本料理嘉義總店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "慢慢吃火鍋 MANMANCHI HOT POT",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "慢慢吃火鍋 MANMANCHI HOT POT，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=慢慢吃火鍋 MANMANCHI HOT POT 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "烏司答土耳其居家香料料理",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "烏司答土耳其居家香料料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=烏司答土耳其居家香料料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "巫迦泰式風味 民族店",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "巫迦泰式風味 民族店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=巫迦泰式風味 民族店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉義皇家豆花",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "嘉義皇家豆花，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義皇家豆花 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "澄澄 Kitchen & Market",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "澄澄 Kitchen & Market，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=澄澄 Kitchen & Market 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "北港阿財紅燒牛肉麵 嘉義店",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "北港阿財紅燒牛肉麵 嘉義店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=北港阿財紅燒牛肉麵 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "飯漁民食堂",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "飯漁民食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=飯漁民食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "糧鎮食堂",
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
    "rating": "4.8",
    "desc": "糧鎮食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=糧鎮食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "呷泡麵 24H無人拉麵店 向榮店",
    "area": "嘉義市",
    "types": [
      "小吃",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "5.0",
    "desc": "呷泡麵 24H無人拉麵店 向榮店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=呷泡麵 24H無人拉麵店 向榮店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "越南烤雞王 嘉義店",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "燒烤"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.9",
    "desc": "越南烤雞王 嘉義店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=越南烤雞王 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "屋寶德式料理 Hausschätze German Kitchen",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "5.0",
    "desc": "屋寶德式料理 Hausschätze German Kitchen，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=屋寶德式料理 Hausschätze German Kitchen 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "八八鹿餐館",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "八八鹿餐館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=八八鹿餐館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "瑠璃和洋食",
    "area": "嘉義市",
    "types": [
      "日式",
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "瑠璃和洋食，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=瑠璃和洋食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "三木食所 SANMU",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "5.0",
    "desc": "三木食所 SANMU，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=三木食所 SANMU 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "笨起司餐館",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "笨起司餐館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=笨起司餐館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "北興老牌魯熟肉",
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
    "rating": "4.0",
    "desc": "北興老牌魯熟肉，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=北興老牌魯熟肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "福州傻瓜意麵",
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
    "rating": "4.2",
    "desc": "福州傻瓜意麵，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=福州傻瓜意麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "王家祖傳本產牛雜湯",
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
    "rating": "4.2",
    "desc": "王家祖傳本產牛雜湯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=王家祖傳本產牛雜湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "Nose man 鼻孔先生手作早午餐",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "Nose man 鼻孔先生手作早午餐，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=Nose man 鼻孔先生手作早午餐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "好吃又香阿婆滷味",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "好吃又香阿婆滷味，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=好吃又香阿婆滷味 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "叉里包",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "叉里包，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=叉里包 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "越南世家",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "越南世家，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=越南世家 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉義南京羊肉爐",
    "area": "嘉義市",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "嘉義南京羊肉爐，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義南京羊肉爐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "益王當歸羊肉生炒羊肉",
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
    "rating": "3.4",
    "desc": "益王當歸羊肉生炒羊肉，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=益王當歸羊肉生炒羊肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "洪牛土產牛肉湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "洪牛土產牛肉湯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=洪牛土產牛肉湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "東方葉全牛料理",
    "area": "嘉義市",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "東方葉全牛料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=東方葉全牛料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "小成都川菜小館",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "小成都川菜小館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=小成都川菜小館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "瀟湘園湘菜館",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "瀟湘園湘菜館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=瀟湘園湘菜館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "楓味屋拉麵 軍輝店",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "楓味屋拉麵 軍輝店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=楓味屋拉麵 軍輝店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "料理絕配",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "料理絕配，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=料理絕配 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "阿宏海產熱炒",
    "area": "嘉義市",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.2",
    "desc": "阿宏海產熱炒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿宏海產熱炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "簡單一下",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "3.7",
    "desc": "簡單一下，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=簡單一下 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "發哥黑白切海鮮快炒",
    "area": "嘉義市",
    "types": [
      "熱炒",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "發哥黑白切海鮮快炒，嘉義脆友推薦店家，也適合宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=發哥黑白切海鮮快炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "宵夜模式"
    ]
  },
  {
    "name": "東金碳烤海鮮",
    "area": "嘉義市",
    "types": [
      "燒烤",
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.4",
    "desc": "東金碳烤海鮮，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=東金碳烤海鮮 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "魚香鵝肉海產",
    "area": "嘉義市",
    "types": [
      "熱炒",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "魚香鵝肉海產，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=魚香鵝肉海產 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "紅豆海鮮快炒",
    "area": "嘉義市",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "紅豆海鮮快炒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=紅豆海鮮快炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "峇曼 Paman Zab",
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
    "rating": "4.2",
    "desc": "峇曼 Paman Zab，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=峇曼 Paman Zab 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉北平價牛排",
    "area": "嘉義市",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉北平價牛排，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉北平價牛排 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "余媽媽老麵店 創始店",
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
    "rating": "4.3",
    "desc": "余媽媽老麵店 創始店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=余媽媽老麵店 創始店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "香緣餛飩專賣店",
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
    "rating": "4.5",
    "desc": "香緣餛飩專賣店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=香緣餛飩專賣店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "KN製餐",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "KN製餐，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=KN製餐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "囍宴坊老台菜定食料理",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.4",
    "desc": "囍宴坊老台菜定食料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=囍宴坊老台菜定食料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "伊氛局海鮮平價熱炒",
    "area": "嘉義市",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "5.0",
    "desc": "伊氛局海鮮平價熱炒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=伊氛局海鮮平價熱炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "金粒炒飯",
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
    "rating": "4.5",
    "desc": "金粒炒飯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=金粒炒飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "胡家莊家常菜餐廳",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "3.9",
    "desc": "胡家莊家常菜餐廳，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=胡家莊家常菜餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "微笑咖哩 嘉義店",
    "area": "嘉義市",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "微笑咖哩 嘉義店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=微笑咖哩 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "咖哩"
    ]
  },
  {
    "name": "ㄓㄨㄤ小菜 韓式小料理",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "ㄓㄨㄤ小菜 韓式小料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=ㄓㄨㄤ小菜 韓式小料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "島嶼塔可",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "島嶼塔可，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=島嶼塔可 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "火鍋世家 嘉義尊爵店",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "火鍋世家 嘉義尊爵店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=火鍋世家 嘉義尊爵店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "女巫貓葵",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "小吃",
      "宵夜"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "女巫貓葵，嘉義脆友推薦店家，也適合宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=女巫貓葵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "宵夜模式"
    ]
  },
  {
    "name": "葉記牛肉",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.1",
    "desc": "葉記牛肉，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=葉記牛肉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "南洋小館",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "南洋小館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=南洋小館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉義安和胡椒蝦",
    "area": "嘉義市",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "嘉義安和胡椒蝦，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義安和胡椒蝦 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "森和丼 丼飯專賣",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "森和丼 丼飯專賣，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=森和丼 丼飯專賣 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "鵲鷗 Chill",
    "area": "嘉義市",
    "types": [
      "酒吧",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "鵲鷗 Chill，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=鵲鷗 Chill 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "興烤串海鮮鍋燒",
    "area": "嘉義市",
    "types": [
      "燒烤"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "興烤串海鮮鍋燒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=興烤串海鮮鍋燒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "王記川味牛肉麵",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "王記川味牛肉麵，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=王記川味牛肉麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "陳家麵店",
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
    "rating": "4.3",
    "desc": "陳家麵店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=陳家麵店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "藝鍋物 嘉義新生店",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "藝鍋物 嘉義新生店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=藝鍋物 嘉義新生店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "食詮刈包四神湯",
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
    "rating": "4.3",
    "desc": "食詮刈包四神湯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=食詮刈包四神湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "哈牛排",
    "area": "嘉義市",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "哈牛排，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=哈牛排 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "暖馨幸福料理",
    "area": "嘉義市",
    "types": [
      "火鍋",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.9",
    "desc": "暖馨幸福料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=暖馨幸福料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "廣式腸粉",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "廣式腸粉，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=廣式腸粉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "森川丼丼體育館店",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "森川丼丼體育館店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=森川丼丼體育館店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "加山記養生燉湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "加山記養生燉湯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=加山記養生燉湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "樂食沛",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "樂食沛，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=樂食沛 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "熱浪小島 嘉義民權店",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "熱浪小島 嘉義民權店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=熱浪小島 嘉義民權店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "唯日本蛋包飯專門店",
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
    "rating": "4.8",
    "desc": "唯日本蛋包飯專門店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=唯日本蛋包飯專門店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "三糸食屋",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "三糸食屋，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=三糸食屋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "質醞義式餐酒館 Essence Bistro",
    "area": "嘉義市",
    "types": [
      "義式",
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.8",
    "desc": "質醞義式餐酒館 Essence Bistro，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=質醞義式餐酒館 Essence Bistro 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "阿信美食",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.0",
    "desc": "阿信美食，嘉義脆友推薦店家，也適合宵夜。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿信美食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "宵夜模式"
    ]
  },
  {
    "name": "東根料理屋",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "3.9",
    "desc": "東根料理屋，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=東根料理屋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "福芳酒食 FUFUN",
    "area": "嘉義市",
    "types": [
      "酒吧",
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "福芳酒食 FUFUN，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=福芳酒食 FUFUN 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "禾加日本料理",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "禾加日本料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=禾加日本料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "龍坐鐵板燒",
    "area": "嘉義市",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "龍坐鐵板燒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=龍坐鐵板燒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "The JiaJiu Place 呷酒餐酒館",
    "area": "嘉義市",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "The JiaJiu Place 呷酒餐酒館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=The JiaJiu Place 呷酒餐酒館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "暮森咖啡",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "暮森咖啡，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=暮森咖啡 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "龍師牛排",
    "area": "嘉義市",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.7",
    "desc": "龍師牛排，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=龍師牛排 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "巷內好炒",
    "area": "嘉義市",
    "types": [
      "熱炒",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "巷內好炒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=巷內好炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "南田爌肉飯",
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
    "rating": "4.2",
    "desc": "南田爌肉飯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=南田爌肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "Liaison 栗葉",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "Liaison 栗葉，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=Liaison 栗葉 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "椿椛和食",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.5",
    "desc": "椿椛和食，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=椿椛和食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "海森",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.3",
    "desc": "海森，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=海森 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "伴醉 Banzui",
    "area": "嘉義市",
    "types": [
      "酒吧"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "5.0",
    "desc": "伴醉 Banzui，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=伴醉 Banzui 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "時日小餐館",
    "area": "嘉義市",
    "types": [
      "義式",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "時日小餐館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=時日小餐館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "海鷗廚房 HEALTH KITCHEN",
    "area": "嘉義市",
    "types": [
      "異國料理",
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "海鷗廚房 HEALTH KITCHEN，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=海鷗廚房 HEALTH KITCHEN 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "養牛人家",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "養牛人家，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=養牛人家 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "橘子路上手作定食 吳鳳店",
    "area": "嘉義市",
    "types": [
      "中式",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "橘子路上手作定食 吳鳳店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=橘子路上手作定食 吳鳳店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "SAGAS雞白湯拉麵",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.0",
    "desc": "SAGAS雞白湯拉麵，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=SAGAS雞白湯拉麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "山崎拉麵",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "山崎拉麵，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=山崎拉麵 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "手在比薩",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "手在比薩，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=手在比薩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "多力雞陶鍋 嘉義店",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "多力雞陶鍋 嘉義店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=多力雞陶鍋 嘉義店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "阿進土產牛肉湯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "阿進土產牛肉湯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿進土產牛肉湯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "梨棧日式食堂",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.9",
    "desc": "梨棧日式食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=梨棧日式食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "小滿高湯茶泡飯專門店",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "小滿高湯茶泡飯專門店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=小滿高湯茶泡飯專門店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "燃手串",
    "area": "西區",
    "types": [
      "燒烤",
      "日式",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "嘉義燒烤手串與宵夜推薦，適合晚餐後想吃串燒。",
    "map": "https://www.google.com/maps/search/?api=1&query=燃手串 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選",
      "宵夜模式",
      "嘉飽熊推薦"
    ]
  },
  {
    "name": "Eat fun小廚房",
    "area": "嘉義市",
    "types": [
      "義式",
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "Eat fun小廚房，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=Eat fun小廚房 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "珍香排骨專門店",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "珍香排骨專門店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=珍香排骨專門店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "東市駿馬滷肉飯",
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
    "rating": "4.6",
    "desc": "東市駿馬滷肉飯，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=東市駿馬滷肉飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "川居小館",
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
    "rating": "3.9",
    "desc": "川居小館，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=川居小館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "飽飽泰式",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "飽飽泰式，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=飽飽泰式 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "好來早午餐",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "好來早午餐，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=好來早午餐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "88快炒",
    "area": "嘉義市",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "88快炒，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=88快炒 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿玲水餃煎餃",
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
    "rating": "4.3",
    "desc": "阿玲水餃煎餃，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=阿玲水餃煎餃 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "山而已原葉茶本舖",
    "area": "嘉義市",
    "types": [
      "飲料",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "山而已原葉茶本舖，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=山而已原葉茶本舖 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "泰廚 Chefs Thai",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "泰廚 Chefs Thai，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=泰廚 Chefs Thai 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "饗板鐵板料理",
    "area": "嘉義市",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "饗板鐵板料理，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=饗板鐵板料理 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "六上米砂鍋粥私房菜點心",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "六上米砂鍋粥私房菜點心，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=六上米砂鍋粥私房菜點心 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "立川黃金鍋",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "立川黃金鍋，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=立川黃金鍋 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "慕珈琲店",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "慕珈琲店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=慕珈琲店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "約會可選"
    ]
  },
  {
    "name": "老泉城黃燜雞米飯 嘉義興業店",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "老泉城黃燜雞米飯 嘉義興業店，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=老泉城黃燜雞米飯 嘉義興業店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "杉丼食堂",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "杉丼食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=杉丼食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "崇沐義大利麵餐廳",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.9",
    "desc": "崇沐義大利麵餐廳，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=崇沐義大利麵餐廳 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "夢裡麵 東北冷麵拌菜",
    "area": "嘉義市",
    "types": [
      "小吃",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.9",
    "desc": "東北冷麵與拌菜，清爽有特色，放在小吃與異國料理分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=夢裡麵 東北冷麵拌菜 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "白話文學",
    "area": "嘉義市",
    "types": [
      "美式",
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "白話文學，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=白話文學 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "Pizzeria CHU朱氏披薩",
    "area": "嘉義市",
    "types": [
      "義式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "義式披薩店，適合聚餐、約會或想吃披薩的午晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=Pizzeria CHU朱氏披薩 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐",
      "約會可選"
    ]
  },
  {
    "name": "香香素食",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "香香素食，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=香香素食 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "好食實驗所",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800+",
    "rating": "4.7",
    "desc": "好食實驗所，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=好食實驗所 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "大盛居日韓食堂",
    "area": "嘉義市",
    "types": [
      "日式",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.2",
    "desc": "大盛居日韓食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=大盛居日韓食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "嘉義市加賀食堂",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義市加賀食堂，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義市加賀食堂 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "適合聚餐"
    ]
  },
  {
    "name": "一點散漫小料亭",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "一點散漫小料亭，嘉義脆友推薦店家。",
    "map": "https://www.google.com/maps/search/?api=1&query=一點散漫小料亭 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "SALUSABA 泰式料理",
    "area": "嘉義市",
    "types": [
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "泰式料理推薦",
    "map": "https://www.google.com/maps/search/?api=1&query=SALUSABA 泰式料理 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "黑棟當歸鴨 光華總店",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "鴨肉飯、涼麵、滷味",
    "map": "https://www.google.com/maps/search/?api=1&query=黑棟當歸鴨 光華總店 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "山而已",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "下午茶",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "原葉茶本舖",
    "map": "https://www.google.com/maps/search/?api=1&query=山而已 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "玲冰冰",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "下午茶",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "黑糖剉冰、梗粽冰、嫩仙草都是招牌，適合下午茶與飯後甜點。",
    "map": "https://www.google.com/maps/search/?api=1&query=玲冰冰 嘉義 仁愛路 成功街",
    "tags": [
      "嘉義脆友推薦",
      "新加入",
      "冰品",
      "夏天必吃"
    ]
  },
  {
    "name": "天心岩蔬食餐廳",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.5",
    "desc": "精緻蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=天心岩蔬食餐廳 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "草行居百匯蔬食",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "百匯蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=草行居百匯蔬食 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "健康原素 興業店",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "健康蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=健康原素 興業店 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "JUST BURGER 加蔬特",
    "area": "嘉義市",
    "types": [
      "素食",
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "蔬食漢堡",
    "map": "https://www.google.com/maps/search/?api=1&query=JUST BURGER 加蔬特 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "明諾爾 LUZ & NOE",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "下午茶"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "純素料理",
    "map": "https://www.google.com/maps/search/?api=1&query=明諾爾 LUZ & NOE 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "大隱",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "素食餐廳",
    "map": "https://www.google.com/maps/search/?api=1&query=大隱 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "喜來樂蔬食坊",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=喜來樂蔬食坊 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "春日蔬食坊",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=春日蔬食坊 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "新生蔬食小館",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=新生蔬食小館 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "蘭心園素食坊",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=蘭心園素食坊 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "養心園素食盒餐專賣",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "素食便當",
    "map": "https://www.google.com/maps/search/?api=1&query=養心園素食盒餐專賣 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "MISS 蔬",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "輕食蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=MISS 蔬 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "阿紘素食",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.8",
    "desc": "晚餐蔬食",
    "map": "https://www.google.com/maps/search/?api=1&query=阿紘素食 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "樸素齋坊 林森店",
    "area": "嘉義市",
    "types": [
      "素食"
    ],
    "times": [
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "素食",
    "map": "https://www.google.com/maps/search/?api=1&query=樸素齋坊 林森店 嘉義",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "皇家豆花",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=皇家豆花 嘉義"
  },
  {
    "name": "山柒-披薩製所",
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
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=山柒-披薩製所 嘉義"
  },
  {
    "name": "灰燼雞蛋糕",
    "area": "嘉義市",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=灰燼雞蛋糕 嘉義"
  },
  {
    "name": "友刈包",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=友刈包 嘉義"
  },
  {
    "name": "瘋Beef 丼飽處",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=瘋Beef 丼飽處 嘉義"
  },
  {
    "name": "花亭壽司",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=花亭壽司 嘉義"
  },
  {
    "name": "松阪家",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=松阪家 嘉義"
  },
  {
    "name": "新御野飯館",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=新御野飯館 嘉義"
  },
  {
    "name": "濟濟一堂",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=濟濟一堂 嘉義"
  },
  {
    "name": "感恩火雞肉飯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式",
      "雞肉飯"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義火雞肉飯推薦名單之一，想吃經典嘉義味可以骰這間。",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=感恩火雞肉飯 嘉義"
  },
  {
    "name": "阿忠羊肉",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿忠羊肉 嘉義"
  },
  {
    "name": "碖 炭火夯肉飯",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=碖 炭火夯肉飯 嘉義"
  },
  {
    "name": "炸的三角骨專賣",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=炸的三角骨專賣 嘉義"
  },
  {
    "name": "北門沙鍋魚頭",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=北門沙鍋魚頭 嘉義"
  },
  {
    "name": "雄讚溫體肉品現撈海鮮極品鍋",
    "area": "嘉義市",
    "types": [
      "火鍋"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "社群推薦新增店家",
    "tags": [
      "嘉義脆友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=雄讚溫體肉品現撈海鮮極品鍋 嘉義"
  },
  {
    "name": "阿溪雞肉飯",
    "area": "西區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "在地人氣雞肉飯，早午餐不知道吃什麼可以骰這間。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典",
      "在地人氣"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿溪雞肉飯 嘉義市"
  },
  {
    "name": "桃城三禾火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "高人氣火雞肉飯，想吃嘉義經典小吃很適合。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典",
      "人氣名店"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=桃城三禾火雞肉飯 嘉義市"
  },
  {
    "name": "蕭老師火雞肉飯",
    "area": "西區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "嘉義火雞肉飯名單常客，日常吃飯很穩。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=蕭老師火雞肉飯 嘉義市"
  },
  {
    "name": "可口火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "簡單耐吃的火雞肉飯，適合不知道吃什麼時快速決定。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=可口火雞肉飯 嘉義市"
  },
  {
    "name": "正統火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "高評價火雞肉飯，想吃一碗嘉義味可以骰它。",
    "tags": [
      "雞肉飯模式",
      "高評價",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=正統火雞肉飯 嘉義市"
  },
  {
    "name": "和平嘉義火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "嘉義人氣火雞肉飯，早午餐或晚餐都能考慮。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典",
      "人氣名店"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=和平嘉義火雞肉飯 嘉義市"
  },
  {
    "name": "嘉義車頭火雞肉飯（永香珍食堂）",
    "area": "西區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "車站附近想吃嘉義火雞肉飯，可以把命運交給這碗。",
    "tags": [
      "雞肉飯模式",
      "車站周邊",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義車頭火雞肉飯 永香珍食堂 嘉義市"
  },
  {
    "name": "嘉義公園火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "嘉義公園附近的火雞肉飯，早上或中午想吃很可以。",
    "tags": [
      "雞肉飯模式",
      "嘉義公園",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義公園火雞肉飯 嘉義市"
  },
  {
    "name": "嘉義噴水雞肉飯-小雅旗艦店",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "3.9",
    "desc": "噴水雞肉飯小雅旗艦店，想吃知名品牌路線可以骰這間。",
    "tags": [
      "雞肉飯模式",
      "知名品牌"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義噴水雞肉飯 小雅旗艦店 嘉義市"
  },
  {
    "name": "簡單火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.2",
    "desc": "嘉義火雞肉飯人氣店，簡單吃一碗就很滿足。",
    "tags": [
      "雞肉飯模式",
      "嘉義經典",
      "人氣名店"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=簡單火雞肉飯 嘉義市"
  },
  {
    "name": "家禾火雞肉飯",
    "area": "西區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "西區火雞肉飯選擇，想吃平價小吃可以骰這間。",
    "tags": [
      "雞肉飯模式",
      "西區",
      "嘉義經典"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=家禾火雞肉飯 嘉義市"
  },
  {
    "name": "嘉義人火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐"
    ],
    "price": "$1-200",
    "rating": "4.0",
    "desc": "名字就很嘉義人的火雞肉飯，選擇困難時交給嘉飽熊。",
    "tags": [
      "雞肉飯模式",
      "嘉義人從小吃到大"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義人火雞肉飯 嘉義市"
  },
  {
    "name": "文化火雞肉飯",
    "area": "西區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "文化路周邊高評價火雞肉飯，逛街前後都很適合。",
    "tags": [
      "雞肉飯模式",
      "文化路周邊",
      "高評價"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=文化火雞肉飯 嘉義市"
  },
  {
    "name": "古早火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "古早味火雞肉飯，想吃嘉義樸實日常味可以選它。",
    "tags": [
      "雞肉飯模式",
      "古早味",
      "高評價"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=古早火雞肉飯 嘉義市"
  },
  {
    "name": "蕃茄村 嘉義興美店",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "早餐店，適合早午餐快速解決。",
    "tags": [
      "新收錄",
      "早餐模式"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=蕃茄村 嘉義興美店"
  },
  {
    "name": "HAENG BOK 哼飽！",
    "area": "嘉義市",
    "types": [
      "早餐",
      "義式",
      "咖啡甜點"
    ],
    "times": [
      "早午餐",
      "午餐",
      "下午茶"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "販售早午餐、義大利麵、燉飯與下午茶；不新增早午餐分類，歸在早餐、義式與咖啡甜點。",
    "map": "https://www.google.com/maps/search/?api=1&query=HAENG BOK 哼飽 嘉義",
    "tags": [
      "新收錄",
      "嘉義熊推薦"
    ]
  },
  {
    "name": "丸龜",
    "area": "嘉義市",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "日式料理新收錄。",
    "tags": [
      "新收錄"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=丸龜 嘉義"
  },
  {
    "name": "質醞 Essence Bistro 餐酒館",
    "area": "東區",
    "types": [
      "酒吧",
      "義式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "餐酒館路線，適合晚餐、聚餐或約會。",
    "tags": [
      "新收錄",
      "約會推薦",
      "餐酒館"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=質醞 Essence Bistro 嘉義"
  },
  {
    "name": "天子意麵",
    "area": "嘉義市",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義意麵與宵夜選擇。",
    "tags": [
      "新收錄",
      "宵夜模式"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=天子意麵 嘉義"
  },
  {
    "name": "東門火雞肉飯",
    "area": "東區",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義火雞肉飯名單常客，雞肉飯模式必收。",
    "tags": [
      "雞肉飯模式",
      "嘉義人從小吃到大"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=東門火雞肉飯 嘉義市"
  },
  {
    "name": "嘉林火雞肉飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "網友推薦雞肉飯名單，適合放進嘉義雞肉飯模式。",
    "tags": [
      "雞肉飯模式",
      "網友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉林火雞肉飯 嘉義市"
  },
  {
    "name": "阿明火雞肉飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義火雞肉飯推薦名單之一，雞肉飯模式新增收錄。",
    "tags": [
      "雞肉飯模式",
      "網友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿明火雞肉飯 嘉義市"
  },
  {
    "name": "劉里長雞肉飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義雞肉飯討論常見名單，適合讓嘉飽熊幫你骰。",
    "tags": [
      "雞肉飯模式",
      "Threads 爆推"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=劉里長雞肉飯 嘉義市"
  },
  {
    "name": "阿霞火雞肉飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義火雞肉飯推薦名單之一，雞肉飯模式新增收錄。",
    "tags": [
      "雞肉飯模式",
      "網友推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿霞火雞肉飯 嘉義市"
  },
  {
    "name": "阿宏師火雞肉飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "早午餐",
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義雞肉飯推薦名單新增收錄。",
    "tags": [
      "雞肉飯模式",
      "嘉義人從小吃到大"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿宏師火雞肉飯 嘉義市"
  },
  {
    "name": "米伴鐵板料理",
    "area": "嘉義市",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "嘉義人氣鐵板燒。",
    "tags": [
      "嘉飽熊推薦",
      "鐵板燒"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=米伴鐵板料理 嘉義"
  },
  {
    "name": "米伴 鐵板料理",
    "area": "西區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義人氣鐵板燒。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=米伴 鐵板料理 嘉義"
  },
  {
    "name": "花漾創意鐵板料理",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800-1,400",
    "rating": "4.5",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=花漾創意鐵板料理 嘉義"
  },
  {
    "name": "踢鐵板燒",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.3",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=踢鐵板燒 嘉義"
  },
  {
    "name": "鑫鴻澄鐵板燒",
    "area": "西區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=鑫鴻澄鐵板燒 嘉義"
  },
  {
    "name": "大埔鐵板燒 忠孝店",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=大埔鐵板燒 忠孝店 嘉義"
  },
  {
    "name": "初物 鐵板燒鍋物",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$2000+",
    "rating": "4.6",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=初物 鐵板燒鍋物 嘉義"
  },
  {
    "name": "季花鐵板燒",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1000-2000",
    "rating": "4.2",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=季花鐵板燒 嘉義"
  },
  {
    "name": "新菊鐵板燒",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1800-2000",
    "rating": "4.2",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=新菊鐵板燒 嘉義"
  },
  {
    "name": "紅鼎鐵板燒",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.3",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=紅鼎鐵板燒 嘉義"
  },
  {
    "name": "大葉鐵板燒",
    "area": "西區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.3",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=大葉鐵板燒 嘉義"
  },
  {
    "name": "秋嵐鐵板料理",
    "area": "西區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$800-1000",
    "rating": "4.8",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=秋嵐鐵板料理 嘉義"
  },
  {
    "name": "T到鐵板",
    "area": "東區",
    "types": [
      "鐵板燒"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義鐵板燒推薦店家。",
    "tags": [
      "鐵板燒",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=T到鐵板 嘉義"
  },
  {
    "name": "1961海鮮碳烤",
    "area": "東區",
    "types": [
      "燒烤",
      "海鮮"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "4.4",
    "desc": "嘉義燒烤與宵夜推薦。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=1961海鮮碳烤 嘉義"
  },
  {
    "name": "碳所音樂餐廳",
    "area": "西區",
    "types": [
      "酒吧",
      "燒烤"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.7",
    "desc": "嘉義燒烤與宵夜推薦。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=碳所音樂餐廳 嘉義"
  },
  {
    "name": "嘉樂福碳烤 烤肉 燒烤 BBQ（嘉佳福）",
    "area": "西區",
    "types": [
      "燒烤"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義燒烤與宵夜推薦。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉樂福碳烤 烤肉 燒烤 BBQ（嘉佳福） 嘉義"
  },
  {
    "name": "欣葉海鮮燒烤熱炒",
    "area": "東區",
    "types": [
      "燒烤",
      "熱炒",
      "海鮮"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "4.5",
    "desc": "嘉義燒烤與宵夜推薦。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=欣葉海鮮燒烤熱炒 嘉義"
  },
  {
    "name": "饗烤肉",
    "area": "嘉義市",
    "types": [
      "燒烤"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "嘉義燒烤與宵夜推薦。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=饗烤肉 嘉義"
  },
  {
    "name": "忠鑫快炒",
    "area": "東區",
    "types": [
      "熱炒",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.9",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=忠鑫快炒 嘉義"
  },
  {
    "name": "88 快炒",
    "area": "東區",
    "types": [
      "熱炒",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=88 快炒 嘉義"
  },
  {
    "name": "福芳酒食FUFUN",
    "area": "東區",
    "types": [
      "熱炒",
      "居酒屋"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=福芳酒食FUFUN 嘉義"
  },
  {
    "name": "常旺熱炒",
    "area": "西區",
    "types": [
      "熱炒",
      "海鮮"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.6",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=常旺熱炒 嘉義"
  },
  {
    "name": "山哥平價熱炒",
    "area": "西區",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.6",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=山哥平價熱炒 嘉義"
  },
  {
    "name": "來呷飯 川食堂(嘉義中山店)",
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
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=來呷飯 川食堂(嘉義中山店) 嘉義"
  },
  {
    "name": "大吃大喝 美食熱炒",
    "area": "西區",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=大吃大喝 美食熱炒 嘉義"
  },
  {
    "name": "熱炒九九",
    "area": "西區",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=熱炒九九 嘉義"
  },
  {
    "name": "澄澄 Kitchen& Market",
    "area": "東區",
    "types": [
      "義式",
      "咖啡甜點"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-1000",
    "rating": "4.9",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=澄澄 Kitchen& Market 嘉義"
  },
  {
    "name": "胖胖哥熱炒",
    "area": "西區",
    "types": [
      "熱炒"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.9",
    "desc": "嘉義在地推薦店家。",
    "tags": [
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=胖胖哥熱炒 嘉義"
  },
  {
    "name": "暮暮製所早午餐",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=暮暮製所早午餐 嘉義"
  },
  {
    "name": "Nose man鼻孔先生手作早午餐",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=Nose man鼻孔先生手作早午餐 嘉義"
  },
  {
    "name": "綠洲oasis",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=綠洲oasis 嘉義"
  },
  {
    "name": "二樂 TWO HOT CAFÉ",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=二樂 TWO HOT CAFÉ 嘉義"
  },
  {
    "name": "早窩Cafe•Brunch",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.7",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=早窩Cafe•Brunch 嘉義"
  },
  {
    "name": "Two's 早•午食",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=Two's 早•午食 嘉義"
  },
  {
    "name": "早點起床",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=早點起床 嘉義"
  },
  {
    "name": "Nonamelab",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.4",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=Nonamelab 嘉義"
  },
  {
    "name": "王家早點",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=王家早點 嘉義"
  },
  {
    "name": "可口味早餐店",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.4",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=可口味早餐店 嘉義"
  },
  {
    "name": "嘉義南門包氏炭燒杏仁茶",
    "area": "東區",
    "types": [
      "小吃"
    ],
    "times": [
      "早餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義南門包氏炭燒杏仁茶 嘉義"
  },
  {
    "name": "早晨小姐Good morning",
    "area": "東區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$200-400",
    "rating": "4.1",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=早晨小姐Good morning 嘉義"
  },
  {
    "name": "阿焜早點",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.3",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=阿焜早點 嘉義"
  },
  {
    "name": "柒早早午餐",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=柒早早午餐 嘉義"
  },
  {
    "name": "卡古（カク）早午餐",
    "area": "西區",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.6",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=卡古（カク）早午餐 嘉義"
  },
  {
    "name": "土佐手作早午餐",
    "area": "嘉義市",
    "types": [
      "早餐"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義早餐與早午餐推薦。",
    "tags": [
      "早餐推薦",
      "嘉飽熊推薦"
    ],
    "map": "https://www.google.com/maps/search/?api=1&query=土佐手作早午餐 嘉義"
  },
  {
    "name": "豆奶攤",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃",
      "宵夜"
    ],
    "times": [
      "早餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義宵夜與豆漿點心選擇，半夜想吃簡單熱食可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=豆奶攤 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "四海豆漿",
    "area": "嘉義市",
    "types": [
      "早餐",
      "小吃",
      "宵夜"
    ],
    "times": [
      "早餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "豆漿、燒餅、蛋餅類宵夜選擇，適合想吃輕一點。",
    "map": "https://www.google.com/maps/search/?api=1&query=四海豆漿 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "永和60小麵攤",
    "area": "嘉義市",
    "types": [
      "小吃",
      "麵食",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "平價麵攤宵夜，適合晚上想吃熱湯麵。",
    "map": "https://www.google.com/maps/search/?api=1&query=永和60小麵攤 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "秀呷店宵夜",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "店名就是宵夜取向，適合晚上嘴饞或晚餐後再吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=秀呷店宵夜 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "初次見麵鍋燒",
    "area": "嘉義市",
    "types": [
      "鍋燒",
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "鍋燒麵與熱湯類宵夜，晚上想吃熱食可選。",
    "map": "https://www.google.com/maps/search/?api=1&query=初次見麵鍋燒 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "古早味烤玉米",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "古早味烤玉米宵夜，適合散步或飯後嘴饞。",
    "map": "https://www.google.com/maps/search/?api=1&query=古早味烤玉米 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "玖壹伍深夜食光",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "深夜食光類型宵夜，適合晚餐後或半夜覓食。",
    "map": "https://www.google.com/maps/search/?api=1&query=玖壹伍深夜食光 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "胖叔叔",
    "area": "嘉義市",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "嘉義宵夜小吃選項，適合晚上不知道吃什麼時抽到。",
    "map": "https://www.google.com/maps/search/?api=1&query=胖叔叔 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "Mr.Night 古巴三明治",
    "area": "嘉義市",
    "types": [
      "美式",
      "小吃",
      "宵夜"
    ],
    "times": [
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "4.5",
    "desc": "古巴三明治與深夜輕食，適合宵夜想吃不一樣的。",
    "map": "https://www.google.com/maps/search/?api=1&query=Mr.Night 古巴三明治 嘉義市",
    "tags": [
      "宵夜模式",
      "嘉義脆友推薦"
    ]
  },
  {
    "name": "泰舍 泰式料理 嘉義康達盛通店",
    "area": "西區",
    "types": [
      "咖哩",
      "泰式",
      "異國料理"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "4.8",
    "desc": "泰式料理，也歸入咖哩分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=泰舍 泰式料理 嘉義康達盛通店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "泰式"
    ]
  },
  {
    "name": "裕屋商店｜ヒロヤ商店",
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
    "rating": "4.7",
    "desc": "日式料理店，也歸入咖哩分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=裕屋商店 ヒロヤ商店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "日式"
    ]
  },
  {
    "name": "丸飯食事處 嘉鄉店",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.5",
    "desc": "日式咖哩與食事處，午晚餐皆可。",
    "map": "https://www.google.com/maps/search/?api=1&query=丸飯食事處 嘉鄉店 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "日式"
    ]
  },
  {
    "name": "榮 丼飯 定食",
    "area": "西區",
    "types": [
      "咖哩",
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "4.8",
    "desc": "丼飯與定食，也歸入咖哩分類。",
    "map": "https://www.google.com/maps/search/?api=1&query=榮 丼飯 定食 新榮路166-1號 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "咖哩",
      "丼飯",
      "定食"
    ]
  },
  {
    "name": "我們是水龍拉麵",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "4.7",
    "desc": "日式拉麵店。地址：嘉義市西區民生北路38號｜營業時間：16:30–20:30。",
    "map": "https://www.google.com/maps/search/?api=1&query=我們是水龍拉麵 嘉義市西區民生北路38號",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "逐鹿炭火燒肉 嘉義店",
    "area": "嘉義市",
    "types": [
      "燒肉"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$600-800",
    "rating": "4.6",
    "desc": "炭火燒肉聚餐選擇，放在燒肉分類，適合午餐與晚餐。",
    "map": "https://www.google.com/maps/search/?api=1&query=逐鹿炭火燒肉 嘉義店",
    "tags": [
      "嘉義脆友推薦",
      "適合聚餐",
      "新加入"
    ]
  },
  {
    "name": "嘉荷",
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
    "desc": "巷弄裡的便當工作室。地址：嘉義市東區林森東路269巷1弄68號。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉荷 嘉義市東區林森東路269巷1弄68號",
    "tags": [
      "嘉義脆友推薦",
      "新加入"
    ]
  },
  {
    "name": "嘉義小正太酸菜魚",
    "area": "嘉義市",
    "types": [
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "",
    "desc": "酸菜魚與重口味中式料理，想吃酸香開胃可以選這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=嘉義小正太酸菜魚 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "酸菜魚"
    ]
  },
  {
    "name": "四海脆皮豆腐",
    "area": "嘉義市",
    "types": [
      "小吃"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "脆皮豆腐小吃，想吃簡單涮嘴點心可以骰這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=四海脆皮豆腐 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "脆皮豆腐"
    ]
  },
  {
    "name": "佳味香燒臘便當",
    "area": "民雄",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "民雄埤角一帶的燒臘便當選項，表單推薦好吃、衛生、便宜，是在地人會吃的日常便當。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E4%BD%B3%E5%91%B3%E9%A6%99%E7%87%92%E8%87%98%E4%BE%BF%E7%95%B6%20621%E5%98%89%E7%BE%A9%E7%B8%A3%E6%B0%91%E9%9B%84%E9%84%89%E7%A6%8F%E6%A8%82%E6%9D%91%E5%9F%A4%E8%A7%921%E4%B9%8B19%E8%99%9F",
    "tags": [
      "嘉義脆友推薦",
      "表單推薦",
      "燒臘",
      "便當",
      "在地人推薦",
      "路邊好停"
    ]
  },
  {
    "name": "CITTA！今天有炸",
    "area": "嘉義市",
    "types": [
      "小吃",
      "美式"
    ],
    "times": [
      "下午茶",
      "晚餐",
      "宵夜"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "炸物小吃選項，下午茶、晚餐或宵夜想吃酥脆可以骰。",
    "map": "https://www.google.com/maps/search/?api=1&query=CITTA 今天有炸 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "炸物"
    ]
  },
  {
    "name": "韓記麵館",
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
    "rating": "",
    "desc": "麵食類日常選項，想吃簡單熱食可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=韓記麵館 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "麵食"
    ]
  },
  {
    "name": "傳新肉夾饃",
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
    "rating": "",
    "desc": "肉夾饃小吃，想吃中式夾餅類可以骰這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=傳新肉夾饃 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "肉夾饃"
    ]
  },
  {
    "name": "鼎丰御膳鍋物",
    "area": "嘉義市",
    "types": [
      "火鍋",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "",
    "desc": "鍋物餐廳，午餐晚餐想吃火鍋可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=鼎丰御膳鍋物 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "鍋物"
    ]
  },
  {
    "name": "林家火雞肉飯X麻油雞飯",
    "area": "嘉義市",
    "types": [
      "雞肉飯",
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "火雞肉飯與麻油雞飯，想吃嘉義味或暖胃飯類可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=林家火雞肉飯 麻油雞飯 嘉義市",
    "tags": [
      "嘉義脆友推薦",
      "雞肉飯模式",
      "麻油雞飯"
    ]
  },
  {
    "name": "御饌牛排",
    "area": "東區",
    "types": [
      "美式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$200-400",
    "rating": "",
    "desc": "CP值高的牛排選項，表單推薦牛肉羅宋湯、玉米濃湯料多，服務也親切。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E5%BE%A1%E9%A5%8C%E7%89%9B%E6%8E%92%20%E5%98%89%E7%BE%A9%E5%B8%82%E8%88%88%E6%A5%AD%E6%9D%B1%E8%B7%AF3%E8%99%9F",
    "tags": [
      "嘉義脆友推薦",
      "表單推薦",
      "牛排",
      "CP值高",
      "路邊好停"
    ]
  },
  {
    "name": "蜀都串串火鍋",
    "area": "西區",
    "types": [
      "火鍋",
      "中式",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$400-600",
    "rating": "",
    "desc": "特色串串麻辣鍋，表單推薦適合聚餐、約會，晚上想吃鍋也可以骰這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E8%9C%80%E9%83%BD%E4%B8%B2%E4%B8%B2%E7%81%AB%E9%8D%8B%20%E5%98%89%E7%BE%A9%E5%B8%82%E8%A5%BF%E5%8D%80%E4%B8%AD%E6%AD%A3%E8%B7%AF547%E8%99%9F",
    "tags": [
      "表單推薦",
      "串串火鍋",
      "麻辣鍋",
      "適合聚餐",
      "約會可選",
      "收費停車場"
    ]
  },
  {
    "name": "阿美鹽酥雞",
    "area": "東區",
    "types": [
      "小吃",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$100-200",
    "rating": "",
    "desc": "在地老店鹽酥雞，表單推薦便宜、CP值高、取餐不用等太久，適合晚上嘴饞。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E7%BE%8E%E9%B9%BD%E9%85%A5%E9%9B%9E%20%E6%9D%B1%E5%8D%80%E6%B0%91%E6%AC%8A%E8%B7%AF146%E8%99%9F%20%E5%98%89%E7%BE%A9%E5%B8%82",
    "tags": [
      "表單推薦",
      "鹽酥雞",
      "炸物",
      "在地老店",
      "路邊好停"
    ]
  },
  {
    "name": "南門阿汶海產",
    "area": "東區",
    "types": [
      "小吃",
      "熱炒",
      "宵夜"
    ],
    "times": [
      "晚餐",
      "宵夜"
    ],
    "price": "$200-400",
    "rating": "",
    "desc": "南門街海產熱炒選項，表單推薦東西好吃，想吃宵夜或熱炒可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E5%8D%97%E9%96%80%E9%98%BF%E6%B1%B6%E6%B5%B7%E7%94%A2%20%E5%98%89%E7%BE%A9%E5%B8%82%E6%9D%B1%E5%8D%80%E5%8D%97%E9%96%80%E8%A1%9760%E8%99%9F%E4%B9%8B%E4%B8%80",
    "tags": [
      "表單推薦",
      "海產",
      "熱炒",
      "寵物友善",
      "路邊好停"
    ]
  },
  {
    "name": "城市漢堡",
    "area": "西區",
    "types": [
      "早餐",
      "美式"
    ],
    "times": [
      "早餐",
      "早午餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "文化路上的早餐、早午餐選項，表單推薦便宜好吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E5%9F%8E%E5%B8%82%E6%BC%A2%E5%A0%A1%20%E5%98%89%E7%BE%A9%E5%B8%82%E6%96%87%E5%8C%96%E8%B7%AF559%E8%99%9F",
    "tags": [
      "表單推薦",
      "早餐推薦",
      "早午餐",
      "漢堡",
      "收費停車場"
    ]
  },
  {
    "name": "十三壽司",
    "area": "西區",
    "types": [
      "日式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$400-600",
    "rating": "",
    "desc": "新民路日式料理，表單推薦食材新鮮，想吃壽司或日式晚餐可以選。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E5%8D%81%E4%B8%89%E5%A3%BD%E5%8F%B8%20%E5%98%89%E7%BE%A9%E5%B8%82%E8%A5%BF%E5%8D%80%E6%96%B0%E6%B0%91%E8%B7%AF801-2%E8%99%9F",
    "tags": [
      "表單推薦",
      "壽司",
      "日式",
      "食材新鮮",
      "收費停車場"
    ]
  },
  {
    "name": "給給茶記",
    "area": "西區",
    "types": [
      "小吃",
      "中式"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$100-200",
    "rating": "",
    "desc": "港式飯類與便當選項，表單推薦黯然銷魂飯好吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E7%B5%A6%E7%B5%A6%E8%8C%B6%E8%A8%98%20%E5%98%89%E7%BE%A9%E5%B8%82%E8%A5%BF%E5%8D%80%E6%96%B0%E6%A6%AE%E8%B7%AF319%E8%99%9F",
    "tags": [
      "表單推薦",
      "港式",
      "便當",
      "黯然銷魂飯",
      "路邊好停"
    ]
  },
  {
    "name": "鳳炒麵",
    "area": "東區",
    "types": [
      "小吃",
      "中式",
      "咖哩"
    ],
    "times": [
      "午餐",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "台林街平價小吃，表單推薦便宜好吃，適合月底想吃粗飽。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E9%B3%B3%E7%82%92%E9%BA%B5%20%E5%98%89%E7%BE%A9%E5%B8%82%E6%9D%B1%E5%8D%80%E5%8F%B0%E6%9E%97%E8%A1%97124-1%E8%99%9F",
    "tags": [
      "表單推薦",
      "麵食",
      "咖哩",
      "便宜吃粗飽",
      "不好停車"
    ]
  },
  {
    "name": "雞霸雞炸雞本舖",
    "area": "西區",
    "types": [
      "小吃",
      "美式"
    ],
    "times": [
      "下午茶",
      "晚餐"
    ],
    "price": "$1-200",
    "rating": "",
    "desc": "興業西路炸雞點心，表單推薦便宜，想吃炸物可以骰這間。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E9%9B%9E%E9%9C%B8%E9%9B%9E%E7%82%B8%E9%9B%9E%E6%9C%AC%E8%88%96%20%E8%88%88%E6%A5%AD%E8%A5%BF%E8%B7%AF408-1%E8%99%9F%20%E5%98%89%E7%BE%A9%E5%B8%82",
    "tags": [
      "表單推薦",
      "炸雞",
      "炸物",
      "點心"
    ]
  },
  {
    "name": "西瓜珈琲",
    "area": "西區",
    "types": [
      "咖啡甜點"
    ],
    "times": [
      "下午茶"
    ],
    "price": "$100-200",
    "rating": "",
    "desc": "北榮街特色外帶咖啡店，表單推薦水果特調和布丁都好吃。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E8%A5%BF%E7%93%9C%E7%8F%88%E7%90%B2%20%E5%98%89%E7%BE%A9%E5%B8%82%E8%A5%BF%E5%8D%80%E5%8C%97%E6%A6%AE%E8%A1%97141%E8%99%9F",
    "tags": [
      "表單推薦",
      "外帶咖啡",
      "水果特調",
      "布丁",
      "收費停車場"
    ]
  },
  {
    "name": "旬樂家庭料理",
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
    "rating": "",
    "desc": "共和路家庭料理，表單推薦魚料理和炒青菜，適合想吃家常菜。",
    "map": "https://www.google.com/maps/search/?api=1&query=%E6%97%AC%E6%A8%82%E5%AE%B6%E5%BA%AD%E6%96%99%E7%90%86%20%E5%98%89%E7%BE%A9%E5%B8%82%E5%85%B1%E5%92%8C%E8%B7%AF272%E8%99%9F",
    "tags": [
      "表單推薦",
      "家庭料理",
      "魚料理",
      "親子友善",
      "收費停車場"
    ]
  }
];
