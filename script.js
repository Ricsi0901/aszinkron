$(function(){
    const myAszinkron=new MyAszinkron();
  //  let vegpont ="https://pokeapi.co/api/v2/pokemon/pikachu";
  let szuloElem=$("section");
  let sablonElem=$(".sablon");
    let pokemon={};
//myAszinkron.getAdat(vegpont,pokemon,termekLista,hibakezeles);
function megjelenit(pokemon){
    console.log(pokemon.name);
    $("h2").html(pokemon.name);
    $("img").attr("src",pokemon.sprites.front_default);
   
};
 aktualispokemon();
function aktualispokemon(){
    for (let i = 0; i < 60; i++) {
        vegpont ="https://pokeapi.co/api/v2/pokemon/"+i;
        myAszinkron.getAdat(vegpont,pokemon,termekLista,hibakezeles);
    }
}

function hibakezeles( hiba){
console.log(hiba);
$("h2").html("nincs ilyen Pokemon");
    $("img").attr("src","kep/hiba.jpg");
}
$("button").on("click",()=>{
    let id=Math.floor(Math.random()*1000)
    vegpont ="https://pokeapi.co/api/v2/pokemon/"+id;
    myAszinkron.getAdat(vegpont,pokemon,megjelenit,hibakezeles);
})
function termekLista(pokemon) {
  
      let node = sablonElem.clone().appendTo(szuloElem)
      const obj = new pokemonok(node, pokemon)
    
    
}


})