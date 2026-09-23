/* 每個物件是一頁。id 為穩定錨點；2026.09.17 確認單場贊助級距。 */
window.DECK_CONTENT = [
  {
    id: "cover", type: "cover", label: "Sponsorship & Partnership Deck", title: "AI郵報 OPEN LAB 2026",
    headline: "讓產品被理解、被體驗，\n也被更多人分享。",
    description: "AI 應用體驗・產業分享・創作者交流。結合實體互動與 AI郵報全渠道內容，讓品牌參與從現場延伸到線上。",
    cities: ["台北場 TAIPEI｜12/5（六）・瓶蓋工廠", "香港場 HONG KONG｜預計 12/19（六）"], date: "2026.12"
  },
  {
    id: "our-story", type: "story", label: "WHY WE BRING PEOPLE TOGETHER", title: "我們一直在做的，\n是讓科技離人更近。",
    intro: "從把複雜的 AI 技術，轉譯成看得懂、用得上的內容；到論壇、直播與小聚，讓螢幕另一端的人，坐下來交換想法。",
    items: [["讓科技被理解", "科技報導、產品實測、應用內容", "把功能轉成使用情境，讓讀者看見科技和自己的關係。"], ["讓對話發生", "產業論壇、直播訪談、社群聚會", "從品牌與專家的分享，到讀者之間的交流，讓問題有機會被回應。"], ["讓想法被實踐", "AI 教學、工作坊、企業培訓", "不只認識新工具，也把方法帶進工作與創作。"]],
    closing: "從跨渠道累積逾 20 萬追蹤的社群出發，OPEN LAB 要把線上的連結，變成現場的相遇。",
    source: {label: "認識 AI郵報的內容、活動與教育實績", url: "https://deck.aiposthub.com/"}
  },
  {
    id: "experience", type: "experience", label: "THE OPEN LAB", title: "從一場體驗，\n開始下一段品牌關係。",
    intro: "帶著電腦來試玩，聽一場分享，參加一個挑戰。品牌團隊、創作者與 AI 使用者，在同一個空間交換想法。",
    items: [["開放體驗", "Booth 與 AI Playground 自由探索，產品團隊直接示範、解答問題。"], ["分享與創作", "產業專家分享、Live Demo 與創作挑戰，讓產品成為對話與作品的一部分。"], ["有話題的交流", "專屬名牌標示 AI 興趣與交流意向；17:30 起搭配輕食、酒水，讓對話繼續。"]],
    image: "assets/open-lab-event-concept-web.jpg", caption: "AI 生成・活動情境模擬，非實際場地或活動紀錄；配置依最終場地規劃。",
    facts: "台北：2026/12/5（六）・瓶蓋工廠｜13:00 報到，13:30 開始。香港：預計 2026/12/19（六），場地待定。"
  },
  {
    id: "reach", type: "reach", label: "AIPOST MEDIA", title: "現場之外，\n還有整個 AI郵報。",
    lead: ["31M+", "全渠道每月內容瀏覽"],
    metrics: [["102K+", "Instagram"], ["75K+", "Threads"], ["40K", "Facebook"], ["≈60%", "電子報開信率"]],
    foot: "內容涵蓋 AI 工具、科技產品、企業應用與產業趨勢。受眾分布台灣、香港、新馬及其他華語市場。",
    source: {label: "AI郵報媒體資料", url: "https://deck.aiposthub.com/?lang=zh#s2"},
    note: "媒體規模依品牌 Deck；社群追蹤數依 2026.09 主辦方更新。以上為媒體整體數據，非單一贊助方案的保證觸及。"
  },
  {
    id: "audience", type: "audience", label: "THE AUDIENCE", title: "品牌會遇到誰？",
    intro: "《AI郵報 2026 讀者調查》將於活動當天正式公開。從上百份深度回覆，看見 AI 使用者的工作需求、工具選擇與消費意向。",
    groups: ["AI／科技從業者", "創作者與行銷人", "企業團隊與管理者", "知識工作者"],
    stats: [["74.5%", "已使用 AI 至少一年", "適合實際操作與進階應用示範。"], ["64.4%", "想加強 Agent 與工作流", "適合工具、平台與自動化案例。"], ["68.7%", "本機 AI 影響下一台電腦選擇", "適合 AI PC、GPU 與創作設備體驗。"]],
    note: "調查亮點預告｜完整洞察與匿名 AI 告解牆將於現場公開。數據來自讀者自選樣本，非全體市場或活動參加者的代表性推估。"
  },
  {
    id: "event-proof", type: "proof", label: "EVENT EXPERIENCE", title: "我們把科技品牌，\n帶到使用者面前。",
    intro: "從企業主題活動到讀者聚會，AI郵報的合作涵蓋議題企劃、社群招募、現場執行與影像內容。",
    cases: [
      {name: "Microsoft Cloud + AI", kind: "科技活動案例", image: "assets/microsoft-event-web.jpg", description: "企業 AI 與雲端議題，連結品牌團隊與專業受眾。"},
      {name: "AWS Taiwan Media AI Summit", kind: "科技活動案例", image: "assets/aws-event-web.jpg", description: "以媒體 AI 應用為主題，呈現技術與產業使用情境。"}
    ],
    source: {label: "更多活動與影像合作案例", url: "https://deck.aiposthub.com/?lang=zh#s7"},
    note: "以上為過往案例，非本次活動合作陣容。"
  },
  {
    id: "content-proof", type: "cases", label: "BRAND CONTENT", title: "有產品，也有說好\n產品故事的經驗。",
    cases: [
      {name: "NVIDIA GeForce RTX 筆電", category: "硬體應用", description: "以 AI 形象照教學，示範搭載 RTX GPU 的技嘉筆電如何支援創作。", url: "https://www.instagram.com/p/C75pn5thxL8"},
      {name: "GIGABYTE 技嘉", category: "品牌內容", description: "將科技產品與應用情境，整理為面向 AI 受眾的品牌短影音。", url: "https://www.instagram.com/aiposthub/reel/DYmGWS5zoVs/"},
      {name: "Manus AI", category: "工具推廣", description: "透過產品內容介紹 AI 工具，連結讀者對工作流與實作的興趣。", url: "https://www.instagram.com/aiposthub/reel/DO-Hj13EzC5/"},
      {name: "Qualcomm 高通黑客松", category: "競賽影像", description: "將活動現場與參與內容製作為可延伸傳播的影音紀錄。", url: "https://www.instagram.com/aiposthub/reel/DPQQ7fyk6Rg/"}
    ],
    partners: ["Google Cloud", "NVIDIA", "AWS", "Microsoft", "Qualcomm", "SAP", "PwC", "Red Bull"],
    note: "歷來內容、活動與教育合作節錄；點選案例可查看作品，非本次已確認贊助。"
  },
  {
    id: "program", type: "program", label: "WHAT HAPPENS HERE", title: "從聽見，到親手試試。\n讓品牌走進參與者的創作。",
    items: [
      ["01", "AI Playground", "試玩 AI PC、工具、裝置與服務。", "攤位展示／設備／軟體體驗"],
      ["02", "AI Talks", "邀請各產業 AI 專家與實踐者，分享真實案例與工作方法。", "Speaker／主題分享／案例交流"],
      ["03", "AI Demos", "讓工具、Agent 工作流與影音、硬體應用，在現場跑起來。", "產品示範／工作流演示／技術解說"],
      ["04", "Useless AI Challenge", "做一個沒什麼用、卻讓人想分享的 AI。", "競賽贊助／工具額度／品牌獎項"],
      ["05", "Postcards from 2036", "用影片、作品或原型想像十年後。", "創作命題／獎品／作品展示"],
      ["06", "AI Music & Live Coding", "邀請創作者探索即時生成的音樂與視覺。", "演出合作／音訊設備／創作工具"],
      ["07", "2026 讀者調查大公開", "現場公開使用需求、工具選擇與消費意向，搭配匿名 AI 告解牆。", "報告發布／議題對談／現場互動"]
    ],
    note: "講者、品牌、演出與挑戰辦法陸續確認；各單元依最終安排。分享須有實質內容；研究數據與結論獨立呈現。"
  },
  {
    id: "challenges", type: "challenges", label: "CHALLENGE PARTNERS", title: "讓你的工具，\n成為大家動手的理由。",
    competitions: [
      {name: "Useless AI", subtitle: "低門檻，好分享。", example: "把 PDF 變成宮鬥劇；讓電子寵物隨台股漲跌改變語氣。", role: "提供工具、API 或設備，設立品牌特別獎，邀請團隊擔任評審。"},
      {name: "Postcards from 2036", subtitle: "十年後，生活會長什麼樣？", example: "一支未來生活短片、一件產品原型，或一套新的工作方式。", role: "共同提出創作題目、提供獎品與素材，讓品牌參與作品發表。"}
    ],
    strip: "分享場次、創作競賽與 AI 音樂單元皆開放合作。可從單一獎項、一次 Demo 或一組設備開始。"
  },
  {
    id: "visibility", type: "visibility", label: "INCLUDED FOR EVERY SPONSOR", title: "不只一個展示位。\n還有活動前、中、後的內容。",
    intro: "各級品牌贊助皆含 AI郵報五大渠道的產品／服務介紹；資源支持以具名聯合介紹與對應單元曝光安排。",
    channels: [
      {label: "Instagram", url: "https://www.instagram.com/aiposthub/"},
      {label: "Threads", url: "https://www.threads.com/@aiposthub"},
      {label: "Facebook", url: "https://www.facebook.com/aiposthub"},
      {label: "AI郵報官網", url: "https://www.aiposthub.com/"},
      {label: "電子報"}
    ],
    items: [
      ["活動前｜建立認識", "介紹合作品牌、產品用途與參與內容，讓讀者知道現場能體驗什麼。"],
      ["活動中｜呈現體驗", "以現場紀錄與社群內容帶出品牌參與；展示、分享或競賽依方案安排。"],
      ["活動後｜延續關注", "透過活動回顧與產品介紹，附上產品連結或體驗入口，讓興趣有下一步。"]
    ],
    note: "各平台採合適形式發布；專屬內容、聯合介紹、篇數與影音製作範圍依合作方案確認。"
  },
  {
    id: "creator-network", type: "network", label: "BEYOND OUR OWN CHANNELS", title: "讓體驗，成為更多人\n願意帶走的話題。",
    intro: "除 AI郵報自有渠道外，我們正邀請科技社群、AI／科技 KOL 與媒體參與，規劃現場分享、採訪及直播合作。",
    items: [["科技社群 × KOL", "邀請中", "透過試玩、分享與創作互動，創造社群與創作者產出體驗內容的機會。"], ["媒體採訪 × 報導", "邀訪規劃", "整理活動亮點與品牌應用素材，提供媒體採訪線索；報導由媒體獨立決定。"], ["線上直播 × 精選內容", "合作洽談", "評估分享、Demo 與現場訪談的直播或精選內容，讓未到場的人也有機會參與。"]],
    closing: "如需指定 KOL 貼文、品牌專訪或直播內容，可另訂合作範圍、數量與報價。",
    note: "本頁為延伸合作機會，非所有方案保證交付。人選、平台與場次確認後另行公告；不保證第三方貼文、報導或觀看數。"
  },
  {
    id: "partnerships", type: "partnerships", label: "WAYS TO PARTICIPATE", title: "三種方式，\n一起參與 OPEN LAB。",
    intro: "可以贊助經費，也可以單純提供算力、獎品或專業內容。依投入方式，安排對應權益。",
    rows: [
      ["品牌贊助", "單場 NT$ 5／10／20 萬", "含展示空間、媒體內容，以及對應的分享或競賽權益。"],
      ["資源支持", "獎品、算力／API 額度、軟體授權、設備借用、餐飲等", "對應單元具名、產品介紹、現場致謝及全渠道聯合宣傳；不自動包含攤位。"],
      ["內容／社群合作", "Speaker、評審、主持、創作或社群招募", "依角色安排參與及合作曝光；不等同購買攤位或業配。"]
    ],
    rule: "展示攤位包含於品牌贊助方案。若希望以設備、獎品或服務交換攤位，可提出資源合作提案，由主辦方依活動需求及實際可用價值評估。",
    examples: [["算力／API 夥伴", "提供參賽者可用額度，搭配工具介紹與現場使用指引。"], ["獎品夥伴", "提供產品或正式授權，搭配品牌獎項、頒獎與得獎內容曝光。"], ["設備夥伴", "提供試玩設備，依供應規模洽談體驗區合作。"]],
    note: "資源依可使用人數、效期、兌換限制與實際需求評估，不以標價直接折抵現金贊助。"
  },
  {
    id: "scope", type: "scope", label: "SPONSORSHIP OPTIONS", title: "依單場規劃，\n按品牌目標組合。",
    intro: "台北場、香港場皆以單場報價；同時贊助兩場，另提供組合優惠。",
    tiers: [["體驗夥伴", "50,000"], ["單元夥伴", "100,000"], ["主要夥伴", "200,000"]],
    benefits: [
      ["現場展示", "標準展示位 1 席", "標準展示位 1 席", "主題體驗區 1 區"],
      ["舞台／競賽", "—", "15 分鐘分享／Demo，或品牌競賽獎項，擇一", "20 分鐘主題分享＋競賽或體驗單元共創"],
      ["專屬產品圖文", "1 篇", "1 篇", "1 篇"],
      ["專屬產品短影音", "—", "1 支", "1 支"],
      ["官網介紹", "合作夥伴專題內具名介紹", "品牌專文 1 篇", "品牌專文 1 篇"],
      ["現場品牌訪談短片", "—", "—", "1 支"],
      ["品牌入場名額", "2 位", "4 位", "8 位"]
    ],
    common: "所有方案皆含活動前、中、後宣傳，以及 Instagram、Threads、Facebook、官網與電子報的產品／服務介紹。",
    note: "社群內容依平台適配；官網、電子報採專文或具名段落，非各平台另製同等篇數。金額為新台幣／單場；稅額、攤位尺寸、電力、影片長度、修稿及授權範圍以正式報價附件為準。"
  },
  {
    id: "contact", type: "contact", label: "LET’S MAKE IT HAPPEN", title: "你想讓大家\n親手試試什麼？",
    intro: "告訴我們產品、參與場次與合作想法，一起選擇最適合的現場形式。",
    name: "Davin", org: "AI郵報／泊思智能", email: "davin@aiposthub.com", phone: "0928 910 214",
    cities: "台北場・瓶蓋工廠｜香港場・場地待定", date: "台北：2026/12/5（六）｜香港：預計 2026/12/19（六）",
    link: {label: "認識 AI郵報與更多案例", url: "https://deck.aiposthub.com/"},
    note: "台北館別與報到位置另行公布；香港日期、場地與各場合作內容將陸續確認。"
  }
];
