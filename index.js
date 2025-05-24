const root = document.getElementById("root");

// function headerHome() {
//   const header = document.createElement("header");
//   const florencia = document.createElement("h1");
//   florencia.textContent = "Florencia";
//   const larreategui = document.createElement("h2");
//   larreategui.textContent = "Larreategui";
//   header.classList.add("header");
//   header.append(florencia, larreategui);
//   return header;
// }

// function sectionNav(header) {
//   const headerNav = document.createElement("nav");
//   headerNav.classList.add("sectionNav");
//   const lista = document.createElement("ul");
//   lista.classList.add("lista");

//   const itemHome = document.createElement("li");
//   itemHome.textContent = "Home";

//   const itemAbout = document.createElement("li");
//   itemAbout.textContent = "Sobre mi";

//   // Scroll suave a la sección "about"
//   itemAbout.addEventListener("click", () => {
//     const aboutSection = document.getElementById("about");
//     if (aboutSection) {
//       aboutSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });

//   const itemSkils = document.createElement("li");
//   itemSkils.textContent = "Habilidades";

//   const itemProyects = document.createElement("li");
//   itemProyects.textContent = "Proyectos y obras";

//   const itemForm = document.createElement("li");
//   itemForm.textContent = "Contacto";

//   lista.append(itemHome, itemAbout, itemSkils, itemProyects, itemForm);
//   headerNav.appendChild(lista);
//   header.appendChild(headerNav);
// }

// function aboutMe() {
//   const section = document.createElement("section");
//   section.id = "about";
//   const titulo = document.createElement("h2");
//   titulo.textContent = "Sobre mí";
//   const parrafo = document.createElement("p");
//   parrafo.textContent = "Esta es la sección sobre mí.";
//   section.append(titulo, parrafo);
//   return section;
// }

// // Renderizar
// const header = headerHome();
// headerNav(header);
// root.appendChild(header);
// root.appendChild(aboutMe());


// function headerImg(header) {
//   const headerImg = document.createElement("img");
//   headerImg.src = "./img/3Soñar.png";
//   headerImg.alt = "Imagen de portada";
//   headerImg.classList.add("headerImg");
//   const texto = document.createElement("h1");
//   texto.textContent = "img"
//   header.appendChild(texto);
//   header.appendChild(headerImg);
// }
// document.getElementById("consulta_form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   // lógica para enviar o validar el formulario
// });