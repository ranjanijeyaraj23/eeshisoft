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
