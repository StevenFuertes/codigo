const container = document.querySelector(".container");
const urlChallenge = "https://www.omdbapi.com/?s=avengers&apikey=4b229795&";

async function readChallenge(challeng) {
    
    const respuesta = await fetch(urlChallenge);
    const data = await respuesta.json();
    // console.log(data)
    // console.log(data.Search)
    container.innerHTML = "";
  data.Search.forEach((challenge,index)=>{
    container.innerHTML += `<div class="card">
        <h4>${challenge.Title}</h4>
        <p>
          ${challenge.Year}
        </p>
        <img src="${challenge.Poster}" alt="">
        </div>
    `;
  });
}

readChallenge()