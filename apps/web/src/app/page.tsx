export default function Home() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-md w-full mx-4">
        <div className="text-center">
          {/* Logo */}
          <div className="w-16 h-16 bg-[#2272B4] rounded-xl flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">E</span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            EdgexCRM
          </h1>
          <p className="text-gray-500 mb-6">
            Education-focused CRM for Admizz
          </p>

          {/* Status */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm">
              <span className="font-medium">Phase 0:</span> Infrastructure Setup
            </p>
            <p className="text-blue-600 text-xs mt-1">
              Frontend scaffold complete. Backend coming next.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="text-left">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                Next.js 15
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                NestJS
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                PostgreSQL
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                Prisma
              </span>
              <span className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-600">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
