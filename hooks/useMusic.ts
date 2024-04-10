import { useEffect, useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"

const lastFmUrl =
  "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=anishde12020&api_key=1f633977acf0e2d0630ec11dbc350d3e&format=json"

type Track = {
  artist: {
    mbid: string
    "#text": string
  }
  streamable: string
  image: {
    size: string
    "#text": string
  }[]
  mbid: string
  album: {
    mbid: string
    "#text": string
  }
  name: string
  "@attr"?: {
    nowplaying: string
  }
  url: string
  date?: {
    uts: string
    "#text": string
  }
}

const useMusic = () => {
  const { data: recentTracks } = useQuery<Track[]>({
    queryKey: ["recentTracks"],
    queryFn: async () => {
      const response = await fetch(lastFmUrl)
      const data = await response.json()
      return data.recenttracks.track
    },
  })

  const isNowPlaying = useMemo(() => {
    if (!recentTracks) return false
    return recentTracks[0]["@attr"]?.nowplaying === "true"
  }, [recentTracks])

  const latestTrack = useMemo(() => {
    if (!recentTracks) return null
    return recentTracks[0]
  }, [recentTracks])

  return { recentTracks, isNowPlaying, latestTrack }
}

export default useMusic
