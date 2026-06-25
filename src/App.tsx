import { useEffect, useState } from "react";

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
  keywords?: string[];
};

type DirectoryItem = {
  title: string;
  text: string;
  href: string;
};

type SectionVariant =
  | "directory"
  | "compare"
  | "link-cards"
  | "tips"
  | "file"
  | "triad"
  | "research"
  | "commands"
  | "flow"
  | "prompts"
  | "fork-worktree"
  | "overview"
  | "summary"
  | "checklist";

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
  directory?: DirectoryItem[];
  promptTemplate?: string;
};

const directoryItems: DirectoryItem[] = [
  {
    title: "工具分工",
    text: "ChatGPT 与 Codex",
    href: "#compare",
  },
  {
    title: "使用准备",
    text: "网络代理与 Plus 渠道",
    href: "#vpn-network",
  },
  {
    title: "协作基础",
    text: "提示词、AGENTS.md、Skills",
    href: "#codex-tips",
  },
  {
    title: "外部链接",
    text: "MCP 与 CLI",
    href: "#mcp-matlab",
  },
  {
    title: "交付闭环",
    text: "GitHub、Netlify、自动化",
    href: "#github-netlify",
  },
  {
    title: "人类引导",
    text: "Worktree 与总结",
    href: "#human-guidance",
  },
];

