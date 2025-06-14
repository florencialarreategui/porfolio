// Obtener el div root

const root = document.getElementById('root');

function crearMenuAlternativo() {
  const navAlt = document.createElement('nav');
  navAlt.className = 'menu-alternativo';

  Object.entries(secciones).forEach(([texto, id], index, arr) => {
    const span = document.createElement('span');
    span.textContent = texto;
    span.style.cursor = 'pointer';
    span.addEventListener('click', () => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    });

    navAlt.appendChild(span);

    // Agregar separador "|", excepto después del último
    if (index < arr.length - 1) {
      const separator = document.createElement('span');
      separator.textContent = ' | ';
      navAlt.appendChild(separator);
    }
  });

  return navAlt;
}
// Crear header
const header = document.createElement('header');
header.className = 'container';

const menuHome = document.createElement('div');
menuHome.className = 'menu-home';

const h1Nombre = document.createElement('h1');
h1Nombre.textContent = 'Florencia';

const h2Apellido = document.createElement('h2');
h2Apellido.textContent = 'Larreategui';

const nav = document.createElement('nav');
const ul = document.createElement('ul');

// Diccionario de secciones para navegación
const secciones = {
  'Sobre mi': 'sobre-mi',
  'Formación': 'formacion',
  'Experiencia Laboral': 'experiencia',
  'Herramientas de desarrollo': 'habilidades-dev',
  'Herramientas de diseño': 'habilidades-dis',
  'Proyectos': 'proyectos',
  'Contacto': 'formulario',
};

// Crear los ítems del menú con funcionalidad de scroll
Object.entries(secciones).forEach(([texto, id]) => {
  const li = document.createElement('li');
  li.textContent = texto;
  li.style.cursor = 'pointer';
  li.addEventListener('click', () => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  });
  ul.appendChild(li);
});

nav.appendChild(ul);
menuHome.appendChild(h1Nombre);
menuHome.appendChild(h2Apellido);
menuHome.appendChild(nav);
header.appendChild(menuHome);
root.appendChild(header);

// Crear main
const main = document.createElement('main');

// Sección "Sobre mi"
const sobreMi = document.createElement('div');
sobreMi.className = 'container sobre-mi';
sobreMi.id = 'sobre-mi';

const cardSobreMi = document.createElement('div');
cardSobreMi.className = 'card';

const h1SobreMi = document.createElement('h1');
h1SobreMi.textContent = 'Sobre mi';

const pSobreMi = document.createElement('p');
pSobreMi.textContent = 'Soy diseñadora, analista y docente, tengo 32 años, me considero una persona creativa y detallista, apasionada por el aprendizaje y siempre en búsqueda de nuevos desafíos. Me destaco en las áreas referidas a la tecnología, la educación , la comunicación y el diseño.';

cardSobreMi.appendChild(h1SobreMi);
cardSobreMi.appendChild(pSobreMi);
sobreMi.appendChild(cardSobreMi);
sobreMi.appendChild(crearMenuAlternativo())
main.appendChild(sobreMi);

// Función para crear secciones con tarjetas
function crearSeccionConCards(titulo, items, id) {
  const section = document.createElement('div');
  section.className = 'container fondo';
  section.id = id;

  const h1 = document.createElement('h1');
  h1.textContent = titulo;
  section.appendChild(h1);

  items.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    const h2 = document.createElement('h2');
    h2.textContent = item;
    card.appendChild(h2);
    section.appendChild(card);
  });

  return section;
}

// Agregar Formación y Experiencia

const formacion = crearSeccionConCards('Formación', ['Estudios y capacitaciones'], 'formacion');
formacion.appendChild(crearMenuAlternativo());
main.appendChild(formacion);

