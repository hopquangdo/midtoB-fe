import React from "react";
import VideoCard from "./VideoCard";

const ListVideoCard = () => {
    const videos = [
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},{id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
        {id: 1,poster: "By Do Hop",title:"Web Developer là gì? Để trở thành Web Developer cần có những yếu tố gì?",banner:"https://asd.mediacdn.vn/adt/tuyendungvccorp/Xanh_duong_Cac_thanh_phan_Cung_kich_thuoc_&_Gia_lap_Cong_nghe_trong_Giao_duc_Ban_thuyet_trinh_Cong_nghe_5452b57b-f3b5-4067-ac5f-91fd0a0e32db.jpg"},
    ]
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
            {videos.map(video => {
                return <VideoCard video={video}/>
            })}
        </div>
    );
};

export default ListVideoCard;
