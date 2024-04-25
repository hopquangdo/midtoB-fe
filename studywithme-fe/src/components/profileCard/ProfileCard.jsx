import React from "react"

export default function ProfileCard() {
  const profile = {
    profileId: 999,
    avatar: "https://th.bing.com/th/id/OIP.IazLq_U8UvpVctzrO7sinwHaHa?rs=1&pid=ImgDetMain",
    firstName: "Do Quang",
    lastName: "Hop",
    address: "Ha Noi,Viet Nam",
    phoneNumber: "0969994310",
    email: "dqhit999@gmail.com",
  }
  return (
  <div class="flex items-center w-full justify-center">
    <div class="max-w-xs">
        <div class="bg-white shadow-xl rounded-lg py-3">
            <div class="photo-wrapper p-2">
                <img class="w-32 h-32 rounded-full mx-auto" src={profile.avatar} alt={profile.lastName}/>
            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{profile.firstName + " " + profile.lastName}</h3>
                <div class="text-center text-gray-400 text-xs font-semibold">
                    <p>Web Developer</p>
                </div>
                <table class="text-xs my-3">
                    <tbody><tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Địa chỉ</td>
                        <td class="px-2 py-2">{profile.address}</td>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Số điện thoại</td>
                        <td class="px-2 py-2">+{profile.phoneNumber}</td>
                    </tr>
                    <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">{profile.email}</td>
                    </tr>
                </tbody></table>

                <div class="text-center my-3">
                    <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href={`/user/${profile.profileId}`}>Trang cá nhân</a>
                </div>

            </div>
        </div>
    </div>

  </div>
  )
}