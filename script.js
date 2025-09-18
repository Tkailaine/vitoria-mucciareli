//Efeito no Header

const header = document.querySelector("header");
const logo = document.querySelector(".logo")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // quando rolar mais de 50px
    header.classList.add("scrolled");
    logo.classList.remove("logo-branca");
  } else {
    header.classList.remove("scrolled");
    logo.classList.add("logo-branca")
  }
});

//menu mobile

const menu = document.getElementById("menu");
const iconeMenu = document.getElementById("icone-menu");


iconeMenu.addEventListener("click", () => {
  menu.classList.toggle("active");
  iconeMenu.classList.toggle("active");
});


document.querySelectorAll("#menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    iconeMenu.classList.remove("active");
  });
});



(function(){
    const fotoWrappers = document.querySelectorAll('.sobre-advogado__foto');
    fotoWrappers.forEach(wrapper=>{
      const img = wrapper.querySelector('img');
      if(img && img.src){
        wrapper.style.setProperty('--img-src', `url('${img.src}')`);
     
        wrapper.style.position = 'relative';
        const beforeStyle = `background-image: url('${img.src}');`;
        wrapper.style.setProperty('background-image', 'none'); // 
        wrapper.dataset.bg = img.src;
       
        const rule = `.sobre-advogado__foto::before{ background-image: url("${img.src}") !important; }`;
        try{
          const s = document.createElement('style');
          s.innerHTML = rule;
          document.head.appendChild(s);
        }catch(e){}
      }
    });
  })();


  //ANIMAÇÃO DE SURGIMENTO

function animarScroll() {
  const elementos = document.querySelectorAll('.surgir, .surgir-direita, .surgir-esquerda, .surgir-baixo');

  elementos.forEach(el => {
    const posicao = el.getBoundingClientRect().top;
    const alturaTela = window.innerHeight;

    if (posicao < alturaTela - 100) {
      el.classList.add('aparecendo');
    } else {
      el.classList.remove('aparecendo'); // permite repetir ao rolar de volta
    }
  });
}

window.addEventListener('scroll', animarScroll);
window.addEventListener('load', animarScroll);
