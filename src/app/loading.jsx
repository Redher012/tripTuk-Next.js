export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Spinner */}
        <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin"></div>

        {/* Optional Text */}
        <p className="text-green-800 text-sm font-medium">Loading...</p>
      </div>
    </div>
  );
}
