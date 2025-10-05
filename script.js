// Mobile menu toggle: collapse/expand sidebar on small screens
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.querySelector('.sidebar');
if(menuToggle){
menuToggle.addEventListener('click', ()=>{
if(window.innerWidth <= 980){
if(sidebar.style.display === 'none' || getComputedStyle(sidebar).display === 'none'){
sidebar.style.display = 'block';
menuToggle.setAttribute('aria-expanded', 'true');
} else {
sidebar.style.display = 'none';
menuToggle.setAttribute('aria-expanded', 'false');
}
}
})
}


// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a=>{
a.addEventListener('click', function(e){
const hash = this.getAttribute('href');
if(hash.length>1){
e.preventDefault();
const target = document.querySelector(hash);
if(target){ target.scrollIntoView({behavior:'smooth', block:'start'}); }
}
})
});


/* Notas:
- Sustituí la estructura para tener una SIDEBAR con contacto, habilidades e idiomas (fija en escritorio) y
un MAIN con resumen, experiencia, proyectos y contacto detallado.
- Esto ordena visualmente la información: sidebar como 'tarjeta de perfil' y contenido principal secuenciado.
- Mantén la carpeta imágenes con: profile.jpg y project_snmp.png.
*/