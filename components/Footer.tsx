import { Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const links = {
  Company: [
    { label: "About", href: "#services" },
    { label: "Careers", href: "#contact" },
    { label: "Process", href: "#process" },
    { label: "Projects", href: "#projects" },
  ],
  Services: [
    { label: "Smart Contracts", href: "#services" },
    { label: "DeFi Protocols", href: "#services" },
    { label: "dApp Engineering", href: "#services" },
    { label: "AI + Web3", href: "#services" },
  ],
  Resources: [
    { label: "Case Studies", href: "#projects" },
    { label: "Security", href: "#process" },
    { label: "Contact", href: "#contact" },
    { label: "Email Us", href: "mailto:hello@eeshisoft.com" },
  ],
};

const socials = [
  { Icon: Github, href: "https://github.com/eeshisoft", label: "GitHub" },
  { Icon: Twitter, href: "https://x.com/eeshisoft", label: "Twitter" },
  { Icon: Linkedin, href: "https://linkedin.com/company/eeshisoft", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] relative overflow-hidden">
      {/* Grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 30%, black 70%, transparent)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 pt-[72px] pb-10 relative z-[1]">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-1 no-underline mb-4"
            >
              <Image src="/logo-1.png" alt="Logo" width={35} height={30} />
              <div>
                <span className="text-[1.1rem] font-bold inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#FFEA54] to-[#FEAA2B]">
                  Eeshi
                </span>
                Soft
              </div>
            </Link>
            <p className="text-gray-500 text-[0.88rem] leading-[1.7] max-w-[260px] mb-6">
              Building the decentralized infrastructure that powers
              tomorrow&apos;s internet.
            </p>
            <div className="flex gap-3">
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[38px] h-[38px] rounded-[10px] bg-white/5 border border-white/[0.08] flex items-center justify-center transition-all duration-200 no-underline text-[#A1A1AA] hover:border-[#FFEA54]/40 hover:bg-[#FFEA54]/[0.08] hover:text-[#FFEA54]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <div className="text-[0.72rem] font-bold text-[#FFEA54] tracking-[0.09em] uppercase mb-4">
                {section}
              </div>
              <div className="flex flex-col gap-[10px]">
                {items.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-500 text-[0.88rem] no-underline tracking-[0.01em] transition-colors duration-200 hover:text-[#e4e4e7]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-7 flex flex-wrap justify-between items-center gap-4">
          <span className="text-gray-600 text-[0.82rem]">
            © 2026 Eeshisoft. All rights reserved.
          </span>
          <div className="flex gap-6">
            <a
              href="mailto:hello@eeshisoft.com"
              className="text-gray-600 text-[0.82rem] no-underline transition-colors duration-200 hover:text-[#9ca3af]"
            >
              Privacy Policy
            </a>
            <a
              href="mailto:hello@eeshisoft.com"
              className="text-gray-600 text-[0.82rem] no-underline transition-colors duration-200 hover:text-[#9ca3af]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
