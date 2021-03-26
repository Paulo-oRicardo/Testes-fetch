export default function initAnimationScroll(){

   const sections = document.querySelectorAll('.js-scroll');
   if(sections.length){
   const windowHalf = window.innerHeight * 0.6; //pegando 60% da tela do usuario

   function animaScroll(){
   sections.forEach(section=>{
      const sectionTop = section.getBoundingClientRect().top ; //da o valor do elemento ao topo de acordo com o scroll
      const isSectionVisible = (sectionTop - windowHalf) < 0;
      if(isSectionVisible)
         section.classList.add('ativo')
      else
      section.classList.remove('ativo')
   })
   }
   animaScroll();

   window.addEventListener('scroll', animaScroll);
   }
}