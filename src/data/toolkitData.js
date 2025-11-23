export const explorerStarter = [];

export const builderCategories = [
  {
    kicker: 'IDE stack',
    items: [
      {
        name: 'Cursor',
        description: 'Composer and Agents is worth the subscription fee if you need to ship fast.',
        link: 'https://www.cursor.com/',
      },
      {
        name: 'Antigravity',
        description:
          "Google gave us everything that Cursor Agents didn't, for free. May the odds be with you on beating the server load.",
        link: 'https://antigravity.google/',
      },
      {
        name: 'Windsurf',
        description: 'Overall great IDE, but sold to Codeium and key talent left so TBD future.',
        link: 'https://windsurf.ai/',
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
        note: 'Paid subscription required',
      },
      {
        name: 'Codex',
        description:
          'Codes while you sleep. Combo CLI with web version inside ChatGPT to run everything from bug work to deep reasoning tasks. Returns up to four versions, well before you wake up.',
        link: 'https://platform.openai.com/',
        note: 'Paid subscription required',
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
        description: 'Non-Google alternative chaining tools and models. Consider writing your own wrapper for simpler use cases.',
        link: 'https://langchain.com/',
      },
    ],
  },
];

export const builderRunnersUp = [
  {
    name: 'VS Code + extensions',
    note: 'Oldie and goodie, but this list is meant for native agentic IDEs instead of bolt-on copilots.',
  },
  {
    name: 'CrewAI',
    note: 'Showed promise on paper, but LangChain/LangGraph gave us measurably tighter orchestration during production runs.',
  },
  {
    name: 'ElevenLabs',
    note: 'Beautiful output but astoundingly expensive, useful for commercial assets but not cost efficient for chat interaction.',
  },
  {
    name: 'Gemini Live API',
    note: 'Not nearly human-passable yet, but priced acceptably.',
  }
];

export const vibeStack = [
  {
    kicker: 'Low-code',
    items: [
      {
        name: 'Lovable',
        description: 'Newbie-friendliest. Vibe out UIs and ship MVPs without wrestling configs. Great if you have money to spend.',
        link: 'https://lovable.dev/',
      },
      {
        name: 'v0',
        description: 'Vercel powers websites for Apple, Nike, OpenAI, etc. Their solution, v0, is strongest on front-end vibe coding. Limited free tier.',
        link: 'https://v0.app',
      },
      {
        name: 'Firebase Studio',
        description: 'Google\'s free tool. Vibe all the way through backend, hosting, and infrastructure; good for turning prototypes into something closer to real.',
        link: 'https://idx.google.com/',
      },
    ],
  },
  {
    kicker: 'Playground',
    items: [
      {
        name: 'Google AI Studio',
        description: 'Playground and demo zone for all things Google: make content, create mini-apps, etc.',
        link: 'https://aistudio.google.com/',
      },
      {
        name: 'Lobe Chat',
        description: 'Level up and try out major models all in one place. Limited free tier.',
        link: 'https://lobechat.com',
      },
    ],
  },
  {
    kicker: 'Websites',
    items: [
      {
        name: 'Figma Make',
        description: 'Generate multi-screen vibes in seconds, then polish inside Figma proper.',
        link: 'https://www.figma.com/make/',
      },
      {
        name: 'Framer',
        description: 'Made for experienced designers with industry vocabulary to want to become 100-X with AI.',
        link: 'https://www.framer.com/',
      },
    ],
  },
];

export const explorerTips = [
  {
    title: 'Learn how to communicate with AI.',
    detail: 'Ask for help refining prompts and setting clear system instructions. Start separate threads and projects so context stays clean.',
  },
  {
    title: "AI can't read your mind.",
    detail: 'Context matters. Share your goals, audience, and constraints upfront. Provide feedback and tell AI what preferences to save.',
  },
  {
    title: 'Start a new chat thread to avoid performance degradation over time.',
    detail:
      "Chats are like threaded emails: the more you have to dig through, the longer it will take. If you notice a slowdown, start a new chat.",
  },
];

export const vibeTips = [
  {
    title: 'Have a plan before you vibe.',
    detail:
      'Coding agents feel magical, but wandering can get expensive fast. First create a plan, then build. Your wallet (and your project) will thank you.',
  },
  {
    title: 'Reality check: an app you can ship in minutes is probably AI slop.',
    detail: 'Every day, a flashy tool drops with this promise. Quality comes from intention, not speed. Focus on building a great product and user experience.',
  },
  {
    title: 'Vibe coding ≠ vibe deploying.',
    detail:
      'Coding is step one. Battle-tested infrastructure, security, and storage are necessary for products to reliably hold up in the real world.',
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
      "A Git file that tells version control which files to ignore, like .env, so your API keys don't get compromised. Keeps your repo clean and safe.",
  },
];
