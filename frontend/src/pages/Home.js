import { Link } from "react-router-dom";
import heroImage from "../assets/hero-image.png"; // Ensure the image is present in assets folder

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center text-center p-10 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800">
        Your technology partner for <span className="text-green-700">Innovative and Impactful</span>
      </h1>
      <p className="text-xl text-gray-600 mt-3">
        ELocate: Transforming E-Waste Management. Find E-waste facilities effortlessly.
      </p>

      {/* Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link to="/recycle" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
          Start Recycling
        </Link>
        <Link to="/facilities" className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">
          Locate Facility
        </Link>
      </div>

      {/* Image */}
      <div className="mt-10">
        <img src={heroImage} alt="E-Waste Recycling" className="w-96 rounded-full shadow-lg" />
      </div>
    </div>
  );
}