const experiencia = crearSeccionConCards('Experiencia laboral', [''], 'experiencia');
experiencia.appendChild(crearMenuAlternativo());
main.appendChild(experiencia);
//--------------------------------------------------------------------------------
// grid de habilidades 
function crearSeccionConImagenes(titulo, imagenes, id) {
  const seccion = document.createElement('div');
  seccion.className = 'container fondo';
  seccion.id = id;

  const h1 = document.createElement('h1');
  h1.textContent = titulo;

  const gridImg = document.createElement('div');
  gridImg.className = 'grid-img';

  imagenes.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    gridImg.appendChild(img);
  });

  seccion.appendChild(h1);
  seccion.appendChild(gridImg);
  seccion.appendChild(crearMenuAlternativo());

  return seccion;
}
// Habilidades (dos secciones)

const habilidadesDesarrollo = crearSeccionConImagenes(
  'Herramientas de desarrollo',
  [
    'img/herramientas/html.png',
    'img/herramientas/css.png',
    'img/herramientas/js.png',
    'img/herramientas/react.png',
    'img/herramientas/git.png',
    'img/herramientas/node.png',
    'img/herramientas/php.png',
    'img/herramientas/mysql.png',
    'img/herramientas/bootstrap.png',
    'img/herramientas/sass.png',
  ],
  'habilidades-dev'
);
main.appendChild(habilidadesDesarrollo);

const habilidadesDiseno = crearSeccionConImagenes(
  'Herramientas de diseño',
  [
    'img/herramientas/corel.png',
    'img/herramientas/ai.png',
    'img/herramientas/ps.png',
    'img/herramientas/canva.png',
    'img/herramientas/gimp.png',
    'img/herramientas/inkscape.png',
    'img/herramientas/figma.png',
    'img/herramientas/blender.png'
  ],
  'habilidades-dis'
);
main.appendChild(habilidadesDiseno);
//--------------------------------------------------------------------------
// Proyectos
const proyectos = document.createElement('div');
proyectos.className = 'container proyectos fondo';
proyectos.id = 'proyectos';

const h1Proyectos = document.createElement('h1');
h1Proyectos.textContent = 'Proyectos';

const gridImg = document.createElement('div');
gridImg.className = 'grid-img';

[
  'img/proyectos-web/generador-meme.jpg',
  'img/proyectos-web/ahorrada.png',
  'img/proyectos-web/rick.png',
  'img/proyectos-web/market.png',
  'img/proyectos-web/gilda.png',
  'img/proyectos-web/peli.png'
].forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = '';
  gridImg.appendChild(img);
});

proyectos.appendChild(h1Proyectos);
proyectos.appendChild(gridImg);
proyectos.appendChild(crearMenuAlternativo())
main.appendChild(proyectos);

// Formulario
const formulario = document.createElement('div');
formulario.className = 'container formulario fondo';
formulario.id = 'formulario';

const form = document.createElement('form');
form.id = 'consulta_form';

const h2Form = document.createElement('h2');
h2Form.textContent = 'Hablemos';

form.appendChild(h2Form);

const labelsInputs = [
  { label: 'Nombre completo:', id: 'nombre', type: 'text', name: 'nombre' },
  { label: 'Email', id: 'email', type: 'text', name: 'email' },
  { label: 'Consulta', id: 'comentarios', type: 'textarea', name: 'comentarios' }
];

labelsInputs.forEach(field => {
  const label = document.createElement('label');
  label.setAttribute('for', field.id);
  label.textContent = field.label;
  form.appendChild(label);

  if (field.type === 'textarea') {
    const textarea = document.createElement('textarea');
    textarea.id = field.id;
    textarea.name = field.name;
    textarea.rows = 4;
    form.appendChild(textarea);
  } else {
    const input = document.createElement('input');
    input.type = field.type;
    input.id = field.id;
    input.name = field.name;
    input.required = true;
    form.appendChild(input);
  }
});

const btn = document.createElement('button');
btn.type = 'submit';
btn.textContent = 'Enviar consulta';
form.appendChild(btn);

formulario.appendChild(form);
formulario.appendChild(crearMenuAlternativo())
main.appendChild(formulario);

// Agregar main al body
document.body.appendChild(main);

// Footer
const footer = document.createElement('footer');
document.body.appendChild(footer);
