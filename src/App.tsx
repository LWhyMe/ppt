import { useState } from "react";

type ImageAsset = {
  src: string;
  alt: string;
};

type LinkItem = {
  label: string;
  href: string;
  text: string;
};

type Card = {
  title: string;
  text: string;
  example?: string;
  keywords?: string[];
  links?: LinkItem[];
};

type SectionVariant =
  | "route"
  | "compare"
  | "checklist"
  | "links"
  | "cases"
  | "file"
  | "triad"
  | "research"
  | "commands"
  | "flow"
  | "prompts"
  | "fork-worktree"
  | "summary";

type Section = {
  id: string;
  navLabel: string;
  title: string;
  lead: string;
  variant: SectionVariant;
  image?: ImageAsset;
  cards?: Card[];
  items?: string[];
  links?: LinkItem[];
};

const routeItems = [
  "ChatGPT 与 Codex 的区别",
  "VPN 与网络环境",
  "Plus 订阅渠道",
  "Codex 使用技巧",
  "AGENTS.md 与项目上下文",
  "Skills 的安装、制作与检索",
  "MCP 与工科研究生工作流",
  "CLI 是什么、有什么用、怎么用",
  "GitHub 与 Netlify",
  "自动化任务",
  "人类如何引导 Agent",
  "Fork / Worktree",
  "总结",
];

