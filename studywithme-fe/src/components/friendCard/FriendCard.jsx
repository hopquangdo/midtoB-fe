import React from "react"

export default function FriendCard() {
  return (
    <ul className="bg-white shadow-xl divide-y divide-slate-100">
      <li className="flex items-center gap-4 px-4 py-3">
        <h2 class="text-center text-xl text-gray-700 font-medium leading-5">Bạn bè</h2>
      </li>
      <li className="flex items-center gap-4 px-4 py-3">
        <div className="self-start">
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <img
              src="https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain"
              alt="user name"
              title="user name"
              width="32"
              height="32"
              className="max-w-full rounded-full"
            />
            <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
              <span className="sr-only"> offline </span>
            </span>
          </a>
        </div>

        <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
          <h4 className="text-base text-slate-700 ">Đỗ Quang Hợp</h4>
        </div>
      </li>
      <li className="flex items-center gap-4 px-4 py-3">
        <div className="self-start">
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <img
              src="https://www.elleman.vn/app/uploads/2023/05/10/222445/Tao-hinh-moi-la-cua-nam-nghe-si-trong-du-an-nay.-Nguon-Fanpage-Son-Tung-M-TP.jpg"
              alt="user name"
              title="user name"
              width="32"
              height="32"
              className="max-w-full rounded-full"
            />
            <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
              <span className="sr-only"> online </span>
            </span>
          </a>
        </div>
        <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
          <h4 className="text-base text-slate-700 ">Đỗ Khôi Nguyên</h4>
        </div>
      </li>
      <li className="flex items-center gap-4 px-4 py-3">
        <div className="self-start">
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <img
              src="https://th.bing.com/th/id/OIP.gl6KlZPsNW9GCMPWEIakjgHaHa?rs=1&pid=ImgDetMain"
              alt="user name"
              title="user name"
              width="32"
              height="32"
              className="max-w-full rounded-full"
            />
            <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
              <span className="sr-only"> online </span>
            </span>
          </a>
        </div>
        <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
          <h4 className="text-base text-slate-700 ">Nguyễn Việt Anh</h4>
        </div>
      </li>
      <li className="flex items-center gap-4 px-4 py-3">
        <div className="self-start">
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <img
              src="https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/435696109_408501075234210_5408508025394267323_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnEOwuzfwoduvAC2De9-dpKvqkIKEmshoq-qQgoSayGiIVW2hxsxypqz6ewlpyGtFsgCNai6Xnnijb2Fap-gKO&_nc_ohc=LrNJwai4rwcAb41Ebm-&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA-U16leceP5A5oPXD5x4Wl-JjWOOswnh5OHw8e_areTg&oe=662C31A4"
              alt="user name"
              title="user name"
              width="32"
              height="32"
              className="max-w-full rounded-full"
            />
            <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-emerald-500 p-1 text-sm text-white">
              <span className="sr-only"> online </span>
            </span>
          </a>
        </div>
        <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
          <h4 className="text-base text-slate-700 ">Nguyễn Huy Toàn</h4>
        </div>
      </li>
      <li className="flex items-center gap-4 px-4 py-3">
        <div className="self-start">
          <a
            href="#"
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full text-white"
          >
            <img
              src="https://th.bing.com/th/id/OIP.xfsAijGa6tsKWJ-TLTSAYgHaHd?w=1670&h=1681&rs=1&pid=ImgDetMain"
              alt="user name"
              title="user name"
              width="32"
              height="32"
              className="max-w-full rounded-full"
            />
            <span className=" absolute -bottom-0.5 -right-0.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
              <span className="sr-only"> offline </span>
            </span>
          </a>
        </div>
        <div className="flex min-h-[2rem] flex-col items-start justify-center gap-0">
          <h4 className="text-base text-slate-700 ">Phạm Lan</h4>
        </div>
      </li>
  </ul>
  )
}