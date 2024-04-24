import React, { useState } from 'react';
import PostCard from '../postCard/PostCard';

const ListPost = () => {
  const fakePosts = [
    {
      id: 1,
      author: 'Đỗ Quang Hợp',
      avatar: 'https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain',
      content: `Có tin đồn mới đây cho rằng Apple đã đóng cửa dây chuyền sản xuất FineWoven, có thể là dấu chấm hết cho loại vật liệu phụ kiện gây tranh cãi này. Hồi ra mắt iPhone 15, Apple đã quảng cáo rầm rộ cho FineWoven như một loại vật liệu thay thế da. Lúc mới ra mắt, thật sự nó trông cũng đẹp, nhưng thực tế lại không được như kỳ vọng, nó quá dễ trầy và xuống cấp sau vài ngày sử dụng.
      Trên X, chuyên gia phụ kiện Kosutami cho rằng các dây chuyền sản xuất FineWoven đã dừng lại. Chưa rõ nguồn gốc thông tin này nhưng nếu Apple thực sự làm vậy thì cũng có lý do cả. Trải nghiệm thực tế của nhiều người cho thấy FineWoven là một vật liệu rất kém về độ bền và khả năng chống bám bẩn thấp khi dùng làm ốp lưng iPhone. Apple có thể sẽ tiếp tục tìm kiếm vật liệu thay thế da.`,
      imageUrl: [
        'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg',
        'https://photo2.tinhte.vn/data/attachment-files/2024/04/8315017_8133074-tinhte-apple-iphone-15-finewoven-case-14.jpg'], 
    },
    {
        id: 2,
        author: "Nguyễn Huy Toàn",
        avatar: "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/428310535_409444768107366_1235906940068916350_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG-sQipIi_NiKk0w32Lcrkh0I5IVZG_iqXQjkhVkb-KpWfuOg5TiIQe6s8olJTyQz6DODo8NNZfqiI850zAbUJ6&_nc_ohc=2llpMUPic68Ab7xLDhk&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBrnqezFHs__KIma2PnivkOWVb38At4HfaVQx7mTMElKg&oe=662C2B9B",
        content: `HỌC NGÔN NGỮ/CÔNG NGHỆ ABC, XYZ NÊN BẮT ĐẦU TỪ ĐÂU NHỈ?
        -----
        Có rất nhiều cậu đang đi học và cả đi làm nhưng vẫn hay đặt câu hỏi về lộ trình học các ngôn ngữ/công nghệ mới để sớm trở thành "Fullstack". Vì thế nên tớ xin chia sẻ đến cậu một RoadMap rất nổi tiếng trong ngành IT, được đánh giá hơn 278k sao, 36.6k forks và được rất nhiều lập trình viên chuyên nghiệp đề xuất. 
        Trang này cung cấp các lộ trình học ngôn ngữ python, go, java,... và hướng đi Front End, Back End, DevOps,... Mới đây trang mới cập nhật giao diện và bổ sung thêm nhiều Roadmap để các dev tham khảo như Data Analyst, Game Developer, Devops, Fullstack, TypeScript, Flutter, Docker, MongoDB, Computer Science, Cyper Security, SQL,... cũng như giúp bạn tạo 1 Roadmap tự học bằng AI😃`,
    },
    {
        id: 3,
        author: "Code Mely",
        avatar: "https://scontent.fhan2-3.fna.fbcdn.net/v/t39.30808-6/435696109_408501075234210_5408508025394267323_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFnEOwuzfwoduvAC2De9-dpKvqkIKEmshoq-qQgoSayGiIVW2hxsxypqz6ewlpyGtFsgCNai6Xnnijb2Fap-gKO&_nc_ohc=LrNJwai4rwcAb41Ebm-&_nc_ht=scontent.fhan2-3.fna&oh=00_AfA-U16leceP5A5oPXD5x4Wl-JjWOOswnh5OHw8e_areTg&oe=662C31A4",
        content: `MELY TOUR HỒ CHÍ MINH - GIỚI THIỆU CÔNG TY NETCOMPANY
        ——
        Netcompany là công ty tư vấn dịch vụ trong lĩnh vực CNTT, thành lập từ năm 2000 tại Copenhagen, Đan Mạch. Tính đến hết Quý 1 năm 2024, công ty có hơn 7700 nhân viên và các văn phòng hoạt động trên 10+ quốc gia, trải dài từ châu Âu đến Việt Nam.
        Kể từ khi được thành lập đến nay, Netcompany đóng vai trò quan trọng trong quá trình chuyển đổi số của khách hàng. Là một công ty cung cấp dịch vụ CNTT, khách hàng của Netcompany trải rộng xuyên suốt từ dịch vụ công (thuế, sức khỏe, giáo dục, di cư, giao thông công cộng, nhà ở,…) cho đến các khách hàng Doanh nghiệp (Bán lẻ, dịch vụ, sản xuất, năng lượng, tài chính…). Chúng tôi có niềm tin cốt lõi rằng nếu được thực hiện đúng cách, Công nghệ sẽ tạo ra sự khác biệt thật sự và tích cực đối với xã hội, doanh nghiệp, môi trường và tương lai của chúng ta.
        Netcompany đặt sự phát triển của nhân viên làm trọng tâm. Công ty tin rằng mỗi cá nhân cần phải được thử thách và luôn trau dồi kĩ năng mới trong suốt quá trình làm việc để không ngừng cải thiện bản thân. Do đó, tại Netcompany, mỗi nhân viên đều được hỗ trợ và trao quyền để đảm nhận các nhiệm vụ ở mức độ cao, không phụ thuộc vào tuổi tác và kinh nghiệm. Công ty hướng đến việc xây dựng một môi trường làm việc đa văn hóa, công bằng và tôn trọng tất cả các cá nhân và trao cơ hội bình đẳng cho mọi người, không phụ thuộc giới tính, tôn giáo, địa vị xã hội, …
        Với sự phát triển liên tục và lớn mạnh không ngừng, Netcompany luôn tìm kiếm những ứng viên IT có kĩ năng, mong muốn phát triển các giải pháp để chuẩn bị cho tương lai của xã hội. Netcompany luôn sẵn lòng đầu tư cho sự phát triển sự nghiệp của bạn, và mong muốn mang đến cho bạn những cơ hội tốt nhất trong suốt thời gian làm việc với chúng tôi.
        Tìm hiểu thêm về Netcompany tại đây : https://www.netcompany.com/  hoặc theo dõi các hoạt động của Netcompany Việt Nam tại Facebook page: https://www.facebook.com/netcompanyvietnam
        Link đăng kí tham gia chúng mình để ở dưới phần bình luận nhaaa 🫶
         ——
        MELY TOUR VIỆT NAM
        📍Trạm Đà Nẵng: 09/04/2024
        📍Trạm Hồ Chí Minh: 25/04/2024
        📍Trạm Hà Nội: 08/05/2024
        #melytour #CodeMeLy #Netcompany`,
        imageUrl: [
            "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/436225558_409215641829420_6064240971518668705_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGyeMADBX5FgUfmFEGY4RIvVWre5rQWXXhVat7mtBZdeCpJSQHmBAaaFMZ5qmhCQMyIEjkPvJfNzyuyt3SPDbcW&_nc_ohc=VfQY_bViJJIAb6ReD4p&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBqiuXhBeik_wiUs6c8X6B9diOjzYWSRU-NcDuZTf8jHw&oe=662C48C9",
            "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/437930981_409215581829426_7119299440565503161_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF01Lqs96PWw46yN5JNxQevlpuZwOu5BN6Wm5nA67kE3qq4y4MCq5VxSYgUwNTrZ0F9LKrrgXBz8MrS9Baw9mfu&_nc_ohc=5IQb359YACIAb6Cgltk&_nc_ht=scontent.fhan2-5.fna&oh=00_AfD3sa6TJdx1AU-lf9z3Ox9atbzRmNpJbxtSktD5QImEPQ&oe=662C4871",
            "https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/437944265_409215591829425_8639984858206878516_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH5Yju_fSaekSVmf3cqaz_--SrXlK9ksAn5KteUr2SwCeBmp6hI_ojuuyAKV5OPT45E0hOwZK9hYDzuRwg2HN06&_nc_ohc=KERs8seKC0cAb7O53WI&_nc_oc=AdhkXuTkrsfCup48tgXuZhgQEc8yQn75UImrfvcNAcq4u9FP8dreptROyJqRxBJ5anIIesNNmDoamVkjTWDkkJ85&_nc_ht=scontent.fhan2-4.fna&oh=00_AfBiqUFneiq1O3JOgKCZp2MosN2ptSw7zh6rPP4ti2Pe4g&oe=662C4D39",
            "https://scontent.fhan20-1.fna.fbcdn.net/v/t39.30808-6/437971397_409215558496095_2127571930716592855_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFznL_cid6PDw_MxKx9DQPEly1RYN9xk36XLVFg33GTftfBSldEub5czqy9whzpgaonxIyFksl27bn5Dlf2Qtbe&_nc_ohc=g9vAAb7vJuEAb7HPIAD&_nc_ht=scontent.fhan20-1.fna&oh=00_AfBmhtTJ3vsacAky6wjXE7dQn-fjWRXCdEvmhZ2_QupMVw&oe=662C4B79",
        ]
    }
  ];

  return (
    <div className="grid grid-cols-1 gap-4">
      {fakePosts.map(post => (
        <div key={post.id} className="aspect-w-1">
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default ListPost;
