import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreditStructure() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch disposal history from backend
    axios
      .get("http://localhost:5000/user/history")
      .then((res) => {
        setHistory(res.data.history);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="p-6 min-h-screen bg-white text-center">
      <h1 className="text-3xl font-bold text-green-700">User Profile</h1>
      <div className="bg-gray-100 p-4 rounded-lg shadow-md mt-4">
        <p className="text-xl font-semibold">John Doe</p>
        <p className="text-gray-600">johndoe@example.com</p>
      </div>

      {/* Disposal History */}
      <h2 className="text-2xl font-bold text-green-700 mt-6">Disposal History</h2>
      <div className="mt-4 p-4 bg-gray-100 rounded-lg shadow-md">
        {history.length > 0 ? (
          history.map((item, index) => (
            <p key={index} className="p-2 bg-white rounded-md shadow-sm mb-2">
              {item.device} - Earned <span className="font-bold">{item.credits}</span> credits
            </p>
          ))
        ) : (
          <p>No disposal history available.</p>
        )}
      </div>

      {/* Dispose Button */}
      <button
        onClick={() => navigate("/dispose")}
        className="mt-6 px-5 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        Dispose E-Waste
      </button>
    </div>
  );
}
