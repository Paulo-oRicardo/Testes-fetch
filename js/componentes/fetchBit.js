export function fetchBitDolar(){
   fetch(`https://blockchain.info/ticker`)
   .then(response => response.json())
   .then(valor =>{
      const dolar = document.getElementById('lbDolar')
      dolar.innerText = (`${valor.USD.symbol} ${valor.USD.buy}`)
   })  .catch(err =>{
      console.log(`${err} Deu erro ai ó`)
   })
}
export function fetchBitReal(){
   fetch(`https://blockchain.info/ticker`)
   .then(response => response.json())
   .then(valor =>{
      const real = document.getElementById('lbReal')    
      real.innerText = (`${valor.BRL.symbol} ${valor.BRL.buy}`)
   })  .catch(err =>{
      console.log(`${err} Deu erro ai ó`)
   })
}
export function fetchBitEuro(){
   fetch(`https://blockchain.info/ticker`)
   .then(response => response.json())
   .then(valor =>{
      const euro = document.getElementById('lbEuro')

      euro.innerText = (`${valor.EUR.symbol} ${valor.EUR.buy}`)
   })  .catch(err =>{
      console.log(`${err} Deu erro ai ó`)
   })
}
export function fetchBitIene(){
   fetch(`https://blockchain.info/ticker`)
   .then(response => response.json())
   .then(valor =>{
      const iene = document.getElementById('lbIene')
      iene.innerText = (`${valor.JPY.symbol} ${valor.JPY.buy}`)
   })  .catch(err =>{
      console.log(`${err} Deu erro ai ó`)
   })
}

