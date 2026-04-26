import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="text-8xl font-display font-bold text-primary/20 mb-4">404</div>
      <h1 className="font-display text-6xl font-bold text-base-content mb-3">
        Page Not Found
      </h1>
      <p className="text-gray-400 max-w-md mb-8">
        Oops! The page you're looking for doesn't exist. Maybe this friendship has
        already moved on?
      </p>
      <Link href="/" className="btn btn-primary text-white px-8">
        Back to Home
      </Link>
    </div>
  );
}
