import { useEffect, useState } from "react";

type ImageAsset = {
  src: string;
  alt: string;
};

type LinkItem = {
  label: string;
  href: string;
  text: string;
  icon?: IconName;
};

type Card = {
  title: string;
  text: string;
  keywords?: string[];
  icon?: IconName;
};

type DirectoryItem = {
  title: string;
  text: string;
  href: string;
  icon: IconName;
};

type IconName =
  | "message"
  | "code"
  | "network"
  | "wallet"
  | "target"
  | "layers"
  | "lock"
  | "check"
  | "file"
  | "download"
  | "wand"
  | "search"
  | "plug"
  | "terminal"
  | "git"
  | "cloud"
  | "clock"
  | "branch"
  | "route"
  | "shield"
  | "refresh"
  | "rocket";

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
  | "fork-worktree"
  | "overview"
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
    icon: "message",
  },
  {
    title: "使用准备",
    text: "网络代理与 Plus 渠道",
    href: "#vpn-network",
    icon: "network",
  },
  {
    title: "协作基础",
    text: "提示词、AGENTS.md、Skills",
    href: "#codex-tips",
    icon: "target",
  },
  {
    title: "外部链接",
    text: "MCP 与 CLI",
    href: "#mcp-matlab",
    icon: "plug",
  },
  {
    title: "版本管理与部署",
    text: "GitHub、Netlify、自动化",
    href: "#github-netlify",
    icon: "git",
  },
  {
    title: "风险隔离",
    text: "Fork / Worktree 与总结",
    href: "#fork-worktree",
    icon: "shield",
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
    image: {
      src: "/my_images/gptvscodex.png",
      alt: "ChatGPT 与 Codex 工作方式对比截图",
    },
    cards: [
      {
        title: "ChatGPT",
        text: "讨论、解释、写作、规划。",
        keywords: ["对话", "分析", "整理", "表达"],
        icon: "message",
      },
      {
        title: "Codex",
        text: "编码、调试、重构、验证。",
        keywords: ["代码", "终端", "仓库", "构建"],
        icon: "code",
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
        icon: "network",
      },
      {
        label: "zou加速",
        href: "https://www.zou666.net/#/shop",
        text: "网络代理套餐页面。",
        icon: "network",
      },
      {
        label: "一分机场",
        href: "https://xn--4gqx1hgtfdmt.com/#/plan",
        text: "网络代理计划页面。",
        icon: "network",
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
        icon: "wallet",
      },
      {
        label: "橘子小铺",
        href: "https://gpt.juzixp.com/",
        text: "ChatGPT 账号与订阅服务。",
        icon: "wallet",
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
        icon: "target",
      },
      {
        title: "上下文",
        text: "文件、报错、背景、数据。",
        icon: "layers",
      },
      {
        title: "约束",
        text: "不要改什么。",
        icon: "lock",
      },
      {
        title: "验收",
        text: "如何确认完成。",
        icon: "check",
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
        icon: "download",
      },
      {
        title: "制作",
        text: "用 $skill-creator。",
        keywords: ["流程沉淀"],
        icon: "wand",
      },
      {
        title: "检索",
        text: "用 $技能名 或任务描述。",
        keywords: ["自动匹配"],
        icon: "search",
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
        icon: "plug",
      },
      {
        title: "MATLAB MCP",
        text: "运行脚本、检查报错、读取输出。",
        icon: "terminal",
      },
      {
        title: "研究场景",
        text: "模拟、实验数据、论文图表、参数扫描。",
        icon: "layers",
      },
      {
        title: "优势",
        text: "减少复制粘贴，保留上下文。",
        icon: "refresh",
      },
    ],
  },
  {
    id: "cli",
    navLabel: "GitHub CLI",
    title: "GitHub CLI：用命令行查看交付状态",
    lead: "在终端里查看仓库、PR、构建和工作流状态。",
    variant: "commands",
    items: ["gh repo view", "gh pr status", "gh run list"],
    cards: [
      {
        title: "GitHub CLI",
        text: "查看仓库、PR、Actions 状态。",
        icon: "terminal",
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
    id: "fork-worktree",
    navLabel: "Fork / Worktree",
    title: "让多个任务安全并行",
    lead: "隔离任务，降低互相影响。",
    variant: "fork-worktree",
    cards: [
      {
        title: "Fork",
        text: "复制远程项目。",
        icon: "git",
      },
      {
        title: "Worktree",
        text: "独立工作现场。",
        icon: "branch",
      },
      {
        title: "Handoff",
        text: "安全交接线程和代码。",
        icon: "shield",
      },
      {
        title: "适用场景",
        text: "内容、样式、构建并行处理。",
        icon: "layers",
      },
    ],
  },
  {
    id: "content-summary",
    navLabel: "总结",
    title: "总结",
    lead: "从准备、协作、扩展到交付，形成一条完整的 Agent 使用路线。",
    variant: "overview",
    cards: [
      {
        title: "工具分工",
        text: "ChatGPT 负责思考表达，Codex 负责工程执行。",
        icon: "message",
      },
      {
        title: "使用准备",
        text: "网络代理、Plus 渠道、账号权限先到位。",
        icon: "network",
      },
      {
        title: "协作基础",
        text: "目标、上下文、约束、验收写清楚。",
        icon: "target",
      },
      {
        title: "能力扩展",
        text: "AGENTS.md、Skills、MCP、CLI 固定流程。",
        icon: "plug",
      },
      {
        title: "版本管理与部署",
        text: "GitHub 留痕，Netlify 预览，人类审查。",
        icon: "cloud",
      },
      {
        title: "风险隔离",
        text: "Worktree 并行处理，减少互相影响。",
        icon: "shield",
      },
    ],
  },
];

const navigation = [
  { href: "#home", label: "首页" },
  ...sections.map((section) => ({ href: `#${section.id}`, label: section.navLabel })),
];

const itemIconMap: Record<string, IconName> = {
  项目目标: "target",
  协作边界: "shield",
  禁用事项: "lock",
  技术约束: "code",
  验证方式: "check",
  交付格式: "file",
  定期检查构建: "clock",
  整理代码问题: "code",
  生成检查清单: "check",
  检查依赖更新: "refresh",
  汇总修改建议: "file",
  本地修改: "code",
  "Git Commit": "git",
  "Push 到 GitHub": "branch",
  "Netlify 自动构建": "cloud",
  线上访问: "rocket",
};

function iconForText(text: string): IconName {
  if (itemIconMap[text]) {
    return itemIconMap[text];
  }

  if (text.startsWith("gh ")) {
    return "terminal";
  }

  return "file";
}

function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string[]> = {
    message: ["M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v6A2.5 2.5 0 0 1 17.5 15H10l-4.5 4v-4A2.5 2.5 0 0 1 4 12.5z"],
    code: ["M8.5 8 5 12l3.5 4", "M15.5 8 19 12l-3.5 4", "M13.5 5.5 10.5 18.5"],
    network: ["M7 7.5h10", "M7 16.5h10", "M8 7.5a4 4 0 0 0 0 9", "M16 7.5a4 4 0 0 1 0 9"],
    wallet: ["M4 7.5A2.5 2.5 0 0 1 6.5 5H18v14H6.5A2.5 2.5 0 0 1 4 16.5z", "M16 11h4v4h-4a2 2 0 0 1 0-4z"],
    target: ["M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z", "M12 12h.01"],
    layers: ["M12 3.5 21 8l-9 4.5L3 8z", "M5 12l7 3.5 7-3.5", "M5 16l7 3.5 7-3.5"],
    lock: ["M7 10V8a5 5 0 0 1 10 0v2", "M6.5 10h11v9h-11z", "M12 14v2"],
    check: ["M5 12.5 9.5 17 19 7"],
    file: ["M7 3.5h7l3 3V20H7z", "M14 3.5V7h3", "M9.5 11h5", "M9.5 15h5"],
    download: ["M12 4v9", "M8.5 9.5 12 13l3.5-3.5", "M5 18.5h14"],
    wand: ["M14.5 4.5 19.5 9.5", "M13 6 18 11", "M4.5 19.5 14.5 9.5", "M5 5.5h.01", "M18.5 18h.01", "M9 3.5h.01"],
    search: ["M11 17a6 6 0 1 0 0-12 6 6 0 0 0 0 12z", "M15.5 15.5 20 20"],
    plug: ["M8 4v5", "M16 4v5", "M7 9h10v3a5 5 0 0 1-10 0z", "M12 17v3"],
    terminal: ["M5 7.5 9 11.5 5 15.5", "M11 16.5h8"],
    git: ["M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M7 7v5a5 5 0 0 0 5 5h3", "M15 7l3-3 3 3", "M18 4v10"],
    cloud: ["M7.5 18.5h9.5a4 4 0 0 0 .4-8 6 6 0 0 0-11.6 1.5A3.5 3.5 0 0 0 7.5 18.5z"],
    clock: ["M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z", "M12 8v4.5l3 1.5"],
    branch: ["M7 5a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M17 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4z", "M7 9v2a6 6 0 0 0 6 6h2", "M7 11h7a3 3 0 0 0 3-3V5"],
    route: ["M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M19 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z", "M7 5h5a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8h8"],
    shield: ["M12 3.5 19 6v5.5c0 4-2.7 7.1-7 9-4.3-1.9-7-5-7-9V6z", "M9 12l2 2 4-4"],
    refresh: ["M19 8a7 7 0 0 0-12-2l-2 2", "M5 4v4h4", "M5 16a7 7 0 0 0 12 2l2-2", "M19 20v-4h-4"],
    rocket: ["M12 15 9 12c1-4 4-7 9-8-1 5-4 8-8 9z", "M9 12l-4 1 3 3 1-4z", "M12 15l-1 4 3-1 1-4z"],
  };

  return (
    <svg className="ui-icon" viewBox="0 0 24 24" aria-hidden="true">
      {paths[name].map((path) => (
        <path d={path} key={path} />
      ))}
    </svg>
  );
}

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
      <div className="card-title">
        {card.icon && <Icon name={card.icon} />}
        <span>{card.title}</span>
      </div>
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
          <div className="card-title">
            {link.icon && <Icon name={link.icon} />}
            <span>{link.label}</span>
          </div>
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
            <div className="directory-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon name={item.icon} />
            </div>
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
            <div className="card-title">
              {card.icon && <Icon name={card.icon} />}
              <span>{card.title}</span>
            </div>
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
              <Icon name={iconForText(item)} />
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
            <div className="flow-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon name={iconForText(item)} />
            </div>
            <p>{item}</p>
          </article>
        ))}
      </div>
    );
  }

  if (section.variant === "commands") {
    return (
      <>
        <div className="command-grid">
          {section.items?.map((item) => (
            <code key={item}>
              <Icon name={iconForText(item)} />
              <span>{item}</span>
            </code>
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
            <div className="flow-meta">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <Icon name={iconForText(item)} />
            </div>
            <p>{item}</p>
          </article>
        ))}
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

  useEffect(() => {
    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".hero-content, .cover-meta, .section-heading, .feature-card, .compare-card, .point-card, .rule-card, .link-grid a, .directory-grid a, .flow-line article, .command-grid code, .section-visual, .file-image-card, .prompt-template, .tag-row span",
    );

    revealTargets.forEach((target, index) => {
      target.classList.add("reveal");
      target.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 42}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    revealTargets.forEach((target) => revealObserver.observe(target));

    return () => revealObserver.disconnect();
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
