/*eslint-disable*/
import { useState, useEffect } from "react";
import "./App.css";


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


  const Car = ({msg}) => {
    
    return (

    <>
      <li>{msg.make}</li>
    </>
    )
  }

 

  return (
    <>
      <h1>HELLO </h1>
      <ul>

         { message.map(el => 
          <Car key = {el._id}  msg = {el}/>
         )}

      </ul>
    
    </>


  );
}

export default App;
