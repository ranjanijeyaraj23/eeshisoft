import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/data/projects";
import type { Metadata } from "next";
import ProjectDetail from "@/components/ProjectDetailClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import CursorGlow from "@/components/CursorGlow";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | EeshiSoft",
      description: "The requested project could not be found.",
    };
  }

  const url = `https://yourdomain.com/projects/${slug}`;

  return {
    title: `${project.title} | AI Lead Generation & WhatsApp Automation`,
    description: project.description,

    keywords: [
      "AI Lead Generation",
      "WhatsApp Automation",
      "AI Chatbot",
      "CRM Automation",
      "Sales Automation",
      project.title,
    ],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: project.title,
      description: project.description,
      url,
      siteName: "EeshiSoft",
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <SmoothScroll>
      <CursorGlow />
      <Navbar />
      <main>
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
