import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [message, setMessage] = useState("");
  const [count, setCount] = useState(0);
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
  const increaseCount = function () {
    setCount(count + 1);
  };
  return (
    <>
      <h1>HELLO {message}</h1>
      <button onClick={() => increaseCount()}>Increment Count {count}</button>
    </>
  );
}

export default App;
