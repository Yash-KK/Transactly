const LoadingSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        {/* Add Money Form Skeleton */}
        <div className="min-h-[50vh] lg:h-[calc(100vh-64px)] flex justify-center items-center flex-col bg-slate-200 p-4">
          <div className="h-12 w-48 bg-gray-300 animate-pulse mb-6 rounded"></div>
          <div className="w-full rounded-lg border border-gray-200 max-w-xl lg:p-8">
            <div className="space-y-4">
              <div className="h-4 w-20 bg-gray-300 animate-pulse"></div>
              <div className="h-10 w-full bg-gray-300 animate-pulse rounded"></div>
              <div className="h-4 w-20 bg-gray-300 animate-pulse"></div>
              <div className="h-10 w-full bg-gray-300 animate-pulse rounded"></div>
              <div className="h-10 w-full bg-gray-300 animate-pulse rounded mt-4"></div>
            </div>
          </div>
        </div>

        {/* Balance and Transactions Skeleton */}
        <div className="flex flex-col bg-slate-200">
          {/* Balance Skeleton */}
          <div className="h-1/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800">
            <div className="h-8 w-32 bg-gray-600 animate-pulse rounded"></div>
            <div className="space-y-4 pt-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 w-full bg-gray-600 animate-pulse rounded"
                ></div>
              ))}
            </div>
          </div>

          {/* Recent Transactions Skeleton */}
          <div className="h-2/3 m-5 space-y-4 border rounded p-6 border-gray-700 bg-gray-800">
            <div className="h-8 w-48 bg-gray-600 animate-pulse rounded"></div>
            <div className="space-y-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-16 w-full bg-gray-600 animate-pulse rounded"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoadingSkeleton;
