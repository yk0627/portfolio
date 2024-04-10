"use client"

import Link from "next/link"
import { countCharacters } from "@/utils/strings"
import Marquee from "react-fast-marquee"
import { format } from "timeago.js"

import useMusic from "@/hooks/useMusic"
import { Tooltip } from "@/components/ui/tooltip"

export default function IndexPage() {
  const { isNowPlaying, latestTrack } = useMusic()

  // console.log(countCharacters(latestTrack?.name, latestTrack?.artist["#text"]))

  return (
    // <div className="magicpattern">
    <div className="h-[100vh] relative pt-4 px-8 max-w-lg mx-auto w-full md:border-l md:border-r">
      <header className="flex gap-2 items-center justify-between text-zinc-400">
        <h1>anish de</h1>

        <div className="flex gap-2">
          <Link href="/blog">/blog</Link>
          <Link href="/projects">/projects</Link>
          <Link href="/about">/about</Link>
        </div>
      </header>

      <section className="flex flex-col mt-16">
        <div className="flex flex-col items-start gap-2">
          <div className="flex gap-2 -translate-x-1 text-xs md:flex-row flex-col">
            <Link
              href="https://www.google.com/maps/place/Bengaluru,+Karnataka/@12.9544587,77.3005929,10z/data=!3m1!4b1!4m6!3m5!1s0x3bae1670c9b44e6d:0xf8dfc3e8517e4fe0!8m2!3d12.9715987!4d77.5945627!16zL20vMDljMTc?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-secondary rounded-full border border-zinc-900 px-2 py-1 flex gap-1 items-center justify-center w-fit">
                📍 blr, in
              </div>
            </Link>
            {latestTrack && (
              <Tooltip
                maxWidth={300}
                content={
                  <div className="flex flex-col gap-2">
                    <div className="flex gap-2 text-xs w-fit">
                      <img
                        src={latestTrack.image[2]["#text"]}
                        alt="album art"
                        className="w-20 h-20 rounded-lg"
                      />
                      <div className="flex flex-col gap-1">
                        <p className="font-bold">{latestTrack.name}</p>
                        <p>{latestTrack.album["#text"]}</p>
                        <p>{latestTrack.artist["#text"]}</p>
                      </div>
                    </div>
                    {isNowPlaying
                      ? "🎧 Playing Now"
                      : `Played ${
                          latestTrack.date &&
                          format(latestTrack.date?.["#text"])
                        }`}
                  </div>
                }
              >
                <Link
                  href={latestTrack.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-secondary rounded-full border border-zinc-900 px-2 py-1 flex gap-1 items-center justify-left max-w-[18rem]">
                    {/* {isNowPlaying
          ? "🎧"
          : `${
            latestTrack?.date?.uts &&
            new Date(latestTrack?.date?.["#text"])
          }`}{" "}
        {latestTrack?.name} */}
                    {/* {"🎧 "} */}
                    {/* {latestTrack.name} */}
                    {/* {`🎧 ${ellipsis(latestTrack.name, 30)} - ${ellipsis(
              latestTrack.artist?.["#text"],
              30
            )}`} */}
                    {/* <p>{`🎧 ${latestTrack.name} - ${latestTrack.artist["#text"]}`}</p> */}
                    <p>🎧</p>

                    {countCharacters(
                      latestTrack.name,
                      " - ",
                      latestTrack.artist["#text"]
                    ) > 40 ? (
                      <Marquee
                        autoFill
                        pauseOnHover
                        gradient
                        gradientColor="#2a2a2a"
                        gradientWidth={10}
                        style={{
                          width: "18rem",
                        }}
                      >
                        <p className="mr-6 text-left">
                          {`${latestTrack.name} - ${latestTrack.artist["#text"]}`}
                        </p>
                      </Marquee>
                    ) : (
                      <p>{`${latestTrack.name} - ${latestTrack.artist["#text"]}`}</p>
                    )}
                  </div>
                </Link>
              </Tooltip>
            )}
          </div>
          <p className="text-zinc-300 mt-4">
            Hey there, I am <span className="strong">Anish</span>. I am a
            fullstack web3 developer based in India with over 2 years of
            experience in building{" "}
            <span className="strong">
              web3 dapps, smart contracts and backend services.
            </span>{" "}
            I have also crafred multiple developer tools,{" "}
            <span className="strong">SDKs and CLIs</span>. I have participated
            in multiple hackathons over the past 2 years and{" "}
            <span className="strong">won many</span> of them.
          </p>
          {/* <div className="box">
            <p></p>
          </div> */}
        </div>
        {/* <div className="flex gap-4 mt-8">
          <a
            href="https://twitter.com/AnishDe12020"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonVariants()}
          >
            <FaXTwitter className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/AnishDe12020"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonVariants()}
          >
            <FaGithub className="w-6 h-6" />
          </a>
          <a
            href="https://unsplash.com/@anishde12020"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonVariants()}
          >
            <FaUnsplash className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@anishde.dev"
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonVariants()}
          >
            <FaEnvelope className="w-6 h-6" />
          </a>
        </div> */}
      </section>
    </div>
    // </div>
  )
}
