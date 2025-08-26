export type SectionMeta = {
    slug: string;
    title: string;
    summary: string;
    date: string; // '2025-08-11'
    cover?: string; // '/images/cover-travel.png'
    tags?: string[];
};

export const sections: SectionMeta[] = [
    {
        slug: "travel-architecture",
        title: "Travel：架构与数据流",
        summary: "召回→Rerank→Agent 的主控链路，以及离线/在线的边界与治理。",
        date: "2025-08-11",
        cover: "/images/cover-travel.png",
        tags: ["Go","Python","Elasticsearch","Qdrant","Ray"]
    },
    {
        slug: "mq-ringbuffer-wal",
        title: "MQ：RingBuffer 与简易 WAL",
        summary: "为何选择 ring buffer，如何做 append-only WAL 与 backpressure。",
        date: "2025-08-12",
        tags: ["C++","epoll","sendfile","perf"]
    }
];