const sections: Section[] = [
  {
    id: "route",
    navLabel: "目录",
    title: "分享路线",
    lead: "这次分享从工具分工开始，先完成网络和订阅准备，再进入 Codex 工作流、扩展能力和交付方法。",
    variant: "route",
    items: routeItems,
  },
  {
    id: "compare",
    navLabel: "区别",
    title: "从对话助手到编码智能体",
    lead: "ChatGPT 更像通用顾问，Codex 更像工程协作者。两者是分工关系，不是替代关系。",
    variant: "compare",
    image: {
      src: "/images/chatgpt-codex-compare.png",
      alt: "对话顾问与编码智能体的左右对比插图",
    },
    cards: [
      {
        title: "ChatGPT",
        text: "适合思考、解释、写作、规划。",
        keywords: ["对话", "分析", "整理", "表达"],
      },
      {
        title: "Codex",
        text: "适合编码、调试、重构、验证。",
        keywords: ["代码", "终端", "仓库", "构建"],
      },
    ],
  },
  {
    id: "vpn-network",
    navLabel: "VPN",
    title: "稳定、合规的网络环境",
    lead: "AI Agent 工作依赖稳定连接、账号安全和合规使用。网络环境不是越复杂越好，而是要稳定、安全、可持续。",
    variant: "checklist",
    items: ["稳定性：减少中断", "合规性：遵守学校和平台规则", "安全性：不使用来源不明客户端", "隐私性：不泄露敏感数据", "可维护性：选择自己能长期管理的方案"],
    cards: [
      {
        title: "案例",
        text: "运行 Codex 处理论文图表脚本前，先确认网络稳定，避免依赖安装、文档检索或远程工具调用中断。",
      },
    ],
  },
  {
    id: "plus-subscription",
    navLabel: "Plus",
    title: "Plus 订阅渠道",
    lead: "使用 ChatGPT 与 Codex 前，应先确认账号权限、订阅状态和官方入口。订阅相关信息以官方页面为准。",
    variant: "links",
    items: ["了解不同计划的能力范围", "查看 Plus 订阅入口", "阅读 Plus 官方说明", "不要购买来路不明的共享账号或代充服务"],
    links: [
      {
        label: "ChatGPT Pricing",
        href: "https://chatgpt.com/pricing/",
        text: "查看官方计划与价格信息。",
      },
      {
        label: "ChatGPT Plus",
        href: "https://chatgpt.com/plans/plus/",
        text: "进入 Plus 订阅页面。",
      },
      {
        label: "Plus FAQ",
        href: "https://help.openai.com/en/articles/6950777-what-is-chatgpt-plus",
        text: "阅读 OpenAI Help Center 官方说明。",
      },
    ],
  },
  {
    id: "codex-tips",
    navLabel: "技巧",
    title: "让 Codex 稳定工作的关键",
    lead: "Codex 不只是回答问题，而是可以进入项目、执行任务、运行命令和验证结果。给 Codex 的任务越清楚，结果越稳定。",
    variant: "cases",
    cards: [
      {
        title: "目标",
        text: "说明想让 Codex 完成什么。",
        example: "请把这段数据处理脚本重构成函数，并保持输出一致。",
      },
      {
        title: "上下文",
        text: "提供文件、报错、论文背景或数据说明。",
        example: "把 MATLAB 报错、输入数据格式和目标图形一起给 Codex。",
      },
      {
        title: "约束",
        text: "限定不要做什么。",
        example: "这次只改绘图样式，不改数据计算逻辑，不碰部署配置。",
      },
      {
        title: "验收",
        text: "说明任务完成后如何确认。",
        example: "修改网页后运行 npm run build，并总结改了哪些文件。",
      },
      {
        title: "先计划再执行",
        text: "复杂任务先让 Codex 访谈和规划。",
        example: "制作毕业论文图表自动化流程前，先让 Codex 拆分步骤和风险。",
      },
    ],
  },
  {
    id: "agents-md",
    navLabel: "AGENTS.md",
    title: "AGENTS.md：写给 Agent 的项目说明书",
    lead: "AGENTS.md 用于固定项目规则，让 Codex 每次开始工作时都能理解项目背景、风格要求、技术约束和交付格式。",
    variant: "file",
    image: {
      src: "/images/agents-md-card.png",
      alt: "AGENTS.md 文件卡片与项目规则连接示意图",
    },
    items: ["项目是什么", "页面风格是什么", "哪些词不能出现在页面上", "常用命令是什么", "修改后如何验证", "最后如何总结"],
    cards: [
      {
        title: "案例",
        text: "在本分享网页中，AGENTS.md 明确要求先读取 PROJECT_REQUIREMENTS.md、不要出现开发过程用语、修改后运行构建命令。",
      },
    ],
  },
  {
    id: "skills",
    navLabel: "Skills",
    title: "把重复流程沉淀为 Skills",
    lead: "Skills 是可复用工作流。它们把某类任务的步骤、注意事项和资源打包起来，让 Codex 在遇到相似任务时更稳定。",
    variant: "triad",
    cards: [
      {
        title: "安装",
        text: "用 $skill-installer 安装可复用技能。",
        example: "安装论文阅读、演示文稿制作或表格处理相关技能。",
        keywords: ["安装", "复用"],
      },
      {
        title: "制作",
        text: "用 $skill-creator 把重复流程沉淀成技能。",
        example: "把论文图表统一美化导出的流程做成自己的 skill。",
        keywords: ["制作", "沉淀"],
      },
      {
        title: "检索",
        text: "用 $技能名 或任务描述让 Codex 自动匹配。",
        example: "输入“用论文图表 skill 优化这张图”，让 Codex 读取对应 SKILL.md。",
        keywords: ["调用", "匹配"],
      },
    ],
  },
  {
    id: "mcp-matlab",
    navLabel: "MCP",
    title: "让 Codex 连接 MATLAB 与研究工具",
    lead: "MCP 让 Codex 连接外部工具和上下文。对工科研究生来说，价值在于把代码修改、计算验证、图形输出和上下文说明连起来。",
    variant: "research",
    cards: [
      {
        title: "MCP",
        text: "连接模型与工具、文档、数据或软件环境。",
      },
      {
        title: "MATLAB MCP",
        text: "让 Codex 调用 MATLAB，运行脚本、检查报错、读取输出。",
      },
      {
        title: "研究场景",
        text: "适合数值模拟、实验数据处理、论文图表生成、批量参数扫描。",
      },
      {
        title: "优势",
        text: "减少手动复制报错，保留上下文，让修改和验证形成闭环。",
        example: "Codex 通过 MCP 调用 MATLAB 运行脚本，定位变量维度问题，修改代码，再重新运行验证图形输出。",
      },
    ],
  },
  {
    id: "cli",
    navLabel: "CLI",
    title: "CLI：终端里的 Codex",
    lead: "CLI 是命令行界面。Codex CLI 让 Codex 在终端中进入本地项目，读取文件、修改代码、运行命令并恢复会话。",
    variant: "commands",
    items: ["codex", "codex \"Explain this codebase to me\"", "codex resume --last"],
    cards: [
      {
        title: "适用场景",
        text: "本地代码解释、批量修改、构建验证、脚本调试。",
      },
      {
        title: "案例",
        text: "在数据处理项目中，先让 Codex 解释目录结构，再让它修复报错并运行测试。",
      },
    ],
  },
  {
    id: "github-netlify",
    navLabel: "GitHub / Netlify",
    title: "从代码修改到网页上线",
    lead: "GitHub 负责代码留痕、协作和回滚。Netlify 负责自动构建、预览和上线。",
    variant: "flow",
    image: {
      src: "/images/github-netlify-flow.png",
      alt: "从本地修改到线上访问的部署流程插图",
    },
    items: ["本地修改", "Git Commit", "Push 到 GitHub", "Netlify 自动构建", "线上访问"],
    cards: [
      {
        title: "案例",
        text: "Codex 修改网页内容后，先本地构建，再提交到 GitHub。Netlify 自动生成 Deploy Preview，用于检查正式页面效果。",
      },
    ],
  },
  {
    id: "automation",
    navLabel: "自动化",
    title: "让 Agent 定时处理重复任务",
    lead: "自动化适合周期性、可验证、边界清晰的任务。自动化不是完全放手，关键任务仍需要人类审查。",
    variant: "checklist",
    items: ["定期检查项目是否能构建", "整理代码问题", "生成演示前检查清单", "检查依赖更新", "汇总修改建议"],
    cards: [
      {
        title: "案例",
        text: "每周让 Codex 检查一次网页构建状态和依赖风险，生成简短报告，由人类决定是否修改。",
      },
    ],
  },
  {
    id: "human-guidance",
    navLabel: "人类引导",
    title: "人类不是旁观者，而是导演",
    lead: "Agent 可以执行任务，但方向、边界和判断仍需要人类引导。",
    variant: "prompts",
    items: ["先不要改代码，先给我计划", "这次只修改视觉样式，不要改内容", "请解释为什么要改这个文件", "请把任务拆成三个小步骤", "请运行构建并根据报错修复"],
    cards: [
      {
        title: "案例",
        text: "如果 Codex 改动范围过大，人类可以要求它暂停、说明差异、缩小范围，并只保留与目标直接相关的修改。",
      },
    ],
  },
  {
    id: "fork-worktree",
    navLabel: "Fork / Worktree",
    title: "让多个任务安全并行",
    lead: "Fork 和 Worktree 都能降低修改风险，但它们服务于不同场景。这里重点讲 Codex app 中的 Worktree 工作方式。",
    variant: "fork-worktree",
    cards: [
      {
        title: "Fork",
        text: "复制远程项目，用于独立探索或参与开源项目。",
      },
      {
        title: "Worktree",
        text: "Codex app 中用于并行任务的独立工作现场。",
      },
      {
        title: "Handoff",
        text: "把线程和代码在 Local 与 Worktree 之间安全移动。",
      },
      {
        title: "案例",
        text: "一个线程优化网页文案，另一个线程检查样式和构建。确认无冲突后，再把需要的线程交接回 Local。",
      },
    ],
  },
  {
    id: "summary",
    navLabel: "总结",
    title: "AI Agent 工作流",
    lead: "真正重要的不是让 AI 替我们完成所有事，而是学会把复杂任务拆成可执行、可验证、可回滚、可复用的工作流。",
    variant: "summary",
    cards: [
      {
        title: "说清楚",
        text: "目标、上下文、约束、验收。",
      },
      {
        title: "管得住",
        text: "AGENTS.md、Skills、MCP、CLI。",
      },
      {
        title: "可回退",
        text: "Git 留痕、Worktree 并行、人类审查。",
      },
    ],
  },
];

