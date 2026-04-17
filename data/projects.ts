export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tech: string[];
  type: string;
  image: string;
  link: string;
  features: string[];
  challenge: string;
  solution: string;
  results: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
  slug: "ai-lead-generation",
  title: "AI Lead Generation",
  description:
    "AI workforce automation platform that deploys AI employees across WhatsApp, voice calls, website chat, Instagram, and Facebook — running 24/7 to automate sales, support, and operations.",
  longDescription:
    "AI Lead Generation is an AI workforce automation platform that lets businesses deploy AI employees across WhatsApp, voice calls, website chat, Instagram, and Facebook — running 24/7. It automates sales, support, and operations from one unified platform. AI voice agents handle outbound and inbound calls, book meetings, and take actions around the clock. The platform delivers a 5x conversion lift and operates across 100+ countries, making it a powerful solution for businesses looking to scale customer engagement without scaling headcount.",

  tech: ["Next.js", "React", "Node.js", "AI/ML", "NLP", "WhatsApp API", "Voice AI"],

  type: "SAAS",

  image: "/ai-lead-generation.png",

  link: "https://marketing.tronex.ai",

  features: [
    "AI Chatbot with smart replies — understands natural language, handles multi-step conversations, and responds 24/7 without human support",
    "Automated messaging with broadcast campaigns, approved templates, offer messages, payment reminders, and festival campaigns",
    "Lead generation & qualification — automatically collects user data, asks qualifying questions, and saves leads to CRM",
    "Workflow automation for complete customer journeys: order tracking, appointment booking, follow-ups, and end-to-end flows",
    "Analytics dashboard tracking messages sent/received, active contacts, campaign performance, and conversion metrics",
    "Multi-agent live chat with seamless AI-to-human handover — AI handles simple queries, humans take complex ones",
    "AI personalization with context-aware replies, smart product recommendations, and behavior-based responses",
    "Sales automation with product suggestions, cart reminders, payment links, and chat-to-sale conversion flows",
    "No-code bot builder with drag-and-drop chatbot creation — fast setup without coding",
    "Voice AI suite: Voice Agents, Calls, Phone Numbers, and Incoming Connections for inbound & outbound call automation",
    "Website AI: embeddable chatbot with chat settings, categories, knowledge base, chat list, and embed tokens",
    "Social Media AI: automated posting across 7 platforms from a single dashboard",
    "Campaign Engine for launching bulk calling and messaging campaigns at scale",
    "Deep integrations with WhatsApp Business API, CRM systems, payment gateways, and third-party APIs",
    "Support Tickets system and Execution Logs for auditing AI conversations and escalation workflows",
    "Multi-workspace support with team collaboration, role-based access, and multilingual reach across 100+ countries"
  ],

  challenge:
    "Businesses needed to engage customers 24/7 across multiple channels — WhatsApp, voice, Instagram, Facebook, and web chat — but scaling human teams across time zones and languages was expensive and unsustainable.",

  solution:
    "We built an AI workforce platform that deploys AI employees across every major communication channel. These AI agents handle sales conversations, support queries, outbound calls, and meeting bookings autonomously — operating 24/7 across 100+ countries from a single platform, delivering a 5x conversion lift while dramatically reducing operational costs.",

  results: [
    { label: "Conversion Lift", value: "5x" },
    { label: "Countries", value: "100+" },
    { label: "Availability", value: "24/7" },
    { label: "Channels", value: "5+" }
  ],
},
  {
    slug: "dehack-web3",
    title: "Dehack Web3",
    description:
      "A powerful decentralized exchange with cross-chain swapping capabilities and optimized liquidity pools.",
    longDescription:
      "Dehack Web3 is a next-generation decentralized exchange designed for seamless cross-chain token swaps. Built with an advanced AMM engine and multi-chain liquidity aggregation, it enables users to trade assets across Ethereum, BSC, and Polygon with minimal slippage and competitive fees.",
    tech: ["Solidity", "React", "Web3.js", "TheGraph", "Hardhat", "OpenZeppelin"],
    type: "DEFI",
    image: "/dehack.png",
    link: "https://dehack.com",
    features: [
      "Cross-chain token swapping across 5+ networks",
      "Automated Market Maker with concentrated liquidity",
      "Real-time price feeds via Chainlink oracles",
      "Multi-signature governance for protocol upgrades",
      "Gas-optimized smart contracts with 40% lower fees",
      "Comprehensive analytics dashboard for LPs",
    ],
    challenge:
      "The client needed a DEX that could handle cross-chain swaps without relying on centralized bridges, while maintaining sub-second transaction confirmation and competitive gas costs.",
    solution:
      "We designed a custom bridge protocol using light client verification and built an optimized AMM with concentrated liquidity positions. The architecture uses TheGraph for indexing and real-time analytics.",
    results: [
      { label: "Daily Volume", value: "$12M+" },
      { label: "Total Users", value: "45K+" },
      { label: "Chains Supported", value: "5" },
      { label: "Gas Savings", value: "40%" },
    ],
  },
  {
    slug: "rolling-doge",
    title: "Rolling Doge",
    description: "Web3 Reward MLM program on Polygon chain.",
    longDescription:
      "Rolling Doge is an innovative Web3 rewards platform built on Polygon that gamifies referral-based earning through a transparent, on-chain multi-level system. Every transaction, reward distribution, and tier upgrade is verifiable on-chain, ensuring complete trust and transparency.",
    tech: ["ERC-20", "IPFS", "React", "Ethers.js", "Polygon", "Solidity"],
    type: "DAPPS",
    image: "/rolling-doge.png",
    link: "https://rollingdoge.io",
    features: [
      "Transparent on-chain reward distribution",
      "Multi-tier referral system with automatic payouts",
      "IPFS-hosted metadata for decentralized content",
      "Real-time earnings dashboard with claim functionality",
      "Anti-whale tokenomics with progressive tax system",
      "Mobile-responsive wallet integration",
    ],
    challenge:
      "Building a trustless rewards program where every payout is verifiable on-chain while keeping gas costs low enough for micro-transactions on a frequent basis.",
    solution:
      "We deployed on Polygon for low gas costs, implemented batch processing for reward distributions, and built a custom smart contract system that automatically calculates and distributes rewards across multiple tiers in a single transaction.",
    results: [
      { label: "Active Users", value: "12K+" },
      { label: "Rewards Paid", value: "$2.1M" },
      { label: "Avg Gas Cost", value: "$0.002" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    slug: "orbit-swap",
    title: "Orbit Swap",
    description: "Secure decentralized Swap Exchange on Base blockchain.",
    longDescription:
      "Orbit Swap is a high-performance decentralized exchange built natively on Base (Coinbase L2). It features an optimized swap engine, liquidity farming, and a launchpad for new token listings — all with the security guarantees of Ethereum L1 settlement.",
    tech: ["TypeScript", "Base", "Next.js", "Solidity", "Wagmi", "Viem"],
    type: "DAPPS",
    image: "/orbit-swap.png",
    link: "https://orbitswap.io",
    features: [
      "Native Base blockchain integration with L1 security",
      "Optimized swap router with split-route execution",
      "Liquidity farming with auto-compounding vaults",
      "Token launchpad with fair launch mechanics",
      "Portfolio tracker with P&L analytics",
      "Limit orders via off-chain order book",
    ],
    challenge:
      "Creating a DEX on the emerging Base ecosystem that could attract liquidity while competing with established platforms, with a focus on user onboarding from Coinbase.",
    solution:
      "We built a seamless Coinbase Wallet integration for easy onboarding, implemented incentivized liquidity pools with boosted APYs, and created a launchpad to attract new projects to the platform.",
    results: [
      { label: "TVL", value: "$8.5M" },
      { label: "Swap Volume", value: "$5M/day" },
      { label: "Pools", value: "120+" },
      { label: "Launch Projects", value: "15" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}
