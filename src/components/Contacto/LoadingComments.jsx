const LoadingComments = () => {
  return (
    <>
      <div role="status" className="max-w-sm animate-pulse">
        <div className="flex flex-row items-center gap-2 mb-4">
          <div className="flex-shrink-0">
            <span className="block w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28"></div>
          </div>
        </div>

        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="max-w-sm mt-2 animate-pulse">
        <div className="flex flex-row items-center gap-2 mb-4">
          <div className="flex-shrink-0">
            <span className="block w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28"></div>
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
      <div role="status" className="max-w-sm animate-pulse">
        <div className="flex flex-row items-center gap-2 mb-4">
          <div className="flex-shrink-0">
            <span className="block w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700"></span>
          </div>
          <div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-2"></div>
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-28"></div>
          </div>
        </div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default LoadingComments;