const navigation = [
  { href: "#home", label: "首页" },
  ...sections.map((section) => ({ href: `#${section.id}`, label: section.navLabel })),
];

function PresentationImage({ src, alt }: ImageAsset) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="image-fallback" role="img" aria-label={alt}>
        <div className="fallback-window">
          <span />
          <span />
          <span />
        </div>
        <div className="fallback-lines">
          <i />
          <i />
          <i />
        </div>
      </div>
    );
  }

  return <img className="presentation-image" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}

function renderCard(card: Card) {
  return (
    <article className="feature-card" key={card.title}>
      <span>{card.title}</span>
      <p>{card.text}</p>
      {card.example && <p className="example-text">案例：{card.example}</p>}
      {card.keywords && (
        <div>
          {card.keywords.map((keyword) => (
            <b key={keyword}>{keyword}</b>
          ))}
        </div>
      )}
    </article>
  );
}

function renderLinks(links: LinkItem[] = []) {
  return (
    <div className="link-grid">
      {links.map((link) => (
        <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
          <span>{link.label}</span>
          <p>{link.text}</p>
        </a>
      ))}
    </div>
  );
}

function renderSectionVisual(section: Section) {
  if (section.image) {
    return <PresentationImage {...section.image} />;
  }

  if (section.variant === "links") {
    return <div className="link-visual">{renderLinks(section.links)}</div>;
  }

  return null;
}

