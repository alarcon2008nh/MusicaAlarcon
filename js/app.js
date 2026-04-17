const elementos = document.querySelectorAll('.oculto');

const mostrarScroll = () => {
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const altura = window.innerHeight;

    if(top < altura - 60){
      el.classList.add('mostrar');
    }
  });
}

window.addEventListener('scroll', mostrarScroll);
window.addEventListener('load', mostrarScroll);
