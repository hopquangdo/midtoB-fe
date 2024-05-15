import ListVideoCard from '../components/ListVideoCard';
const CoursePage = () => {
  return (
    <>
      <div className="relative text-gray-600 focus-within:text-gray-400 max-w-96 w-full mx-auto mt-8 px-3">
        <span className="absolute inset-y-0 left-3 flex items-center pl-2">
          <button
            type="submit"
            className="p-1 focus:outline-none focus:shadow-outline"
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </span>
        <input
          type="search"
          name="q"
          className="py-2 text-sm text-white bg-gray-900 rounded-md pl-10 focus:outline-none focus:bg-gray-300 focus:text-gray-900 w-full"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <ListVideoCard />
    </>
  );
};
export default CoursePage;
