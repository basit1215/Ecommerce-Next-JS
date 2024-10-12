import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center  bg-gray-100 h-[90.6vh]">
      <h4 className="text-5xl font-bold text-orange-500 mb-4">Page Not Found</h4>
      <p className="text-xl text-gray-600">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
        Go Back to Home
      </Link>
    </div>
  )
}

export default NotFound