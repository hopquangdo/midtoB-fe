import { Link } from "react-router-dom";

const SuggestFriends = () => {

    const listUser = [
        {userId: 1,fullName: "Neil Simss", email: "email@windster.com",avatar: "https://i.pinimg.com/564x/e7/2f/15/e72f15515d821033a2710f233dd1718a.jpg"},
        {userId: 2,fullName: "Michael Gough", email: "email@windster.com",avatar: "https://i.pinimg.com/564x/e7/2f/15/e72f15515d821033a2710f233dd1718a.jpg"},
        {userId: 3,fullName: "Lana Byrd", email: "email@windster.com",avatar: "https://i.pinimg.com/564x/e7/2f/15/e72f15515d821033a2710f233dd1718a.jpg"},
        {userId: 4,fullName: "Thomes Lean", email: "email@windster.com",avatar: "https://i.pinimg.com/564x/e7/2f/15/e72f15515d821033a2710f233dd1718a.jpg"},
        {userId: 5,fullName: "Neil Simss", email: "email@windster.com",avatar: "https://i.pinimg.com/564x/e7/2f/15/e72f15515d821033a2710f233dd1718a.jpg"},
    ]
    return (
        <div className="w-full max-h-[450px] max-w-[300px] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
            <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 ">Đề xuất bạn bè</h5>
                <Link to="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                    Xem tất cả
                </Link>
            </div>
            <div className="flow-root divide-y divide-gray-200">
                {listUser.map((user) => (
                    <div key={user.userId}  className="flex items-center py-3 sm:py-4">
                        <div className="flex-shrink-0">
                            <img className="w-8 h-8 rounded-full" src={user.avatar} alt={user.fullName}/>
                        </div>
                        <div className="flex-1 min-w-0 ms-4">
                            <p className="text-sm font-medium text-gray-900 truncate ">
                                {user.fullName}
                            </p>
                            <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                {user.email}
                            </p>
                        </div>
                        <button className="inline-flex items-center text-base font-semibold text-gray-900 ">
                                    Theo dõi
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SuggestFriends;