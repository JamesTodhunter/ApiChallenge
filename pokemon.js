let mudkip = document.querySelector('form')
let froakie = document.querySelector('.pokemonId')

const retrievePokemon = async (j) => {
    j.preventDefault()
    let id = document.getElementById("pokemonId").value
    try {
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${id}`;
        let response = await fetch(apiURL);
        let pokemonData = await response.json();
        console.log(pokemonData)
        dreamEater(pokemonData.name)
    } catch (error) {
        console.log(error)
    }
};

function dreamEater(name) {
    console.log(name)
    document.getElementById("gengarsBreakfeast").innerText = name

};


mudkip.addEventListener('submit', retrievePokemon)

