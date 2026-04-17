import ProjectDetailClient from "./ProjectDetailClient";
import type { Project } from "@/data/projects";

export default function ProjectDetail({ project }: { project: Project }) {
  return <ProjectDetailClient project={project} />;
}