const sections: Section[] = [
  {
    id: "route",
    navLabel: "目录",
    title: "目录",
    lead: "",
    variant: "directory",
    directory: directoryItems,
  },
  {
    id: "compare",
    navLabel: "区别",
    title: "从对话助手到编码智能体",
    lead: "通用顾问 vs 工程协作者。",
    variant: "compare",
    cards: [
      {
        title: "ChatGPT",
        text: "讨论、解释、写作、规划。",
        keywords: ["对话", "分析", "整理", "表达"],
      },
      {
        title: "Codex",
        text: "编码、调试、重构、验证。",
        keywords: ["代码", "终端", "仓库", "构建"],
      },
    ],
  },
  {
    id: "vpn-network",
    navLabel: "VPN",
    title: "网络代理软件推荐",
    lead: "稳定连接，减少中断。",
    variant: "link-cards",
    links: [
      {
        label: "Halsh Cloud",
        href: "https://lcc.halsh.cloud/#/store",
        text: "网络代理服务入口。",
      },
      {
        label: "zou加速",
        href: "https://www.zou666.net/#/shop",
        text: "网络代理套餐页面。",
      },
      {
        label: "一分机场",
        href: "https://xn--4gqx1hgtfdmt.com/#/plan",
        text: "网络代理计划页面。",
      },
    ],
  },
  {
    id: "plus-subscription",
    navLabel: "Plus",
    title: "Plus 代充渠道推荐",
    lead: "先解决账号权限，再进入稳定使用。",
    variant: "link-cards",
    items: ["淘宝", "闲鱼", "GitHub", "共享账号", "代充服务"],
    links: [
      {
        label: "86 Game Store",
        href: "https://shop.86gamestore.com/",
        text: "ChatGPT Plus 相关代充服务。",
      },
      {
        label: "橘子小铺",
        href: "https://gpt.juzixp.com/",
        text: "ChatGPT 账号与订阅服务。",
      },
    ],
  },
  {
    id: "codex-tips",
    navLabel: "技巧",
    title: "让 Codex 稳定工作的关键",
    lead: "目标清楚，边界清楚，验收清楚。",
    variant: "tips",
    cards: [
      {
        title: "目标",
        text: "要完成什么。",
      },
      {
        title: "上下文",
        text: "文件、报错、背景、数据。",
      },
      {
        title: "约束",
        text: "不要改什么。",
      },
      {
        title: "验收",
        text: "如何确认完成。",
      },
    ],
    promptTemplate: `目标：
请帮我完成……

上下文：
相关文件是……，当前问题是……

约束：
只修改……，不要改……

验收：
完成后请运行……，并总结修改内容。`,
  },
  {
    id: "agents-md",
    navLabel: "AGENTS.md",
    title: "AGENTS.md：写给 Agent 的项目说明书",
    lead: "把项目规则写清楚，让每次协作都有同一套边界。",
    variant: "file",
    image: {
      src: "/images/agents-md-card.png",
      alt: "AGENTS.md 文件卡片与项目规则连接示意图",
    },
    items: ["项目目标", "协作边界", "禁用事项", "技术约束", "验证方式", "交付格式"],
  },
  {
    id: "skills",
    navLabel: "Skills",
    title: "把重复流程沉淀为 Skills",
    lead: "重复任务，沉淀成可复用流程。",
    variant: "triad",
    cards: [
      {
        title: "安装",
        text: "用 $skill-installer。",
        keywords: ["可复用"],
      },
      {
        title: "制作",
        text: "用 $skill-creator。",
        keywords: ["流程沉淀"],
      },
      {
        title: "检索",
        text: "用 $技能名 或任务描述。",
        keywords: ["自动匹配"],
      },
    ],
  },
  {
    id: "mcp-matlab",
    navLabel: "MCP",
    title: "让 Codex 连接 MATLAB 与研究工具",
    lead: "连接工具，形成修改、计算、验证闭环。",
    variant: "research",
    cards: [
      {
        title: "Model Context Protocol",
        text: "连接模型与外部工具。",
      },
      {
        title: "MATLAB MCP",
        text: "运行脚本、检查报错、读取输出。",
      },
      {
        title: "研究场景",
        text: "模拟、实验数据、论文图表、参数扫描。",
      },
      {
        title: "优势",
        text: "减少复制粘贴，保留上下文。",
      },
    ],
  },
  {
    id: "cli",
    navLabel: "CLI",
    title: "CLI：终端工具与 GitHub CLI",
    lead: "用命令行进入项目，查看仓库、PR、构建和工作流状态。",
    variant: "commands",
    items: ["codex", "gh repo view", "gh pr status", "gh run list"],
    cards: [
      {
        title: "Codex CLI",
        text: "本地解释、批量修改、构建验证。",
      },
      {
        title: "GitHub CLI",
        text: "查看仓库、PR、Actions 状态。",
      },
    ],
  },
  {
    id: "github-netlify",
    navLabel: "GitHub / Netlify",
    title: "从代码修改到网页上线",
    lead: "GitHub 留痕，Netlify 上线。",
    variant: "flow",
    items: ["本地修改", "Git Commit", "Push 到 GitHub", "Netlify 自动构建", "线上访问"],
  },
  {
    id: "automation",
    navLabel: "自动化",
    title: "让 Agent 定时处理重复任务",
    lead: "周期性、可验证、边界清晰。",
    variant: "checklist",
    items: ["定期检查构建", "整理代码问题", "生成检查清单", "检查依赖更新", "汇总修改建议"],
  },
  {
    id: "human-guidance",
    navLabel: "人类引导",
    title: "人类不是旁观者，而是导演",
    lead: "方向、边界和判断，仍由人类决定。",
    variant: "prompts",
    items: ["先不要改代码，先给我计划", "这次只修改视觉样式，不要改内容", "请解释为什么要改这个文件", "请把任务拆成三个小步骤", "请运行构建并根据报错修复"],
  },
  {
    id: "fork-worktree",
    navLabel: "Fork / Worktree",
    title: "让多个任务安全并行",
    lead: "隔离任务，降低互相影响。",
    variant: "fork-worktree",
    cards: [
      {
        title: "Fork",
        text: "复制远程项目。",
      },
      {
        title: "Worktree",
        text: "独立工作现场。",
      },
      {
        title: "Handoff",
        text: "安全交接线程和代码。",
      },
      {
        title: "适用场景",
        text: "内容、样式、构建并行处理。",
      },
    ],
  },
  {
    id: "content-summary",
    navLabel: "内容总结",
    title: "网页内容总结",
    lead: "从准备、协作、扩展到交付，形成一条完整的 Agent 使用路线。",
    variant: "overview",
    cards: [
      {
        title: "工具分工",
        text: "ChatGPT 负责思考表达，Codex 负责工程执行。",
      },
      {
        title: "使用准备",
        text: "网络代理、Plus 渠道、账号权限先到位。",
      },
      {
        title: "协作基础",
        text: "目标、上下文、约束、验收写清楚。",
      },
      {
        title: "能力扩展",
        text: "AGENTS.md、Skills、MCP、CLI 固定流程。",
      },
      {
        title: "交付闭环",
        text: "GitHub 留痕，Netlify 预览，人类审查。",
      },
      {
        title: "风险隔离",
        text: "Worktree 并行处理，减少互相影响。",
      },
    ],
  },
  {
    id: "summary",
    navLabel: "总结",
    title: "AI Agent 工作流",
    lead: "把复杂任务拆成可执行、可验证、可回滚、可复用的工作流。",
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

function renderSectionContent(section: Section) {
  if (section.variant === "directory") {
    return (
      <div className="directory-grid">
        {section.directory?.map((item, index) => (
          <a href={item.href} key={item.title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{item.title}</strong>
            <p>{item.text}</p>
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

  if (section.variant === "link-cards") {
    return (
      <>
        {section.items && (
          <div className="tag-row">
            {section.items.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        )}
        {renderLinks(section.links)}
      </>
    );
  }

  if (section.variant === "tips") {
    return (
      <div className="tips-layout">
        <div className="feature-grid compact-grid">{section.cards?.map(renderCard)}</div>
        <pre className="prompt-template">{section.promptTemplate}</pre>
      </div>
    );
  }

  if (section.variant === "file") {
    return (
      <div className="file-board">
        <div className="rule-grid">
          {section.items?.map((item) => (
            <article className="rule-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
        {section.image && (
          <div className="file-image-card">
            <PresentationImage {...section.image} />
          </div>
        )}
      </div>
    );
  }

  if (section.variant === "flow") {
    return (
      <div className="flow-line">
        {section.items?.map((item, index) => (
          <article key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.variant === "prompts") {
    return (
      <div className="prompt-grid">
        {section.items?.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
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
        <div className="single-card">{section.cards?.map(renderCard)}</div>
      </>
    );
  }

  if (section.variant === "checklist") {
    return (
      <div className="point-grid">
        {section.items?.map((item, index) => (
          <article className="point-card" key={item}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <p>{item}</p>
          </article>
        ))}
      </div>
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sectionIds = ["home", ...sections.map((section) => section.id)];
    const observedSections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.12, 0.32, 0.56],
      },
    );

    observedSections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <header className="topbar" aria-label="页面导航">
        <a className="brand" href="#home" aria-label="返回首页">
          AI Agent
        </a>
        <nav className="nav-links" aria-label="章节导航">
          {navigation.map((item) => {
            const id = item.href.replace("#", "");

            return (
              <a key={item.href} href={item.href} className={activeSection === id ? "active" : undefined}>
                {item.label}
              </a>
            );
          })}
        </nav>
      </header>

      <main>
        <section className="hero section-panel" id="home">
          <img className="scu-logo" src="/images/scu_logo.png" alt="四川大学校徽与中英文校名" />
          <div className="hero-content">
            <h1>
              <span>AI Agent 应用分享</span>
              <span>
                以 <b>codex</b> 为例
              </span>
            </h1>
          </div>
          <div className="cover-meta" aria-label="分享人信息">
            <p>汇报人：刘于聪</p>
            <p>四川大学物理学院 | 核科学与技术</p>
            <p>日期：2026年6月26日</p>
          </div>
        </section>

        <div className="section-stack">
          {sections.map((section) => {
            const image = section.image;
            const hasAsideVisual = Boolean(image && section.variant !== "file");

            return (
              <section
                className={`section-panel content-section ${section.variant} ${hasAsideVisual ? "has-visual" : "text-only"}`}
                id={section.id}
                key={section.id}
              >
                <div className="section-layout">
                  <div className="section-main">
                    <div className="section-heading">
                      <h2>{section.title}</h2>
                      {section.lead && <p>{section.lead}</p>}
                    </div>
                    {renderSectionContent(section)}
                  </div>
                  {hasAsideVisual && image && (
                    <aside className="section-visual" aria-label={`${section.title}视觉区`}>
                      <PresentationImage {...image} />
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
