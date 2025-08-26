import Link from "next/link";
import Image from "next/image";
import { sections } from "@/lib/sections";

export default function SectionsPage() {
    return (
        <main className="py-20">
            <h1 className="text-3xl font-semibold tracking-tight">Sections</h1>
            <p className="mt-2 text-foreground/70">短文档/思考笔记/案例拆解（更“Notion 风”的阅读）</p>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {sections.map(s => (
                    <Link key={s.slug} href={`/sections/${s.slug}`}
                          className="rounded-2xl border border-foreground/10 bg-foreground/5 p-5 hover:-translate-y-0.5 transition">
                        {s.cover && (
                            <div className="relative mb-4 h-36 overflow-hidden rounded-xl border border-foreground/10">
                                <Image src={s.cover} alt="" fill className="object-cover" />
                            </div>
                        )}
                        <h3 className="text-lg font-medium">{s.title}</h3>
                        <p className="mt-2 text-sm text-foreground/70 line-clamp-3">{s.summary}</p>
                        <div className="mt-3 text-xs text-foreground/60">{new Date(s.date).toLocaleDateString()}</div>
                        {s.tags?.length ? (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {s.tags.slice(0,5).map(t => (
                                    <span key={t} className="rounded-lg border border-foreground/15 px-2 py-0.5 text-xs">{t}</span>
                                ))}
                            </div>
                        ) : null}
                    </Link>
                ))}
            </div>
        </main>
    );
}