window.PPT_RADAR = {
  site: {
    name: "PPT 每日雷达",
    slogan: "每天帮企业人盯紧 PPT 工具、软件与设计动态，附一条能落地的建议",
    updated: "2026-08-13"
  },
  days: [
    {
      date: "2026-08-13",
      items: [
        {
          time: "08:40",
          source: "搜狐科技 · 引述 IDC 报告",
          heat: 90,
          category: "行业新闻",
          title: "IDC：AI PPT 企业渗透率环比涨 38%，但'内容失真'投诉率高达 52%",
          url: "https://www.sohu.com/a/1061921090_121886064",
          summary: "8 月 10 日 IDC 发布《2026 上半年中国 AI 办公工具市场跟踪报告》：AI PPT 类工具企业级渗透率环比增长 38% 创历史新高，同时用户对'内容数据失真''复杂页面难以编辑'的投诉率达 52%。",
          tags: ["IDC", "渗透率", "内容失真", "行业数据"],
          reason: "一半用户在抱怨同一件事——快是真快，但不敢直接用。这组数字给了你在公司内部推动'AI 初稿+人工核验'流程的硬依据。",
          action: "在团队里定一条规矩：AI 生成的 deck 凡带数字的页面，必须对照原始文档逐个核一遍再送审，别让'快'变成事故。"
        },
        {
          time: "09:20",
          source: "The AI Agent Index",
          heat: 88,
          category: "软件更新",
          title: "Claude for PowerPoint 现状盘点：模板感知最强，但企业审计日志仍缺位",
          url: "https://theaiagentindex.com/agents/claude-for-powerpoint",
          summary: "Anthropic 已在 3 月把 PowerPoint/Excel/Word/Outlook 插件统一为 Claude for Microsoft 365。它先读你的母版、字体、配色再生成原生可编辑元素，支持跨应用取数（Excel 拉数→塞进 deck 不破版）。Pro 年付 $17/月，低于 Copilot。",
          tags: ["Claude", "PowerPoint", "模板感知", "企业合规"],
          reason: "这是目前唯一把'先读你的模板再动手'做扎实的工具，但它至今不进企业审计日志和 Compliance API，金融、政务这类强监管场景过不了内审。",
          action: "个人或小团队可直接装来改现有 deck（Insert → 加载项搜 Claude）；受监管行业先问 IT 能不能过审，别自己偷偷装。"
        },
        {
          time: "10:05",
          source: "MOST · AI 简报工具实测",
          heat: 85,
          category: "工具动态",
          title: "免费 AI 做 PPT 的红利正在消退：Copilot 4 月已砍掉免费 AI 功能",
          url: "https://most.tw/posts/blog/ai-presentation-tools-comparison-2026/",
          summary: "五款主流工具实测复盘：Microsoft Copilot 2026 年 4 月移除免费 AI 功能；Plus AI、Beautiful.ai 从来没有真正免费版；Gamma 的 400 点免费额度是一次性的，用完不按月补充，只能靠邀请好友赚点。",
          tags: ["免费额度", "Copilot", "Gamma", "选型成本"],
          reason: "很多人还在按去年的认知'先用免费版顶着'，结果关键时刻额度归零。现在选工具要连账单一起选，不然会在交付前一天被卡住。",
          action: "把你常用那款工具的免费额度规则查清楚（一次性还是按月），重要汇报前先确认额度够，或提前申请一个月的付费预算。"
        },
        {
          time: "11:30",
          source: "Cognitive Future",
          heat: 82,
          category: "教程观点",
          title: "Tome 的前车之鉴：AI 演示工具会停服，重要 deck 必须导出留底",
          url: "https://cognitivefuture.ai/best-chatgpt-alternative-for-presentations",
          summary: "曾经火过的 Tome 在 2025 年 4 月 30 日关停 AI 幻灯片业务转做销售自动化，没提前导出的用户直接失去了自己的 deck。文章同时给出更稳的做法：用 ChatGPT 出逐页大纲，再丢进 Gamma 之类工具做设计，最后人工核数据、套品牌。",
          tags: ["工具停服", "数据留底", "桥接工作流", "风险"],
          reason: "AI 工具赛道洗牌很快，你的历史材料存在别人服务器上就是有风险。这不是杞人忧天，是已经发生过一次的事。",
          action: "凡是重要的 deck，做完当天就导一份 .pptx 或 PDF 存到本地/公司网盘，别只留在在线工具里。"
        },
        {
          time: "13:15",
          source: "Reworked",
          heat: 80,
          category: "行业新闻",
          title: "更多 AI 产出不等于更好结果：16% 的职场文档做完就没人看",
          url: "https://www.reworked.co/ai-platforms/openai-buys-nextslideai-to-upgrade-chatgpt-decks",
          summary: "文中引用 Smallpdf 研究：16% 的职业文档在被使用前就被弃置，平均每人每月因此浪费 5.7 小时。iTech AG 高管的评价很直接——'更多 AI 产出不等于更好的结果，我们在邮件、会议、PPT 上已经学过同一课'。",
          tags: ["生产力陷阱", "无效产出", "AI 反思"],
          reason: "AI 让做 deck 变便宜了，副作用是大家开始做更多没人看的 deck。格式漂亮的产出会给人'有进展'的错觉，但结论没往前推一步。",
          action: "动手做之前先问一句：这份材料是谁在什么会上要做什么决定？答不上来就别做，改发一段文字说清楚。"
        },
        {
          time: "14:50",
          source: "SlideGen · 设计趋势",
          heat: 77,
          category: "设计趋势",
          title: "2026 幻灯片标题写法变了：'Q3 业绩'要改成'Q3 营收增长 42%，来自企业客户'",
          url: "https://www.slidegen.net/blog/presentation-design-trends-2026",
          summary: "七大趋势里最能直接抄的一条：标题即结论，把'Q3 Results'换成'Q3 Revenue Grew 42%, Driven by Enterprise Expansion'。配套做法是 90% 页面保持深色克制，只用一处高对比亮色（柠檬绿、亮青）标住关键数字。",
          tags: ["标题即结论", "高对比强调", "暗色模式", "大字排版"],
          reason: "现在大部分 deck 是异步转发看的，没人在旁边讲。标题写成结论，材料被转到老板手机上时才能自己说清楚。",
          action: "今天就把你手头那份 deck 的每页标题过一遍，凡是名词短语（'销售情况''项目进展'）全改成带结论的完整句子。"
        },
        {
          time: "16:10",
          source: "MicroArts · 商务演示设计",
          heat: 74,
          category: "设计趋势",
          title: "模块化幻灯片块成企业标配：把常用页做成积木，下次直接拼",
          url: "https://microarts.biz/business-presentation-design-trends-for-2026-how-to-make-your-slides-stand-out",
          summary: "2026 企业演示七个方向中，'模块化 slide 块'最实在：把议程页、对比页、概览页、指标页做成可复用的预设版式组，按不同听众重新排列组合；同时用真实团队/流程照片替代握手类 stock 图。",
          tags: ["模块化", "可复用模板", "真实影像", "品牌一致"],
          reason: "企业里 80% 的汇报页型是重复的，每次从空白页开始纯属浪费。攒一套自己的积木，比学任何设计技巧都省时间。",
          action: "翻出你过去半年的 deck，挑出 6-8 页最常用的页型（议程、指标、对比、时间线）单独存成一个模板文件，下次直接调。"
        }
      ]
    },
    {
      date: "2026-08-12",
      items: [
        {
          time: "09:10",
          source: "Tekedia / ZAKER 科技",
          heat: 86,
          category: "软件更新",
          title: "Gemini 进 Google Slides：从 Drive 文件一键生成整套可编辑演示",
          url: "https://tekedia.com/best-powerpoint-generators-marketing-reports",
          summary: "Google 于 7/22 在 Slides 中上线全 deck 生成：附上 Docs/Sheets/PDF 或旧 deck，Gemini 先出大纲供审，确认后生成带图表、演讲者备注且风格一致的可编辑幻灯片。",
          tags: ["Gemini", "Google Slides", "AI 生成"],
          reason: "和 Copilot、ChatGPT 一样，巨头把'做 deck'塞进了你已在用的套件，Drive 党这条路最顺。",
          action: "若团队用 Google Workspace，下次周报/汇报直接试'附文档→生成'，省掉从零搭结构。"
        },
        {
          time: "09:40",
          source: "Microsoft Tech Community",
          heat: 88,
          category: "软件更新",
          title: "PowerPoint Copilot 7 月更新落地：品牌素材、自定义技能、评论协作",
          url: "https://techcommunity.microsoft.com/blog/Microsoft365CopilotBlog/what%E2%80%99s-new-in-microsoft-365-copilot--july-2026/4538332",
          summary: "8 月起陆续推送：可直接调用公司 Brand Kit 的 Logo/字体/主题；用户能把重复指令存成 OneDrive 自定义技能复用；Copilot 还能起草、回复、解决幻灯片内的评论。",
          tags: ["Copilot", "PowerPoint", "Brand Kit"],
          reason: "企业最痛的'风格不统一'开始被官方工具解决，自定义技能让常用改稿指令变成一键复用。",
          action: "若公司用 M365，让 IT 先配好 Brand Kit，并把'月度汇报模板'之类存成自定义技能，团队改稿效率会明显提升。"
        },
        {
          time: "08:30",
          source: "掘金 · 技术实测",
          heat: 88,
          category: "工具动态",
          title: "2026年8月 AI 生成 PPT 横评：6 款实测，'内容保真'成核心矛盾",
          url: "https://juejin.cn/post/7670883050946838543",
          summary: "用同一份含 32 个数值的 3000 字报告实测即触 AI PPT、WPS AI、Gamma、百度文库 AI、讯飞智文、豆包 PPT，发现 AI 省下的生成时间常被返工抵消。",
          tags: ["AI PPT", "横评", "内容保真", "返工"],
          reason: "把选型从'能不能生成'拉到'生成后要不要大改'，直接决定你到底省没省时间。",
          action: "内容不能出错选'保持原文'模式（即触 AI PPT 实测 32 个数据点零改写）；快速出视觉稿选 Gamma；日常 WPS 选 WPS AI。"
        },
        {
          time: "09:15",
          source: "IT之家 / 秀琴网",
          heat: 84,
          category: "软件更新",
          title: "WPS 2026 史诗级更新：存储管理重构，缓存可移出 C 盘",
          url: "https://www.xiuqin.com/article/6869.html",
          summary: "7月31日推送的 12.1.0.28022 新增统一'存储管理'入口，安装/备份/云缓存路径可分别设置，并从根上缓解 C 盘占用；PDF、表格、划词翻译同步增强。",
          tags: ["WPS", "存储管理", "C盘瘦身", "软件更新"],
          reason: "你之前就在清理 C 盘，这条和你的实际痛点直接相关——把缓存迁到非系统盘比反复手动清理更治本。",
          action: "更新 WPS 后在设置里把'文档备份'和'云文档缓存'路径改到 D 盘，C 盘空间焦虑一次解决。"
        },
        {
          time: "10:00",
          source: "站酷 · AI 日报",
          heat: 80,
          category: "软件更新",
          title: "Canva 可画免费版更新：Magic Design 自动生成多版模板",
          url: "https://zcool.com.cn/ai/daily-news",
          summary: "新增 AI 智能设计工具 Magic Design，输入文案自动产出多款设计模板；图片编辑器支持一键背景移除，团队实时协作与移动端适配同步增强，免费用户可试用部分 AI 功能。",
          tags: ["Canva", "Magic Design", "免费版", "协作"],
          reason: "免费开放 AI 功能进一步降低快速出稿门槛，对外宣讲、活动物料这类重视觉的活可以先用它试水。",
          action: "下次做活动海报或对外一页纸，先丢文案进 Magic Design 生成 3 版再挑，不用从空白页开始。"
        },
        {
          time: "11:20",
          source: "Kevin Lerner · 设计观察",
          heat: 82,
          category: "设计趋势",
          title: "2026 演示设计趋势：从'数据堆砌'转向'数据故事'",
          url: "https://kevinlerner.com/design-trends-in-2026-why-great-presentations-feel-different-now",
          summary: "大胆大字排版、Bento 网格、暗色模式、有机圆角布局成为主流；无障碍（大字号、高对比）成基线而非加分项；AI 定位是辅助而非主角。",
          tags: ["设计趋势", "数据故事", "大字排版", "无障碍"],
          reason: "观众要的是更快看懂不是更多信息，'少而准'的审美已成企业对内对外汇报的默认预期。",
          action: "做 deck 时每页只放一个洞察+大字标题，把 Excel 截图换成干净图表，深色汇报用暗色背景。"
        },
        {
          time: "13:40",
          source: "eWeek · 数据可视化实践",
          heat: 78,
          category: "教程观点",
          title: "2026 数据可视化最佳实践：单页单一洞察 + 锚定行动",
          url: "https://eweek.wfglobal.org/weekly/best-practices-slide-design-data-visualization-2026-895632",
          summary: "企业级标准：每页一个主洞察+一个支撑数据点并锚定建议行动；图表按类型选用（趋势用折线、对比用柱状）；每图附数据来源与日期，deck 像代码一样版本管理。",
          tags: ["数据可视化", "单页一洞察", "数据治理", "可决策"],
          reason: "把'数据→决策'的链路写进每页，汇报从展示信息变成推动结论，领导要的就是这个。",
          action: "数据页套用结构：发生了什么（标题即结论）+ 多大体量 + 为什么重要 + 下一步建议，并标注数据来源日期。"
        },
        {
          time: "15:10",
          source: "TechVernia · 工具评测",
          heat: 76,
          category: "工具动态",
          title: "Beautiful.ai 3.0 盘点：背靠 4500 万美元、Smart Slides 锁一致性",
          url: "http://techvernia.com/pages/reviews/writing/beautiful-ai.html",
          summary: "2026 初发布的 3.0 支持 15 种语言、协作增强，Smart Slides 引擎随内容自动重排布局、强制品牌一致性；公司获 General Catalyst 4500 万美元投资。",
          tags: ["Beautiful.ai", "Smart Slides", "品牌一致", "融资"],
          reason: "月报/销售素材'只改内容不动模板'的场景，它的自动对齐比自由排版工具更省心，但牺牲了自定义空间。",
          action: "若团队要统一对外模板又怕同事改坏版式，试用 Beautiful.ai 的 Smart Slides 锁定品牌规范。"
        }
      ]
    },
    {
      date: "2026-08-11",
      items: [
        {
          time: "09:30",
          source: "新浪财经 · 智东西",
          heat: 95,
          category: "行业新闻",
          title: "OpenAI 收购 AI PPT 创企 NextSlide，ChatGPT 要直接出演示文稿",
          url: "https://k.sina.com.cn/article_5953740931_162dee08306703ue16.html",
          summary: "OpenAI 完成对 NextSlide 收购，团队整体并入并参与 ChatGPT 开发。NextSlide 主打输入主题/笔记/文档即可生成可二次编辑的幻灯片。",
          tags: ["OpenAI", "NextSlide", "AI PPT"],
          reason: "巨头亲自下场，意味着 AI 生成演示文稿会成为大模型标配能力，PPT 制作的链路正在被重写。",
          action: "盯紧 ChatGPT PPT 功能落地节奏；短期仍把它当'初稿辅助'，重要汇报别直接交付 AI 成品。"
        },
        {
          time: "10:15",
          source: "Deckary · AI Tools Radar",
          heat: 85,
          category: "工具动态",
          title: "2026 AI 做 PPT 工具横向对比：可编辑不再是卖点，比的是工作流",
          url: "https://deckary.com/blog/ai-slide-generator",
          summary: "Gamma 出稿最快但导出要返工，Beautiful.ai 品牌一致性最强，Plus AI 适合原地改模板，Copilot 日常够用。",
          tags: ["Gamma", "Beautiful.ai", "Plus AI", "Copilot"],
          reason: "选型逻辑变了：从'能不能生成'变成'能不能跑完你的真实改稿流程'。",
          action: "按真实场景对号入座——常用 WPS/Office 选原地编辑型，要快速出初稿再精修选 Gamma。"
        },
        {
          time: "11:00",
          source: "WPS 官方",
          heat: 82,
          category: "软件更新",
          title: "WPS AI PPT 5–7 月连更：智能布局、意图澄清、边聊边改",
          url: "https://plus.wps.cn/blog/p106789.html",
          summary: "新增智能布局模式、生成前主动问清汇报对象与风格、大纲阶段即可边聊边改，并支持与 Excel 数据联动。",
          tags: ["WPS", "AI PPT", "智能布局"],
          reason: "国产主力迭代很快，且深度集成你日常用的 WPS，迁移成本最低。",
          action: "下次会议材料试试用 WPS AI 生成大纲再精修，尤其'保持原文'模式适合内容已定稿的汇报。"
        },
        {
          time: "13:20",
          source: "Microsoft · Prezentio",
          heat: 80,
          category: "软件更新",
          title: "PowerPoint 2026 新功能：Copilot、AI 图像编辑、全局语言校对",
          url: "https://prezentio.com/powerpoint-2026-ai-slide-design-tools-corporate",
          summary: "Copilot 可生成整 deck、AI 图像编辑能移除/移动图中物体、全局语言校对一处改全文拼写语言。",
          tags: ["PowerPoint", "Copilot", "Microsoft 365"],
          reason: "多数高级 AI 能力锁 Copilot 订阅，且桌面/Web 功能不均，企业部署要先规划。",
          action: "若公司用 M365，先确认 Copilot 授权再依赖这些功能，避免现场翻车。"
        },
        {
          time: "14:40",
          source: "SlideEgg · Kevin Lerner",
          heat: 78,
          category: "设计趋势",
          title: "2026 演示设计趋势：大字排版、Bento 网格、Dark Mode、数据故事化",
          url: "https://www.slideegg.com/blog/presentation-tips/the-7-presentation-design-trends-dominating-2026-data-backed/",
          summary: "便当盒布局、暗色模式、玻璃拟态、3D 图标、竖屏移动优先、交互非线性演示成为主流。",
          tags: ["设计趋势", "Bento", "Dark Mode", "数据故事化"],
          reason: "审美在从'填满'转向'少而准'，观众要的是更快看懂，不是更多信息。",
          action: "下次做 deck 试试一页一个洞察 + 大字标题，把 Excel 截图换成干净图表。"
        },
        {
          time: "15:30",
          source: "综合整理",
          heat: 75,
          category: "教程观点",
          title: "能直接套的 PPT 设计原则：每页一个想法、字体最多两种",
          url: "https://powerpoint.cloud.microsoft/create/zh-hans/blog/powerpoint-design-ideas",
          summary: "每页只讲一件事、大胆留白、做没有你也自解释的 deck、正文≥24pt、图标统一一种风格。",
          tags: ["设计原则", "可读性", "留白"],
          reason: "这些是性价比最高的'不丑'底线，不需要设计功底。",
          action: "把'每页一个想法 + 24pt 底线 + 两种字体'存成检查清单，做完过一遍。"
        }
      ]
    }
  ]
};
