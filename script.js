const reloj = document.getElementById("clock");
const contenedorNumeros = document.getElementById("numeros");

const posicionarNumeros = (numero, index) => {
  let angulo = (Math.PI / 180) * (90 - index * 30);
  let diametro = reloj.clientWidth * 0.8;

  let x = Math.cos(angulo) * (diametro / 2);
  let y = Math.sin(angulo) * (diametro / 2);

  // console.log(numero);
  numero.style.transform = `translate(calc(-50% - ${-x}px), calc(-50% - ${y}px))`;
};

for (let i = 1; i <= 12; i++) {
  let numero = document.createElement("span");

  posicionarNumeros(numero, i);

  numero.textContent = i;

  contenedorNumeros.appendChild(numero);
}

window.onresize = function () {
  contenedorNumeros.childNodes.forEach((e) => {
    posicionarNumeros(e, parseInt(e.textContent));
  });
};

function changleTheme() {
  document.body.classList.toggle("black");
  localStorage.setItem("dark", body.classList.contains("black") ? "1" : "0");
}

if (localStorage.getItem("dark") == "1") {
  body.classList.add("black");
}

function actualizarManecillas() {
  const date = new Date();

  const Segundos = date.getSeconds();
  const Minutes = date.getMinutes();
  const Hours = date.getHours();

  const anguloSegundos = (Segundos * 6) + 180;
  const anguloMinutes = (Minutes * 6 + Minutes / 10) + 180;
  const anguloHours = (Hours * 30) + (Hours / 2) + 180;

  const HorasAnimation = document.getElementById("horas");
  const MinutosAnimation = document.getElementById("minutos");
  const SegundosAnimation = document.getElementById("segundos");

  HorasAnimation.style.transform = `rotate(${anguloHours}deg)`;
  MinutosAnimation.style.transform = `rotate(${anguloMinutes}deg)`;
  SegundosAnimation.style.transform = `rotate(${anguloSegundos}deg)`;
}

actualizarManecillas();
setInterval(actualizarManecillas, 500);
