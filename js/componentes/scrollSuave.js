export default function scrollSuave(){
   const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
   
   function scrollToSection(event){
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href'); //pegando o valor do atributo com getAttribute
      const section = document.querySelector(href);
      section.scrollIntoView({
         behavior: "smooth",
         block:"start",
      });
   
      // uma forma de fazer
      // const topo = section.offsetTop;
      // window.scrollTo({
      //    top:topo,
      //    behavior: 'smooth',
      // })
   }
   linksInternos.forEach(link=>{
      link.addEventListener('click', scrollToSection);
   })
   }