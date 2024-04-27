import React from "react"
import { colors } from "../../../utils/commonStyles"
export default function FileCard({file}) {
  return (
    <div className="max-w-3xl mx-auto p-10">
        <div className="flex flex-col overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200 sm:flex-row">
            {/*  <!-- Image --> */}
            <figure className="flex-1">
            <img
                src={file.banner}
                alt="card image"
                className="object-cover min-h-full aspect-auto"
            />
            </figure>
            {/*  <!-- Body--> */}
            <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4">
                <a
                href="#"
                className="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full"
                >
                <img
                    src={file.avatarPoster}
                    alt="user name"
                    title="user name"
                    width="48"
                    height="48"
                    className="max-w-full rounded-full"
                />
                </a>
                <div>
                <h3 className="text-xl font-medium text-slate-700">
                    {file.title}
                </h3>
                <p className="text-sm text-slate-400">{file.createdAt}</p>
                </div>
            </header>
            <div className="bg-white p-2 flex justify-center items-center flex-wrap">
            {file.categories.map(category => (
                <span key={category.categoryId}
                    className={`inline-flex items-center m-2 px-3 py-1 rounded-full text-sm font-semibold ${colors["green"]}`}>
                    <span className="ml-1">{category.category}</span>
                </span>
            ))}
        </div>
            <p>
                {file.description}
            </p>
            </div>
        </div>
    </div>
  )
}