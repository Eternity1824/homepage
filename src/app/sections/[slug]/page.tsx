import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { sections } from "@/lib/sections";
import fs from "fs";
import path from "path";

// Generate static params for all sections
export function generateStaticParams() {
  return sections.map((section) => ({
    slug: section.slug,
  }));
}

// Get section metadata by slug
function getSectionBySlug(slug: string) {
  return sections.find((section) => section.slug === slug);
}

// Get section content by slug
async function getSectionContent(slug: string) {
  try {
    const filePath = path.join(process.cwd(), "src", "content", "sections", `${slug}.mdx`);
    const source = fs.readFileSync(filePath, "utf8");
    return source;
  } catch (error) {
    console.error(`Error reading section content for ${slug}:`, error);
    return "";
  }
}

export default async function SectionPage({ params }: { params: { slug: string } }) {
  const section = getSectionBySlug(params.slug);
  
  // If section doesn't exist, return 404
  if (!section) {
    notFound();
  }
  
  // Get section content
  const content = await getSectionContent(params.slug);
  
  if (!content) {
    return (
      <div className="py-20">
        <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
        <div className="mt-2 text-foreground/70">{new Date(section.date).toLocaleDateString()}</div>
        <div className="mt-8 prose prose-invert max-w-none">
          <p>Content not found for this section.</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-20">
      <h1 className="text-3xl font-semibold tracking-tight">{section.title}</h1>
      <div className="mt-2 text-foreground/70">{new Date(section.date).toLocaleDateString()}</div>
      
      {section.tags?.length ? (
        <div className="mt-3 flex flex-wrap gap-2">
          {section.tags.map(tag => (
            <span key={tag} className="rounded-lg border border-foreground/15 px-2 py-0.5 text-xs">{tag}</span>
          ))}
        </div>
      ) : null}
      
      <div className="mt-8 prose prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </div>
  );
}
