
export default function joker(piada){
   fetch('https://api.chucknorris.io/jokes/random')
   .then(r => r.json())
   .then(joke => {   
      piada.textContent= joke.value;
   })
}