function hasSectionVisual(section: Section) {
  return Boolean(section.image);
}

function renderSectionContent(section: Section) {
  if (section.variant === "route") {
    return (
      <div className="route-grid">
        {section.items?.map((item, index) => (
          <a href={`#${sections[index + 1]?.id ?? "summary"}`} key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item}
          </a>
        ))}
      </div>
    );
  }

  if (section.variant === "compare") {
    return (
      <div className="compare-grid" aria-label="ChatGPT 与 Codex 对比">
        {section.cards?.map((card) => (
          <article className="compare-card" key={card.title}>
            <span>{card.title}</span>
            <p>{card.text}</p>
            <div>
              {card.keywords?.map((keyword) => (
                <b key={keyword}>{keyword}</b>
              ))}
            </div>
          </article>
        ))}
      </div>
    );
  }

  if (section.variant === "flow") {
    return (
      <>
        <div className="flow-line">
          {section.items?.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="single-card">{section.cards?.map(renderCard)}</div>
      </>
    );
  }

  if (section.variant === "links") {
    return (
      <>
        <div className="point-grid">
          {section.items?.map((item, index) => (
            <article className="point-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="official-link-block">{renderLinks(section.links)}</div>
      </>
    );
  }

  if (section.variant === "checklist") {
    return (
      <>
        <div className="point-grid">
          {section.items?.map((item, index) => (
            <article className="point-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
        <div className="single-card">{section.cards?.map(renderCard)}</div>
      </>
    );
  }

  if (section.variant === "prompts") {
    return (
      <>
        <div className="prompt-grid">
          {section.items?.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="single-card">{section.cards?.map(renderCard)}</div>
      </>
    );
  }

  if (section.variant === "commands") {
    return (
      <>
        <div className="command-grid">
          {section.items?.map((item) => (
            <code key={item}>{item}</code>
          ))}
        </div>
        <div className="feature-grid">{section.cards?.map(renderCard)}</div>
      </>
    );
  }

  if (section.variant === "summary") {
    return (
      <div className="summary-formula">
        <div className="summary-points">{section.cards?.map(renderCard)}</div>
      </div>
    );
  }

  return <div className="feature-grid">{section.cards?.map(renderCard)}</div>;
}

function App() {
  return (
    <div className="page-shell">
      <header className="topbar" aria-label="页面导航">
        <a className="brand" href="#home" aria-label="返回首页">
          AI Agent
        </a>
        <nav className="nav-links" aria-label="章节导航">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero section-panel" id="home">
          <div className="hero-content">
            <h1>AI AGENT 应用分享</h1>
            <div className="hero-meta" aria-label="分享人信息">
              <span>刘于聪</span>
              <span>四川大学物理学院</span>
              <span>核科学与技术</span>
              <span>2026 年 6 月 26 日</span>
            </div>
            <p className="hero-lead">从对话、编码到部署，理解 AI Agent 如何进入真实工作流。</p>
            <div className="hero-actions">
              <a className="primary-link" href="#route">
                查看路线
              </a>
              <a className="secondary-link" href="#summary">
                跳到总结
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <PresentationImage src="/images/agent-workflow.png" alt="AI Agent 从对话到编码再到部署的抽象工作流插图" />
          </div>
        </section>

        <div className="section-stack">
          {sections.map((section) => {
            const hasVisual = hasSectionVisual(section);

            return (
              <section
                className={`section-panel content-section ${section.variant} ${hasVisual ? "has-visual" : "text-only"}`}
                id={section.id}
                key={section.id}
              >
                <div className="section-layout">
                  <div className="section-main">
                    <div className="section-heading">
                      <h2>{section.title}</h2>
                      <p>{section.lead}</p>
                    </div>
                    {renderSectionContent(section)}
                  </div>
                  {hasVisual && (
                    <aside className="section-visual" aria-label={`${section.title}视觉区`}>
                      {renderSectionVisual(section)}
                    </aside>
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
