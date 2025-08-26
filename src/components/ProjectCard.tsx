import { Card } from "@/components/ui/card";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

export default function ProjectCard({ p }: { p: Project }) {
    return (
        <Card className="rounded-2xl border-white/10 bg-white/[0.03] p-6 hover:-translate-y-0.5 transition">
            <h3 className="text-lg font-medium">{p.name}</h3>
            <p className="mt-2 text-sm text-white/70">{p.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.slice(0,6).map(s => (
                    <span key={s} className="rounded-lg border border-white/20 px-2 py-1 text-xs text-white/80">{s}</span>
                ))}
            </div>
            <div className="mt-4 flex gap-4 text-sm">
                <Link href={`/projects/${p.slug}`} className="underline">Details</Link>
                {p.links.github && <a className="underline" target="_blank" rel="noopener noreferrer" href={p.links.github}>GitHub</a>}
            </div>
        </Card>
    );
}