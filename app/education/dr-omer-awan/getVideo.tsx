export async function getVideo(channelId: string) {
  const videos = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=8`
  );
  const data: YouTubeSearchListResponse = await videos.json();
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

interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
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

interface Thumbnails {
  default: Thumbnail;
  medium: Thumbnail;
  high: Thumbnail;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
