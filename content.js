/* 每個物件是一頁。id 為穩定錨點；2026.09.17 確認單場贊助級距。 */
window.DECK_CONTENT = [
  {
    id: "cover", type: "cover", label: "Sponsorship & Partnership Deck", title: "AI郵報 100K OPEN LAB",
    headline: "把你的產品，\n帶進 AI 使用者的現場。",
    description: "AI郵報十萬讀者里程碑活動。邀請品牌、創作者與社群，一起帶來值得試玩、分享與交流的 AI 體驗。",
    cities: ["台北場 TAIPEI｜12/5（六）", "香港場 HONG KONG｜12 月・日期待定"], date: "2026.12.05", scale: "300+", scaleLabel: "每場規劃人數"
  },
  {
    id: "experience", type: "experience", label: "THE OPEN LAB", title: "一杯飲料的距離，\n認識下一位使用者。",
    intro: "帶著電腦來試玩，聽一場分享，參加一個挑戰。品牌團隊、創作者與 AI 使用者，在同一個空間交換想法。",
    items: [["開放體驗", "Booth 與 AI Playground 自由探索，產品團隊直接示範、解答問題。"], ["分享與競賽", "短講、Live Demo、創作挑戰穿插進行，讓產品成為話題與作品的一部分。"], ["音樂與交流", "AI Music、餐食與酒水，把聊天留到 17:30 之後。"]],
    image: "assets/open-lab-event-concept-web.jpg", caption: "AI 生成・活動情境模擬，非實際場地或活動紀錄；配置依最終場地規劃。",
    facts: "台北場：2026/12/5（六）／13:00 報到，13:30 開始；香港場：12 月週末，日期待定。"
  },
  {
    id: "reach", type: "reach", label: "AIPOST MEDIA", title: "現場之外，\n還有整個 AI郵報。",
    lead: ["31M+", "全渠道每月內容瀏覽"],
    metrics: [["102K+", "Instagram"], ["75K+", "Threads"], ["40K", "Facebook"], ["≈60%", "電子報開信率"]],
    foot: "內容涵蓋 AI 工具、科技產品、企業應用與產業趨勢。受眾分布台灣、香港、新馬及其他華語市場。",
    source: {label: "AI郵報媒體資料", url: "https://deck.aiposthub.com/?lang=zh#s2"},
    note: "媒體規模依品牌 Deck；社群追蹤數依 2026.09 主辦方更新。"
  },
  {
    id: "audience", type: "audience", label: "THE AUDIENCE", title: "品牌會遇到誰？",
    intro: "近期針對上百份的讀者深度調查，讓我們更了解這群 AI 使用者的需求。",
    groups: ["AI／科技從業者", "創作者與行銷人", "企業團隊與管理者", "知識工作者"],
    stats: [["74.5%", "已使用 AI 至少一年", "適合實際操作與進階應用示範。"], ["64.4%", "想加強 Agent 與工作流", "適合工具、平台與自動化案例。"], ["68.7%", "本機 AI 影響下一台電腦選擇", "適合 AI PC、GPU 與創作設備體驗。"]],
    source: {label: "2026 讀者調查・讀者自選樣本", url: "https://2026-aipost-survey.netlify.app/"}
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
    id: "program", type: "program", label: "WHAT HAPPENS HERE", title: "六個現場單元，\n都能找到品牌的位置。",
    items: [
      ["01", "AI Playground", "試玩 AI PC、工具、裝置與服務。", "攤位展示／設備／軟體體驗"],
      ["02", "Talks & Live Demo", "企業與創作者分享實作，現場示範。", "Speaker／主題分享／案例 Demo"],
      ["03", "Useless AI Challenge", "做一個沒什麼用、卻讓人想分享的 AI。", "競賽贊助／工具額度／品牌獎項"],
      ["04", "Postcards from 2036", "用影片、作品或原型想像十年後。", "創作命題／獎品／作品展示"],
      ["05", "AI Music & Live Coding", "即時生成音樂與視覺，搭配現場交流。", "表演單元／音訊設備／創作工具"],
      ["06", "Reader Report & Confessions", "發布 2026 讀者調查，展出匿名 AI 告解。", "議題對談／內容合作／現場互動"]
    ],
    note: "單元依場次與合作內容安排；研究數據與結論獨立呈現。"
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
    id: "visibility", type: "visibility", label: "INCLUDED FOR EVERY SPONSOR", title: "每位贊助商，\n都有全渠道產品介紹。",
    intro: "所有贊助均包含活動前、中、後的宣傳，以及企業產品或服務介紹。",
    channels: [
      {label: "Instagram", url: "https://www.instagram.com/aiposthub/"},
      {label: "Threads", url: "https://www.threads.com/@aiposthub"},
      {label: "Facebook", url: "https://www.facebook.com/aiposthub"},
      {label: "AI郵報官網", url: "https://www.aiposthub.com/"},
      {label: "電子報"}
    ],
    items: [
      ["介紹你的產品", "說清楚產品用途、適合誰使用，以及現場可以體驗什麼。"],
      ["帶出現場參與", "記錄展示、分享、競賽與作品，延伸成可傳播的內容。"],
      ["提供後續入口", "附上產品連結或體驗資訊，讓有興趣的讀者繼續了解。"]
    ],
    note: "各平台採合適形式發布；專屬內容、聯合介紹、篇數與影音製作範圍依合作方案確認。"
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
    cities: "台北場 · 香港場", date: "台北：2026/12/5（六）｜香港：12 月週末，日期待定", scale: "每場 300 人起規劃",
    link: {label: "認識 AI郵報與更多案例", url: "https://deck.aiposthub.com/"},
    note: "台北日期已定；場地、香港日期與各場合作內容將陸續公布。"
  }
];
