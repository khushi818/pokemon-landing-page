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

const image_value = async(url,div) =>{
      const response = await fetch(url,{
  method :'GET',
   header : {
     "Content-type": "application/json; charset=UTF-8"
   }
});
       console.log(url)
       const json =  await response.json()
       console.log(json)
       const image =  await json.sprites.front_default
       const img = document.createElement('img')
       img.src = `${image}`
       div.append(img)
}

const callingApi = async() =>{
 const response = await P.getPokemonsList(interval)
 const data = await response.results;
 console.log(data)
 data.map((data)=>{
       const div = document.createElement('div')
       const h4 =  document.createElement('h4')
       div.classList.add('card'); 
       image_value(data.url,div)
    //    const para = document.createElement('p')
       h4.textContent = data.name
       
       div.append(h4)
       info.append(div)
})
}



// setInterval(() => {
//     callingApi();
//     interval.offset += 3;
// }, 2000);

