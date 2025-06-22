export async function getVideo(channelId: string, maxResults: number = 4) {
  const videos = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
  );
  const data: YouTubeSearchListResponse = await videos.json();
  return data;
}

export async function getPlaylist(playlistId: string) {
  const videos = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?key=${process.env.YOUTUBE_KEY}&playlistId=${playlistId}&part=snippet,id&maxResults=3`
  );
  const data: PlaylistItemListResponse = await videos.json();
  return data;
}

interface YouTubeSearchListResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: YouTubeSearchResult[];
}

interface YouTubeSearchResult {
  kind: string;
  etag: string;
  id: YouTubeSearchResultId;
  snippet: YouTubeSearchResultSnippet;
}

interface YouTubeSearchResultId {
  kind: string;
  videoId: string;
}

interface YouTubeSearchResultSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Thumbnails = {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
  standard?: Thumbnail;
  maxres?: Thumbnail;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
  playlistId?: string;
  position?: number;
  videoOwnerChannelTitle?: string;
  videoOwnerChannelId?: string;
};

type VideoId = {
  kind: string;
  videoId: string;
};

type SearchResult = {
  kind: string;
  etag: string;
  id: VideoId;
  snippet: Snippet;
};

type PageInfo = {
  totalResults: number;
  resultsPerPage: number;
};

type SearchListResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  regionCode: string;
  pageInfo: PageInfo;
  items: SearchResult[];
};

// TypeScript types for youtube#playlistItemListResponse
type ResourceId = {
  kind: string;
  videoId: string;
};

type PlaylistItemSnippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
};

type PlaylistItem = {
  kind: string;
  etag: string;
  id: string;
  snippet: PlaylistItemSnippet;
};

type PlaylistItemListResponse = {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: PageInfo;
  items: PlaylistItem[];
};
