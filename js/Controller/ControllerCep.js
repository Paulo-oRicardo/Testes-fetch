class ControllerCep{
   static searchCep(cep){
      const cepModel = new ModelCep();

      cepModel.findCep(cep, () =>{
         ViewCep.completedAddress(cepModel)
      })
   }
}
const btnSearch = document.querySelector('.btnCep');
btnSearch.addEventListener('click',()=>{
   ControllerCep.searchCep(document.querySelector('.inputCep').value.toString());
})