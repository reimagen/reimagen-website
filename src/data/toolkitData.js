export const explorerStarter = [
  {
    name: 'ChatGPT',
    description:
      'Generalist teammate for brainstorms, planning, and drafting copy. Most useful for casual, conversational, human-like tone.',
    link: 'https://chat.openai.com/',
    cta: 'Open ChatGPT',
  },
  {
    name: 'Claude',
    description:
      'Professional-level guidance for strategy docs and nuance-heavy writing. Feed it PDFs or transcripts to summarize instantly.',
    link: 'https://claude.ai/',
    cta: 'Try Claude',
  },
  {
    name: 'Perplexity',
    description:
      'Deep Researcher that cites its sources. Ask for market scans, competitor comparisons, or customer research outlines.',
    link: 'https://www.perplexity.ai/',
    cta: 'Search with Perplexity',
  },
];

export const builderCategories = [
  {
    kicker: 'IDE stack',
    items: [
      {
        name: 'Cursor',
        description: 'Repo-aware chat, multi-file planning, test runs, and PR drafting all inside one AI-native workspace.',
        link: 'https://www.cursor.com/',
      },
      {
        name: 'Antigravity',
        description:
          "Google's IDE gave us everything that Cursor Agents didn't, and it's free. Somewhat unstable but great otherwise.",
        link: 'https://antigravity.google/',
      },
    ],
  },
  {
    kicker: 'CLI tools',
    items: [
      {
        name: 'Claude Code',
        description: 'Claude continues to deliver the strongest performance across context management, reasoning quality, and task execution.',
        link: 'https://www.claude.com/product/claude-code',
        note: 'Paid Claude subscription required',
      },
      {
        name: 'Codex',
        description:
          'Code while you sleep. Beyond the CLI, the web version of Codex inside ChatGPT runs deep reasoning tasks and returns up to four versions by the time you wake up.',
        link: 'https://platform.openai.com/',
        note: 'Paid ChatGPT subscription required',
      },
      {
        name: 'Gemini CLI',
        description: 'Google’s free alternative, performance depends highly on your technical vocabulary.',
        link: 'https://ai.google.dev/gemini-api/docs/gemini-cli',
      },
    ],
  },
  {
    kicker: 'Agent Orchestration',
    items: [
      {
        name: 'Google Agent Developer Kit (ADK)',
        description:
          'Gemini-native kit with grounding, policy guardrails, and turnkey tool pipelines that plug into Google Cloud infra.',
        link: 'https://google.github.io/adk-docs/',
      },
      {
        name: 'LangChain + LangGraph',
        description: 'Non-Google alternative chaining tools and models. Sometimes unstable, write your own wrapper for simple situations.',
        link: 'https://langchain.com/',
      },
    ],
  },
];

export const builderRunnersUp = [
  {
    name: 'Replit',
    category: 'IDE',
    note: 'Burned through credits too quickly during a single repo import; love the ambition, but usage-based gating kills the flow.',
  },
  {
    name: 'VS Code + extensions',
    category: 'IDE',
    note: 'Oldie and goodie; I still keep it installed, but this list is meant for native agentic IDEs instead of bolt-on copilots.',
  },
  {
    name: 'Firebase Studio',
    category: 'IDE',
    note: 'Great for fast prototyping, but Agent mode can go off the rails and the browser-based IDE caps more advanced workflows compared to desktop stacks.',
  },
  {
    name: 'CrewAI',
    category: 'Agent orchestration',
    note: 'Showed promise on paper, but LangChain/LangGraph gave us measurably tighter orchestration during production runs.',
  },
  {
    name: 'ElevenLabs',
    category: 'Voice',
    note: 'Beautiful output but incredibly expensive, useful for commercial assets but too expensive for chat interaction.',
  },
  {
    name: 'Gemini Live API',
    category: 'Voice',
    note: 'Not nearly human yet, though at the price it’s an acceptable trade-off for scrappy experiments.',
  }
];

export const vibeStack = [
  {
    name: 'Google AI Studio',
    description: 'Rapid LLM experimentation with Gemini. Great for prompt prototyping and hosted APIs.',
    link: 'https://aistudio.google.com/',
  },
  {
    name: 'Lovable',
    description: 'Instant web-app builder with AI. Vibe out UIs and ship MVPs without wrestling configs.',
    link: 'https://lovable.dev/',
  },
  {
    name: 'Framer AI',
    description: 'Generate landing pages in minutes, ready for handoff or launch. Perfect for polish without code.',
    link: 'https://www.framer.com/ai/',
  },
];

export const explorerTips = [
  {
    title: 'Learn how to communicate with AI',
    detail: 'Ask for help refining prompts and setting clear system instructions. Start separate threads and projects so context stays clean.',
  },
  {
    title: "AI can't read your mind either.",
    detail: 'Context matters. Share your goals, audience, and constraints upfront. Provide feedback and tell AI to save your preferences.',
  },
  {
    title: 'Start a new conversation to avoid performance degradation over time.',
    detail:
      "Chats are like threaded emails: the farther back you have to go, the harder it is to find and longer it'll take. Start new chats periodically, especially if you notice a slowdown.",
  },
];

export const vibeTips = [
  {
    title: 'Write a vibe brief',
    detail:
      'Capture the feeling (colors, adjectives, references) before you prompt. This serves as a Product Requirements Doc (PRD) that keeps AI outputs on-brand.',
  },
  {
    title: 'Plan in stages',
    detail:
      'Aim for interactive MVPs first. Sketch flows, add motion, then polish after feedback instead of overbuilding upfront.',
  },
  {
    title: 'Vibe coding ≠ vibe deploying',
    detail:
      'Explore freely, but when shipping: clean up your repos, lock down API keys, and keep version control tight.',
  },
];

export const vibeQuestions = [
  {
    title: 'What is an API key?',
    detail:
      "This is your password, a private token that authenticates you with a service. Don't dox yourself. Keep it out of repos, and don't even paste it into chats with AI.",
  },
  {
    title: 'What is .gitignore?',
    detail:
      "A Git file that tells version control which folders or files (like build artifacts and API keys) to ignore. Keeps your repo clean and safe.",
  },
  {
    title: 'Do I actually need to learn how to code?',
    detail:
      'Vibe coding can create an interactive prototype or personal project, but production-ready code requires solid systems — infrastructure, security, and storage that reliably holds up in the real world.',
  },
];
