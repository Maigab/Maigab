import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";


function App() {

  const [characters, setCharacters] = useState([]);

  const inicialUrl = "http://127.0.0.1:8000/api/esp32";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.esps))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, [])

  return (
    <>
     <Navbar />
     <div className="container mt-5" >
      <Characters characters={characters}/>
     </div>
    </>
   

  );
}

export default App;
