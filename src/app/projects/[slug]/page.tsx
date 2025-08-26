import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

// Generate static params for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Get project by slug
function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  
  // If project doesn't exist, return 404
  if (!project) {
    notFound();
  }
  
  return (
    <div className="py-20">
      <Link href="/projects" className="text-sm text-white/60 hover:text-white/80 transition-colors">
        ← Back to all projects
      </Link>
      
      <h1 className="mt-6 text-3xl font-semibold tracking-tight">{project.name}</h1>
      <p className="mt-4 text-lg text-white/80">{project.summary}</p>
      
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="rounded-lg bg-white/10 px-3 py-1 text-sm">
            {tech}
          </span>
        ))}
      </div>
      
      <div className="mt-8 flex gap-4">
        {project.links.github && (
          <a
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium hover:bg-white/15 transition-colors"
          >
            View on GitHub
          </a>
        )}
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-sky-300 px-4 py-2 text-sm font-medium text-slate-900 hover:bg-sky-400 transition-colors"
          >
            Live Demo
          </a>
        )}
      </div>
      
      {/* Project details section - can be expanded with more content */}
      <div className="mt-12 prose prose-invert max-w-none">
        <h2>Project Details</h2>
        <p>
          This section can be expanded with more detailed information about the project.
          Consider adding project background, challenges, solutions, and outcomes.
        </p>
      </div>
    </div>
  );
}
