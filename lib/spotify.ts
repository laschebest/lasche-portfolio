type SpotifyAccessTokenResponse = {
  access_token: string;
};

type SpotifyArtist = {
  name: string;
};

type SpotifyImage = {
  url: string;
};

type SpotifyTrackResponse = {
  is_playing: boolean;
  progress_ms: number;
  item: {
    album: {
      images: SpotifyImage[];
    };
    duration_ms: number;
    name: string;
    external_urls?: {
      spotify?: string;
    };
    artists: SpotifyArtist[];
  } | null;
};

export type NowPlaying = {
  albumImageUrl: string;
  artist: string;
  durationMs: number;
  isPlaying: boolean;
  progressMs: number;
  title: string;
  url: string;
} | null;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT = "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return null;
  }

  const data = (await response.json()) as SpotifyAccessTokenResponse;
  return data.access_token;
}

export async function getNowPlaying(): Promise<NowPlaying> {
  try {
    const accessToken = await getAccessToken();

    if (!accessToken) {
      return null;
    }

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
    });

    if (response.status === 204 || response.status >= 400) {
      return null;
    }

    const song = (await response.json()) as SpotifyTrackResponse;

    if (!song.item) {
      return null;
    }

    return {
      albumImageUrl: song.item.album.images[1]?.url ?? song.item.album.images[0]?.url ?? "",
      artist: song.item.artists.map((artist) => artist.name).join(", "),
      durationMs: song.item.duration_ms,
      isPlaying: song.is_playing,
      progressMs: song.progress_ms,
      title: song.item.name,
      url: song.item.external_urls?.spotify ?? "https://open.spotify.com/",
    };
  } catch {
    return null;
  }
}
