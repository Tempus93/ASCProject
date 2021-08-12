// API URLs
let poke_url;
let giphy_url;
let Data = [];

//
const search = document.querySelector('#Search_Bar');
const search_butt = document.querySelector("#search_button");
const poke_contain = document.querySelector('.containers');

//Click event
search_butt.addEventListener("click",result);

function result(event){
    event.preventDefault();
    let userInput = search.value
    poke_url = `https://pokeapi.co/api/v2/pokemon/${userInput}`
    
    fetch(poke_url)
        .then(function(response){
            return response.json()
        })
        .then(function(pokemon){

            console.log(pokemon)
            return poke_contain.innerHTML = `
            <img src = '${pokemon.sprites.front_default}' id = poke_img>
            <div id="name">${pokemon.name}</div>

            <div id='text'>
                <div id="Stats">
                    <div id="half1">
                        <div id="HP">HP: ${pokemon.stats[0].base_stat}</div>
                        <div id="ATTK">ATTK: ${pokemon.stats[1].base_stat}</div>
                        <div id="DEF">DEF: ${pokemon.stats[2].base_stat}</div>
                    </div>
                    <div id = "null"></div>

                    <div id ="half">
                        <div id="SPEC-ATTK">SPEC-ATTK: ${pokemon.stats[3].base_stat}</div>
                        <div id="SPEC-DEF">SPEC-DEF: ${pokemon.stats[4].base_stat}</div>
                        <div id="SPD">SPEED: ${pokemon.stats[5].base_stat}</div>
                    </div>

                </div>
            </div>
            `

        })
    
    search.value = "";

    

    
}




