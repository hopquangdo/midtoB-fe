const Pagination = () => {
    return (
        <div class="inline-flex -space-x-px text-sm p-2">
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">Trước</a>
            </div>
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">1</a>
            </div>
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">2</a>
            </div>
            <div>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-black border border-gray-300 bg-white hover:bg-gray-100 hover:text-gray-700">3</a>
            </div>
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">4</a>
            </div>
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
            </div>
            <div>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-black bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">Sau</a>
            </div>
        </div>
    )
}
export default Pagination;