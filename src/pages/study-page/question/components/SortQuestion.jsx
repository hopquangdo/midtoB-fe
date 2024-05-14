const SortQuestion = () => {
    return (
        <div className="flex flex-row items-center">
            <label className="m-2">Sắp xếp theo</label>
                <form class="max-w-sm mx-auto">
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Mới nhất</option>
                    <option>Nhiều điểm nhất</option>
                    <option>It điểm nhất</option>
                    <option>Trả lời nhiều nhất</option>
                </select>
            </form>
        </div>
    )
}
export default SortQuestion;