export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Banner skeleton */}
      <div className="bg-base-300 rounded-2xl h-48 animate-pulse mb-10" />

      {/* Cards skeleton grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-base-300 animate-pulse">
            <div className="w-16 h-16 bg-base-300 rounded-full mb-4" />
            <div className="h-4 bg-base-300 rounded w-3/4 mb-2" />
            <div className="h-3 bg-base-300 rounded w-1/2 mb-4" />
            <div className="flex gap-2">
              <div className="h-5 bg-base-300 rounded-full w-16" />
              <div className="h-5 bg-base-300 rounded-full w-20" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
