import { useState } from "react"; 
// useState siempre va en la primera linea
import './App.css';
import hotel from "./assets/icons/hotel.png";
import link from "./assets/icons/link.png";
import pin from "./assets/icons/pin.png";
import stevenpick from "./assets/icons/stevenpick.jpg";
import search_1 from "./assets/icons/search_1.png";
import sun from "./assets/icons/sun.png";
import twitter from "./assets/icons/twitter.png";
import Header from "./components/Header";

function App() {

  // para almacenar un valor  en una variable en react tenemos q usar hook y este hook esta expresado importando useState siempre
  const [inputText, setInputText] = useState("");


// setInputText es la variable que se usa cuando queremos cambiar el nombre

// inputText es la variable que almacena al nombre

const [user,setUser]= useState({
  name: "",
  created_at: "",
})
  function handleInputChange(event) {
    setInputText(event.target.value);
  }
// para consumir una API colocamos lo siguiente con async
  async function searchUser() {
    try {
      const response = await fetch(`https://api.github.com/users/${inputText}`);
      const data = await response.json();

      // setInputText es la variable que se usa cuando queremos cambiar el user
      setUser(data);

    } catch (error) {
      console.log("Error",error);
    }

  }

  return (
    <div className="container">
        <div className="section-1">
          <h4 className="title">devfinder</h4>
          <button className="btn-mode">LIGHT<img src={sun} alt="" width="15"/></button>
        </div>
        <div className="search-container">
          <div className="input-container">
            <img src={search_1} alt="" width="15"/>
            <input value={inputText} onChange={handleInputChange} className="input-search" type="text" placeholder="Search GitHub username..." />
          </div>
          <div>
            <button className="btn-search" onClick={searchUser}>Search</button>
          </div>
        </div>
        <div className="information-container">
            <div className="image-container">
                <img width="100" src={stevenpick} alt=""/>
            </div>
            <div className="description-container">
                <div className="user-date-container">
                    <h4>{user.name}</h4>
                    <p>{user.created_at}</p>
                </div>
                <div className="user-bio-container">
                    <p>@{user?.login}</p>
                    <p>{user?.bio}</p>
                </div>
                <div className="card-information">
                    <div>
                        <h5>Repos</h5>
                        <h2>{user?.public_repos}</h2>
                    </div>
                    <div>
                        <h5>Followers</h5>
                        <h2>{user?.followers}</h2>
                    </div>
                    <div>
                        <h5>Following</h5>
                        <h2>{user?.following}</h2>
                    </div>
                </div>
                <div className="info-container">
                    <div>
                        <p><img width="15" src={pin} alt=""/> &nbsp;{user?.location}</p>

                        <p><img width="15" src={link} alt=""/> &nbsp;{user?.blog}</p>
                    </div>
                    <div>
                        <p><img width="15" src={twitter} alt=""/> &nbsp;{user?.twitter_username}</p>
                        <p><img width="15" src={hotel} alt=""/> &nbsp;{user?.company}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
}

export default App;


