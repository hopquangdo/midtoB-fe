import React from "react";

export default function Comment({ postId }) {
  const fakeComments = [
    {
      postId: 1,
      id: 1,
      author: 'Đỗ Quang Hợp',
      avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
      content: `Có tin đồn yền sản xuất FineWoven đã ngừng lại. Chưa rõ nguồn gốc thông tin này nhưng nếu Apple thực sự làm vậy thì cũng có lý do cả. Trải nghiệm thực tế của nhiều người cho thấy FineWoven là một vật liệu rất kém về độ bền và khả năng chống bám bẩn thấp khi dùng làm ốp lưng iPhone. Apple có thể sẽ tiếp tục tìm kiếm vật liệu thay thế da.`,
      reply: [
        {
          id: 1,
          author: 'Người trả lời 1',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Bình luận của người trả lời 1',
        },
        {
          id: 2,
          author: 'Người trả lời 2',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Bình luận của người trả lời 2',
        },
      ],
    },
    {
      postId: 2,
      id: 2,
      author: "Nguyễn Huy Toàn",
      avatar: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/428310535_409444768107366_1235906940068916350_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-sQipIi_NiKk0w32Lcrkh0I5IVZG_iqXQjkhVkb-KpWfuOg5TiIQe6s8olJTyQz6DODo8NNZfqiI850zAbUJ6&_nc_ohc=2llpMUPic68Ab7xLDhk&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBrnqezFHs__KIma2PnivkOWVb38At4HfaVQx7mTMElKg&oe=662C2B9B",
      content: `HỌC NGÔN NGỮ/CÔNG NGHỆ ABC, XYZ NÊN BẮT ĐẦU TỪ ĐÂU NHỈ?
      ----- python, go, java,... và hướng đi Front End, Back End, DevOps,... Mới đây trang mới cập nhật giao diện và bổ sung thêm nhiều Roadmap để các dev tham khảo như Data Analyst, Game Developer, Devops, Fullstack, TypeScript, Flutter, Docker, MongoDB, Computer Science, Cyper Security, SQL,... cũng như giúp bạn tạo 1 Roadmap tự học bằng AI😃`,
      reply: [
        {
          id: 1,
          author: 'Người trả lời 1',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Bình luận của người trả lời 1',
        },
      ],
    },
    {
      postId: 3,
      id: 3,
      author: "Code Mely",
      avatar: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/435696109_408501075234210_5408508025394267323_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnEOwuzfwoduvAC2De9-dpKvqkIKEmshoq-qQgoSayGiIVW2hxsxypqz6ewlpyGtFsgCNai6Xnnijb2Fap-gKO&_nc_ohc=LrNJwai4rwcAb41Ebm-&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA-U16leceP5A5oPXD5x4Wl-JjWOOswnh5OHw8e_areTg&oe=662C31A4",
      content: `MELY TOUR HỒ CHÍ MINH - GIỚI THIỆU CÔNG TY NETCOMPANY
      MELY TOUR VIỆT NAM
      📍Trạm Đà Nẵng: 09/04/2024
      📍Trạm Hồ Chí Minh: 25/04/2024
      📍Trạm Hà Nội: 08/05/2024
      #melytour #CodeMeLy #Netcompany`,
      reply: [
        {
          id: 1,
          author: 'Người trả lời 1',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Ok đó bạn',
        },
        {
          id: 2,
          author: 'Người trả lời 2',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Bình luận của người trả lời 2',
        },
        {
          id: 3,
          author: 'Người trả lời 3',
          avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
          content: 'Bình luận của người trả lời 3',
        },
      ],
    },
  ];

  const renderComment = (comment) => (
    <div key={comment.id} role="article" className="relative pl-5">
      <div className="flex flex-col flex-1 gap-1">
        <a
          href="#"
          className="absolute z-10 inline-flex items-center justify-center w-6 h-6 text-white rounded-full -left-3 ring-2 ring-white"
        >
          <img
            src={comment.avatar}
            alt={comment.author}
            title={comment.author}
            width="48"
            height="48"
            className="max-w-full rounded-full"
          />
        </a>
        <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
          <span className="flex-1">
            {comment.author}
            <span className="text-sm font-normal text-slate-500">
              {" "}
              1 phút trước
            </span>
          </span>
          <span className="text-xs font-normal text-slate-400">
            {" "}
            3 giờ trước
          </span>
        </h4>
        <p className="text-sm text-slate-500">{comment.content}. </p>
        {renderReplies(comment.reply)}
        
      </div>
      <input className="w-full outline-none" placeholder="Bình luận.."/>
    </div>
  );

  const renderReplies = (replies) => {

    return (
      <React.Fragment>
      {replies.map((reply) => (
        <div key={reply.id} className="pl-5 flex items-start">
          <a
            href="#"
            className="inline-flex items-center justify-center w-10 h-10 text-white rounded-full ring-2 ring-white"
          >
            <img
              src={reply.avatar}
              alt={reply.author}
              title={reply.author}
              // width="48"
              // height="48"
              className="w-8 h-8 rounded-full"
            />
          </a>
          <div className="ml-2 flex flex-col flex-1 gap-2">
            <h4 className="text-base font-medium leading-6 text-slate-700">
              {reply.author}
              <span className="text-xs font-normal text-slate-400 ml-1">
                1 phút trước
              </span>
            </h4>
            <p className="text-sm text-slate-500">{reply.content}</p>
          </div>
        </div>
      ))}
      <input className="w-ful ml-10 outline-none" placeholder="Bình luậnnn.."/>
      </React.Fragment>
    )
  }
  const filteredComments = fakeComments.filter(
    (comment) => comment.postId === postId
  );

  return (
    <div className="border-t-2 mt-1 border-gray-100 relative flex flex-col gap-12 py-5 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 ">
      {filteredComments.map((comment) => (
        renderComment(comment)
      ))}
    </div>
  );
}
