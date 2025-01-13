/*eslint-disable*/
import { useState, useEffect } from "react";
// import "index.css";

import axios from "axios";
function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const api = async () => {
      try {
        const response = await axios({
          method: "GET",
          url: "http://127.0.0.1:5000/",
        });
        console.log(response.data);
        setMessage(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    api(); // Call API on component mount
  }, []);

  const Car = ({ msg }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 transform transition duration-500 hover:scale-105 hover:shadow-xl">
        <h2 className="font-bold text-xl mb-2">{msg.make}</h2>
        <p className="text-gray-700">{msg.model}</p>
        <p className="text-gray-700">{msg.year}</p>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Details
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="font-bold text-center text-[32px] mb-6">
        Welcome To Cars App
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {message.map((el) => (
          <Car key={el._id} msg={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
