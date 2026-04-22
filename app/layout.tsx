import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
// import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Script from "next/script";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const siteUrl = "https://eeshisoft.com";
const siteName = "EeshiSoft";
const siteDescription =
  "EeshiSoft builds Web3, blockchain, AI, and decentralized application platforms — from AI lead generation and voice agents to DeFi exchanges and smart contract engineering.";
const ogImage = "/og-image.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EeshiSoft | Web3, Blockchain & AI Engineering",
    template: "%s | EeshiSoft",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "EeshiSoft", url: siteUrl }],
  creator: "EeshiSoft",
  publisher: "EeshiSoft",
  generator: "Next.js",
  keywords: [
    "Web3 development",
    "Blockchain development",
    "AI lead generation",
    "WhatsApp AI",
    "Voice AI agents",
    "DeFi platform",
    "Smart contracts",
    "dApps",
    "Ethereum",
    "Solana",
    "Polygon",
    "Next.js agency",
    "AI automation",
    "EeshiSoft",
  ],
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "EeshiSoft | Web3, Blockchain & AI Engineering",
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "EeshiSoft — Web3, Blockchain & AI Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EeshiSoft | Web3, Blockchain & AI Engineering",
    description: siteDescription,
    images: [ogImage],
    creator: "@eeshisoft",
    site: "@eeshisoft",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
    ],
    apple: "/logo.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0A" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "dark light",
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description: siteDescription,
  sameAs: [
    "https://twitter.com/eeshisoft",
    "https://www.linkedin.com/company/eeshisoft",
    "https://github.com/eeshisoft",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteUrl}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <html lang="en" className={poppins.variable}>
    <html lang="en" className={`dark ${poppins.variable}`}>
      <head>
        <meta name="google-site-verification" content="bTaA2Z9bIkm_DWS9NE1wGsmXMyV9fWaUXIdRdWyHkJQ" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden!">
        {children}
        {/* <Analytics /> */}
{/* Tronex Chatbot */}
 <script>
  CLIENT_SECRET_KEY = "75048f52-e41f-4ade-9f4d-27db64a2a755";
  AI_CHATBOT_TOKEN = "eyJ1dWlkIjoiNzUwNDhmNTItZTQxZi00YWRlLTlmNGQtMjdkYjY0YTJhNzU1IiwiZG9tYWluIjoiZWVzaGlzb2Z0LW5pbmUudmVyY2VsLmFwcCIsInRpbWVzdGFtcCI6MTc3Njc3NDEzOTUyOX0=.jLp6Vo8c6JLUlFv7eKcL8srduBny5ZUv3Z+jTiBJHrE=";
</script>
<script defer src="https://marketing.tronex.ai/chatbot/js-lib/index.js"></script>
       
      </body>
    </html>
  );
}
