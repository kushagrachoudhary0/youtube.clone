
interface Thumbnails {
    default: { url: string; width: number; height: number };
    medium: { url: string; width: number; height: number };
    high: { url: string; width: number; height: number };
}

interface Snippet {
    thumbnails: Thumbnails;
    title: string;
    channelId: string;
    publishedAt: string;
    liveBroadcastContent: string;
    channelTitle: string;
    description: string;
}

interface Item {
    snippet: Snippet;
    kind: string;
    etag: string;
    id: { kind: string; videoId?: string; channelId?: string; playlistId?: string };
}

interface YoutubeDataType {
    kind: string;
    etag: string;
    items: Item[];
}
