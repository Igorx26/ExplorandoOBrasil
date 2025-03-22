console.log("Script carregado!"); // Confirma se o script foi carregado corretamente

let menuIcon = document.querySelector(".menuIcon");
let navbar = document.querySelector(".navbar");

console.log(navbar); // Confirma se o elemento navbar foi encontrado

menuIcon.onclick = () => {
  console.log("MenuIcon clicado!"); // Confirma se o clique foi detectado
  navbar.classList.toggle("active"); // Alterna a classe active para mostrar/esconder o menu
};
