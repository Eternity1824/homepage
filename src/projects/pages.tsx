import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <main className="py-24">
            <h1 className="text-3xl font-semibold tracking-tight">Projects</h1>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map(p => <ProjectCard key={p.slug} p={p} />)}
            </div>
        </main>
    );
}