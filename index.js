const root = document.getElementById("root");
headerHome() 
headerNav()
headerImg()
function headerHome() {
  const header = document.createElement("header");
  const texto = document.createElement("h1");
  texto.textContent= "home"
  header.classList.add("header");
  header. appendChild(texto)
return header

  }

function headerNav(header){
   const headerNav = document.createElement("nav");
  headerNav.classList.add("headerNav");
   const texto = document.createElement("h1");
  texto.textContent= "nav"
  header.appendChild(headerNav);
   header.appendChild(texto);
}

function headerImg(header) {
  const headerImg = document.createElement("img");
  headerImg.src = ".img/3Soñar.png"; 
   headerImg.alt = "Imagen de portada"; 
   headerImg.classList.add("headerImg"); 
    const texto = document.createElement("h1");
  texto.textContent= "img"
   header.appendChild(texto);
  header.appendChild( headerImg);
}

const header = headerHome();  // Primero creamos el header
headerNav(header);            // Luego lo modificamos con nav
headerImg(header);            // Y le agregamos la imagen
root.appendChild(header);