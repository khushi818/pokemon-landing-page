const prev = 0;
const info = document.querySelector('.pokemon-info')
const btn_next = document.querySelector('.next-slide')
const b1 = document.querySelector('.block1');
const b2 = document.querySelector('.block2');
const b3 = document.querySelector('.block3')
const block = document.querySelectorAll('block3')
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
// const interval = {
//   offset: 0,
//   limit: 3,
// }

let index  = 0;
const pokemon_data =[]
const callingApi = async() =>{
 const response = await P.getPokemonsList()
 const data = await response.results;
 pokemon_data.push(...data);
 console.log(pokemon_data);
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


callingApi();

const addDiv = (idx) => {
       const div  = document.createElement('div');
       const h4 =  document.createElement('h4')
       div.classList.add('card')
       div.dataset.idx = idx;
       image_value(pokemon_data[idx].url,div)
    //    const para = document.createElement('p')
       h4.textContent = pokemon_data[idx].name
       
       div.append(h4)
       info.append(div)
}


btn_next.addEventListener('click',()=>
{
    if(index > pokemon_data.length-1)
    {
        index = 0;
    }
    else{
       addDiv(index);
       index++;
       addDiv(index);
       index++;
       addDiv(index);
       index++;
    }
})

function spliceChildNodes(parent, start, deleteCount /*[, newNode1, newNode2]*/) {
	var childNodes = parent.childNodes;
	var removedNodes = [];

	// If `start` is negative, begin that many nodes from the end
	start = start < 0 ? childNodes.length + start : start

	// remove the element at index `start` `deleteCount` times
	var stop = typeof deleteCount === 'number' ? start + deleteCount : childNodes.length;
	for (var i = start; i < stop && childNodes[start]; i++) {
		removedNodes.push(parent.removeChild(childNodes[start]));
	}

	// add new nodes at index `start`
	if (arguments.length > 3) {
		var newNodes = [].slice.call(arguments, 3);

		// stick nodes in a document fragment
		var docFrag = document.createDocumentFragment();
		newNodes.forEach(function(el) {
			docFrag.appendChild(el);
		});

		// place in `parent` at index `start`
		parent.insertBefore(docFrag, childNodes[start]);
	}

	return removedNodes;
}


//setInterval(() => {
  
 
setInterval(()=>{
   btn_next.click();
   setTimeout(()=>{
   spliceChildNodes(info,1,3)
   },3000)
},3000)

// }, 1000);


