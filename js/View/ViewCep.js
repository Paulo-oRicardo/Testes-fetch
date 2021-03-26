class ViewCep{
   static completedAddress(cepModel){
      let results = `<p><strong>Logradouro:</strong> ${cepModel._rua}</p>
      <p><strong>Bairro:</strong> ${cepModel._bairro}</p>
      <p><strong>Localidade:</strong> ${cepModel._localidade}</p>
      <p><strong>Uf:</strong> ${cepModel._uf}</p>
      <p><strong>DDD:</strong> ${cepModel._ddd}</p>
      <p><strong>IBGE:</strong> ${cepModel._ibge}</p>`;

      const divCep = document.querySelector('.resultsCep')
      divCep.innerHTML = results
   }
   
}