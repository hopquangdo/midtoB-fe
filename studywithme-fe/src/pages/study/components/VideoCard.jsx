import React from "react"

export default function VideoCard({video}) {
  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        <figure>
        <img
            src={`${video.banner}`}
            className="aspect-video w-full"
        />
        </figure>
        <div className="p-6">
        <header className="">
            <h3 className="text-xl font-medium text-slate-700">
              {video.title}
            </h3>
            <p className="text-sm text-slate-400">{video.poster}</p>
        </header>
        </div>
    </div>
  )
}