import useDocumentHead from "../hooks/useDocumentHead";

export default function NotFound() {
  useDocumentHead({
    title: "Page Not Found - Reimagen",
    description: "The page you are looking for does not exist.",
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="bg-rose-600 text-white px-6 py-2 rounded hover:bg-rose-700"
      >
        Go Home
      </a>
    </div>
  );
}
