export type Project = {
    slug: string;
    name: string;
    summary: string;
    stack: string[];
    links: { github?: string; demo?: string } ;
};

export const projects: Project[] = [
    {
        slug: "travel",
        name: "Travel Recommendation System",
        summary: "Go microservices + Python agents; ES + Qdrant hybrid retrieval; Ray batch ETL.",
        stack: ["Go","Python","Elasticsearch","Qdrant","MongoDB","Ray","Docker"],
        links: { github: "https://github.com/...", demo: "" }
    },
    {
        slug: "gsoc",
        name: "GSoC: Apache SkyWalking BanyanDB",
        summary: "Multi-cloud backup SDK + CO-RE eBPF observability; Prometheus metrics.",
        stack: ["Go","S3/GCS/Azure","eBPF","Prometheus"],
        links: { github: "https://github.com/..." }
    },
    // 再加 flash-sale / MQ ...
];