//Pegando todos os elementos a que o href começa com #
//SROLL SUAVE
import scrollSuave from '../componentes/scrollSuave.js';
import initAnimationScroll from '../componentes/animationScroll.js';
import { fetchBitDolar, fetchBitEuro, fetchBitIene, fetchBitReal } from '../componentes/fetchBit.js';

scrollSuave();

//ScrollAnimation   
initAnimationScroll();

document.getElementById('btnDolar').addEventListener('click',fetchBitDolar)
document.getElementById('btnReal').addEventListener('click',fetchBitReal)
document.getElementById('btnEuro').addEventListener('click',fetchBitEuro)
document.getElementById('btnIene').addEventListener('click',fetchBitIene)
const piada = document.getElementById('pPiada')
function joker(){
   fetch('https://api.chucknorris.io/jokes/random')
   .then(r => r.json())
   .then(joke => {   
      piada.textContent= joke.value;
   })
}
document.getElementById('btnPiada').addEventListener('click',joker)