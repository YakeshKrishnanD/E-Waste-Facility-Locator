import { Link } from "react-router-dom";

export default function Recycle() {
  const categories = [
    { name: "Smartphone", description: "Recycle your old smartphones responsibly.", icon: "📱" },
    { name: "Laptop", description: "Dispose of your old laptops in an eco-friendly way.", icon: "💻" },
    { name: "Accessories", description: "Recycle various electronic accessories responsibly.", icon: "🎧" },
    { name: "Television", description: "Dispose of harmful components properly.", icon: "📺" },
    { name: "Refrigerator", description: "Safe removal and recycling of refrigerators.", icon: "🧊" },
    { name: "Other", description: "Recycle any other electronic devices.", icon: "⚙️" },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-green-700 text-center">Recycle Center</h1>

      <div className="mt-6 grid grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, index) => (
          <div key={index} className="p-6 bg-white shadow-md rounded-lg text-center">
            <h2 className="text-2xl">{category.icon}</h2>
            <h3 className="text-lg font-semibold mt-2">{category.name}</h3>
            <p className="text-gray-600 text-sm mt-2">{category.description}</p>
            <Link
              to="/e-facilities"
              className="mt-4 inline-block px-4 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition"
            >
              Recycle Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
