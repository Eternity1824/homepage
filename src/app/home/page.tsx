import Link from "next/link";

export default function Home() {
  return (
    <main className="py-28">
      <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
        Lihan Zhou
      </h1>
      <p className="mt-4 text-lg text-white/80 max-w-2xl">
        Backend / Infra / AI engineering. I build reliable systems and ship fast.
      </p>
      <div className="mt-8 flex gap-3">
        <Link href="/projects" className="rounded-xl bg-sky-300 px-4 py-2 text-slate-900 font-medium">View Projects</Link>
        <a href="https://github.com/..." target="_blank" rel="noopener noreferrer"
           className="rounded-xl border border-white/20 px-4 py-2">GitHub</a>
        <a href="/Resume.pdf" className="rounded-xl border border-white/20 px-4 py-2">Resume</a>
      </div>
    </main>
  );
}
