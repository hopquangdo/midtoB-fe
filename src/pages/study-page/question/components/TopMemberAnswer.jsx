const TopMemberAnswer = () => {
    const userTopAnswers = [
        {userId: 1,fullName: "Do Quang Hop",avatar:"https://i.pinimg.com/564x/67/50/a3/6750a38b1240a22e9bf9183b13e84ebb.jpg", score: 999},
        {userId: 2,fullName: "Do Khoi Nguyen",avatar: "https://i.pinimg.com/564x/08/ef/97/08ef97824a1551795475d465f19a31df.jpg", score: 888},
        {userId: 3,fullName: "Do Quang Hop",avatar: "https://i.pinimg.com/736x/8b/79/8a/8b798a2452c4100c32f2e4323e39bd15.jpg", score: 999},
        {userId: 4,fullName: "Do Khoi Nguyen",avatar: "https://i.pinimg.com/736x/7a/40/13/7a4013e5800d21f91a103afe2ff28846.jpg", score: 888},
        {userId: 5,fullName: "Do Quang Hop",avatar: "https://i.pinimg.com/474x/43/a2/56/43a2560b3392a36bc6f4be8c55730a2a.jpg", score: 999},
    ]
    return (
        <div className="hidden lg:flex min-w-[250px] flex-col border boder-gray-300 h-full p-2 m-3">
            <div className="text-xl font-medium text-gray-800 flex flex-row items-center">
                Thành viên hăng hái
                <svg class="w-6 h-6 text-blue-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7.171 12.906-2.153 6.411 2.672-.89 1.568 2.34 1.825-5.183m5.73-2.678 2.154 6.411-2.673-.89-1.568 2.34-1.825-5.183M9.165 4.3c.58.068 1.153-.17 1.515-.628a1.681 1.681 0 0 1 2.64 0 1.68 1.68 0 0 0 1.515.628 1.681 1.681 0 0 1 1.866 1.866c-.068.58.17 1.154.628 1.516a1.681 1.681 0 0 1 0 2.639 1.682 1.682 0 0 0-.628 1.515 1.681 1.681 0 0 1-1.866 1.866 1.681 1.681 0 0 0-1.516.628 1.681 1.681 0 0 1-2.639 0 1.681 1.681 0 0 0-1.515-.628 1.681 1.681 0 0 1-1.867-1.866 1.681 1.681 0 0 0-.627-1.515 1.681 1.681 0 0 1 0-2.64c.458-.361.696-.935.627-1.515A1.681 1.681 0 0 1 9.165 4.3ZM14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"/>
                </svg>
            </div>
            {userTopAnswers.map((user) => (
                <div key={user.userId} className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-center">
                        <img className="w-5 h-5 rounded-full object-cover m-2" src={user.avatar}/>
                        <div className="text-sm font-medium text-gray-700">{user.fullName}</div>
                    </div>
                    <div className="flex flex-row">
                        <div className="text-sm m-1 font-medium text-gray-900">
                            {user.score}
                        </div>
                        <div className="text-sm m-1 font-medium text-gray-900">
                            điểm
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default TopMemberAnswer;