const prev = 0;
const info = document.querySelector('.pokemon-info')
// =========================== one method by using fetch ===========================

// fetch(
//   `https://pokeapi.co/api/v2/pokemon?offset=${prev}&limit=3`,{
//   method :'GET',
//    header : {
//      "Content-type": "application/json; charset=UTF-8"
//    }
// }).then( response => response.json())
// .then(json => json.results)
// .then(result => console.log(result))

// ======================= with the help of npm package ============================
const interval = {
  offset: 0,
  limit: 3,
}

P.getPokemonsList(interval).then((response) =>
{ 

 const data = response.results;
 console.log(data)
 data.map((data)=>{
       const div = document.createElement('div')
       const h4 =  document.createElement('h4')
       const img = document.createElement('img')
       const para = document.createElement('p')
       h4.textContent = data.name
       div.append(h4)
       info.append(div)
 })
})

