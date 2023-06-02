import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Characters from "./components/Characters";


function App() {

  const [characters, setCharacters] = useState([]);

  const inicialUrl = "https://swapi.dev/api/people/?search=";

  const fetchCharacters = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCharacters(inicialUrl);
  }, [])

  return (
    <>
     <Navbar />
     <div className="container mt-5">
      <Characters characters={characters}/>
     </div>
    </>
   

  );
}

export default App;
