"use client"
import { Mail, Music, Pause, Play, VolumeX } from 'lucide-react'
import React, { useRef, useState } from 'react'

const DX_ADD = process.env.DX_ADD;

const VideoMedia = () => {

  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null)

  const handlePlay = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.volume = .5
      videoRef.current.play()
      setPlaying(true);
    }
  }
  const handlePause = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  const handleMute = () => {
    if (videoRef && videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };
  return (
    <footer className="m-4 mt-8">
      <div className="bg-[#220000] border-4 border-[#663333] rounded-xl p-4 relative flex flex-row justify-between">
        <div className='w-[500px] h-full' id="dexscreener-embed">
          <iframe className='w-[500px] h-[400px]' src={`https://dexscreener.com/solana`}>
          </iframe>
        </div>
        <div>
          {/* PSP-like controls */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex space-x-8">
            <div onClick={playing ? handlePause : handlePlay} className="cursor-pointer w-12 h-12 rounded-full bg-[#333366] flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#220000] flex items-center justify-center">
                {
                  playing ? <Pause className="h-6 w-6 text-[#cc3333]" />
                    : <Play className="h-6 w-6 text-[#cc3333]" />
                }
              </div>
            </div>
            <div onClick={handleMute} className="cursor-pointer w-12 h-12 rounded-full bg-[#333366] flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#220000] flex items-center justify-center">
                <VolumeX className="h-6 w-6 text-[#cc3333]" />
              </div>
            </div>
            {/* PLAY BUTTON */}
          </div>

          <div className="bg-black aspect-video w-full max-w-lg mx-auto flex items-center justify-center">
            <div className="text-center">
              <video ref={videoRef}>
                <source src="/video.mp4" />
              </video>
            </div>
          </div>

          {/* Footer text */}
          <div className="mt-4 text-center text-xs text-[#ff6666]">
            <p>© 2025 CHINEX | Hosted via corrupted validator mirror</p>
            <p className="mt-1">
              <Mail className="inline-block h-3 w-3 mr-1" />
              <a href="mailto:cyber@example.com" className="text-[#33ccff] hover:underline">
                Built on rug energy
              </a>
              <span className="mx-2">|</span>
              <Music className="inline-block h-3 w-3 mr-1" />
              <a href="#" className="text-[#33ccff] hover:underline">
                and algorithmic belief
              </a>
            </p>
            <p className="mt-2 text-[#ff99cc]">Ξ All rights revoked. Signal only.</p>
          </div>
        </div>
        <div className='w-[500px] h-[400px] flex flex-col justify-center items-center gap-8' id="dexscreener-embed">
          <a href='https://x.com/i/communities/1976495846817411369' target='_blank' className='border-2 border-[#cc3333] rounded-md text-2xl p-4 h-fit w-fit'>
            Twitter
          </a>
          <div className='border-2 border-[#cc3333] rounded-md text-2xl p-4 h-fit w-fit'>
            Dexscreener
          </div>
        </div>
      </div>
    </footer>
  )
}

export default VideoMedia
