class ModelCep{
   findCep(cep, retorno){
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(response => response.json())
      .then(body=>{
         this._rua = body.logradouro
         this._bairro = body.bairro
         this._localidade = body.localidade
         this._ddd = body.ddd
         this._uf = body.uf 
         this._ibge = body.ibge
         retorno()
      })
      .catch(err =>{
         console.log(`${err} Deu erro ai ó`)
      })
   }
}