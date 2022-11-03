import { useState } from "react";
import UserInformation from "./components/UserInformation";
import Swal from "sweetalert2";
// useState siempre va en la primera linea
import './App.css';

// import stevenpick from "./assets/icons/stevenpick.jpg";
import SearchContainer from "./components/SearchContainer";
import SectionContainer from "./components/SectionContainer";



function App() {

  // para almacenar un valor  en una variable en react tenemos q usar hook y este hook esta expresado importando useState siempre
  const [inputText, setInputText] = useState("");


  // setInputText es la variable que se usa cuando queremos cambiar el nombre

  // inputText es la variable que almacena al nombre

  const [user, setUser] = useState(null)
  
  function handleInputChange(event) {
    setInputText(event.target.value);
  }
  // para consumir una API colocamos lo siguiente con async
  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      if ( data.message === "Not Found"){
        Swal.fire("Error", "El usuario que buscas no existe","error")
        setInputText("");
        return;
      }

      // setInputText es la variable que se usa cuando queremos cambiar el user
      setUser(data);
      setInputText("");

    } catch (error) {
      console.log("Error", error);
    }

  }

  return (
    <div className="container">
      <SectionContainer/>
      <SearchContainer
        inputText={inputText}
        handleInputChange={handleInputChange}
        searchUser={searchUser}
      />
      {/* aca validamos si existe el usuario con las llaves y && */}
      {user &&  <UserInformation user={user} />}
    </div>
  );
}

export default App;


